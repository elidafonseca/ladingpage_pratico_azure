import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const FROM_EMAIL = Deno.env.get('FROM_EMAIL');
const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL');

const ALLOWED_ORIGINS = new Set([
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://praticodigital.com',
  'https://www.praticodigital.com',
  // Add the Azure Static Web Apps URL here after the resource is created.
]);

const corsHeaders = (origin: string | null) => ({
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Vary': 'Origin',
  ...(origin && ALLOWED_ORIGINS.has(origin)
    ? { 'Access-Control-Allow-Origin': origin }
    : {}),
});

interface BetaAccessNotification {
  type: 'beta_access';
  data: {
    full_name: string;
    email: string;
    company_name: string;
    position: string;
    cnpj: string;
    ddd: string;
    phone: string;
    created_at: string;
  };
}

interface ContactMessageNotification {
  type: 'contact_message';
  data: {
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
  };
}

type NotificationRequest = BetaAccessNotification | ContactMessageNotification;

serve(async (req) => {
  const origin = req.headers.get('Origin');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: origin && ALLOWED_ORIGINS.has(origin) ? 204 : 403,
      headers: corsHeaders(origin),
    });
  }

  try {
    const { type, data }: NotificationRequest = await req.json();

    if (!RESEND_API_KEY || !FROM_EMAIL || !ADMIN_EMAIL) {
      throw new Error('Missing required environment variables');
    }

    let subject: string;
    let html: string;

    if (type === 'beta_access') {
      subject = 'Nova solicitação de acesso beta - Prático Digital';
      html = `
        <h2>Nova Solicitação de Acesso Beta</h2>
        <p>Uma nova solicitação de acesso beta foi recebida:</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nome Completo:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.full_name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Empresa:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.company_name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Cargo:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.position}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">CNPJ:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.cnpj}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Telefone:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">(${data.ddd}) ${data.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Data:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${new Date(data.created_at).toLocaleString('pt-BR')}</td>
          </tr>
        </table>
      `;
    } else if (type === 'contact_message') {
      subject = 'Nova mensagem de contato - Prático Digital';
      html = `
        <h2>Nova Mensagem de Contato</h2>
        <p>Uma nova mensagem de contato foi recebida:</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nome:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Assunto:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.subject}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mensagem:</td>
            <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${data.message}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Data:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${new Date(data.created_at).toLocaleString('pt-BR')}</td>
          </tr>
        </table>
      `;
    } else {
      throw new Error('Invalid notification type');
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      throw new Error(`Resend API error: ${error}`);
    }

    const resendData = await resendResponse.json();

    return new Response(
      JSON.stringify({ success: true, emailId: resendData.id }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders(origin),
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders(origin),
        },
      }
    );
  }
});
