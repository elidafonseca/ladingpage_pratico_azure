import { supabase } from './supabase/client';

export interface BetaAccessData {
  fullName: string;
  email: string;
  companyName: string;
  position: string;
  cnpj: string;
  ddd: string;
  phone: string;
}

export interface ContactMessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitBetaAccess(data: BetaAccessData): Promise<{ success: boolean; error?: string }> {
  try {
    const created_at = new Date().toISOString();

    // Step 1: Insert into database
    const { error: dbError } = await supabase
      .from('beta_access')
      .insert([
        {
          full_name: data.fullName,
          email: data.email,
          company_name: data.companyName,
          position: data.position,
          cnpj: data.cnpj,
          ddd: data.ddd,
          phone: data.phone,
          created_at,
        },
      ]);

    if (dbError) {
      console.error('Beta access submission error:', dbError);
      return { success: false, error: dbError.message };
    }

    // Step 2: Send email notification (optional - fails silently if Edge Function not deployed)
    try {
      await supabase.functions.invoke('send-form-notification', {
        body: {
          type: 'beta_access',
          data: {
            full_name: data.fullName,
            email: data.email,
            company_name: data.companyName,
            position: data.position,
            cnpj: data.cnpj,
            ddd: data.ddd,
            phone: data.phone,
            created_at,
          },
        },
      });
    } catch (emailError) {
      // Email notification is optional - log but don't fail the submission
      console.warn('Email notification failed (Edge Function may not be deployed):', emailError);
    }

    return { success: true };
  } catch (err) {
    console.error('Beta access submission exception:', err);
    return { success: false, error: 'Erro ao enviar solicitação. Tente novamente.' };
  }
}

export async function submitContactMessage(data: ContactMessageData): Promise<{ success: boolean; error?: string }> {
  try {
    const created_at = new Date().toISOString();

    // Step 1: Insert into database
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          created_at,
        },
      ]);

    if (dbError) {
      console.error('Contact message submission error:', dbError);
      return { success: false, error: dbError.message };
    }

    // Step 2: Send email notification (optional - fails silently if Edge Function not deployed)
    try {
      await supabase.functions.invoke('send-form-notification', {
        body: {
          type: 'contact_message',
          data: {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            created_at,
          },
        },
      });
    } catch (emailError) {
      // Email notification is optional - log but don't fail the submission
      console.warn('Email notification failed (Edge Function may not be deployed):', emailError);
    }

    return { success: true };
  } catch (err) {
    console.error('Contact message submission exception:', err);
    return { success: false, error: 'Erro ao enviar mensagem. Tente novamente.' };
  }
}
