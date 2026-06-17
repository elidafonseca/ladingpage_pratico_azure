import { Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">

      {/* Main footer - Refined dark background */}
      <div className="relative bg-[#07263D]">

        <div className="relative max-w-[1200px] mx-auto px-8">
          {/* Main footer content */}
          <div className="grid grid-cols-4 gap-16 py-16">

            {/* Navigation Column */}
            <div>
              <h3 className="text-[11px] font-medium text-white/40 mb-5 uppercase tracking-wider">
                Navegação
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#ecosystem" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Ecossistema
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-[11px] font-medium text-white/40 mb-5 uppercase tracking-wider">
                Produtos
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Lucrum.IA
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Tax MEI
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Soluções Personalizadas
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-[11px] font-medium text-white/40 mb-5 uppercase tracking-wider">
                Empresa
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <a href="#quem-somos" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Tecnologia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Segurança
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-white/70 hover:text-white transition-colors">
                    Privacidade
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-[11px] font-medium text-white/40 mb-5 uppercase tracking-wider">
                Contato
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="mailto:contato@praticodigital.com"
                    className="text-[14px] text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                    Email
                  </a>
                </li>
                <li>
                  <span className="text-[14px] text-white/70 inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                    Recife, PE
                  </span>
                </li>
                <li>
                  <a
                    href="https://wa.me/5581999327339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar - Light background */}
      <div className="relative bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="border-t border-slate-200/50 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              {/* Copyright */}
              <div className="text-[13px] text-slate-500">
                © 2026 Prático Digital. Todos os direitos reservados.
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://wa.me/5581999327339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
