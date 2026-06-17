import svgPaths from "./svg-r57tavgxwk";

function IconesRedes() {
  return (
    <div className="absolute inset-[59.29%_12.66%_30.87%_73.68%]" data-name="Icones redes">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 196.751 36">
        <g id="Icones redes">
          <path d={svgPaths.p3f9c1200} fill="var(--fill-0, white)" id="youtube" />
          <path d={svgPaths.p1065e400} fill="var(--fill-0, white)" id="facebook" />
          <path d={svgPaths.p29735300} fill="var(--fill-0, white)" id="insta" />
          <path d={svgPaths.p8286c80} fill="var(--fill-0, white)" id="linkedin" />
        </g>
      </svg>
    </div>
  );
}

function AcompanheNossasRedes() {
  return (
    <div className="absolute contents left-[1061px] top-[168px]" data-name="Acompanhe nossas redes">
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[59px] leading-[0] left-[1061px] text-[16px] text-white top-[168px] w-[297px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] mb-0">Acompanhe nossa redes e receba</p>
        <p className="leading-[normal]">nossas notícias em tempo real.</p>
      </div>
    </div>
  );
}

function NossaRedes() {
  return (
    <div className="absolute contents left-[1061px] top-[111px]" data-name="Nossa redes">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[27px] leading-[normal] left-[1061px] text-[16px] text-white top-[111px] w-[165px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nossas Redes sociais
      </p>
    </div>
  );
}

function NossaRedesSociais() {
  return (
    <div className="absolute contents left-[1061px] top-[111px]" data-name="Nossa Redes sociais">
      <IconesRedes />
      <AcompanheNossasRedes />
      <NossaRedes />
    </div>
  );
}

function RevisaoTributaria() {
  return (
    <div className="absolute contents left-[738px] top-[238px]" data-name="revisão tributaria">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[738px] text-[16px] text-white top-[238px] w-[233px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Revisão tributária
      </p>
    </div>
  );
}

function ApuracaoDeIcms() {
  return (
    <div className="absolute contents left-[738px] top-[203px]" data-name="Apuração de icms">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[738px] text-[16px] text-white top-[203px] w-[233px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Apuração do ICMS
      </p>
    </div>
  );
}

function ConferenciaDeRegistros() {
  return (
    <div className="absolute contents left-[738px] top-[168px]" data-name="Conferencia de registros">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[738px] text-[16px] text-white top-[168px] w-[233px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Conferência de Registros Fiscais
      </p>
    </div>
  );
}

function Servicos1() {
  return (
    <div className="absolute contents left-[738px] top-[111px]" data-name="Serviços">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[27px] leading-[normal] left-[738px] text-[16px] text-white top-[111px] w-[139px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Serviços
      </p>
    </div>
  );
}

function Servicos() {
  return (
    <div className="absolute contents left-[738px] top-[111px]" data-name="Serviços">
      <RevisaoTributaria />
      <ApuracaoDeIcms />
      <ConferenciaDeRegistros />
      <Servicos1 />
    </div>
  );
}

function NossosServicos() {
  return (
    <div className="absolute contents left-[507px] top-[238px]" data-name="nossos serviços">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[507px] text-[16px] text-white top-[238px] w-[119px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nossos serviços
      </p>
    </div>
  );
}

function Sobre() {
  return (
    <div className="absolute contents left-[507px] top-[203px]" data-name="sobre">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[507px] text-[16px] text-white top-[203px] w-[88px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sobre
      </p>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute contents left-[507px] top-[168px]" data-name="home">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[507px] text-[16px] text-white top-[168px] w-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
    </div>
  );
}

function LinksUteis1() {
  return (
    <div className="absolute contents left-[507px] top-[111px]" data-name="Links uteis">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[27px] leading-[normal] left-[507px] text-[16px] text-white top-[111px] w-[139px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Links úteis
      </p>
    </div>
  );
}

function LinksUteis() {
  return (
    <div className="absolute contents left-[507px] top-[111px]" data-name="links uteis">
      <NossosServicos />
      <Sobre />
      <Home />
      <LinksUteis1 />
    </div>
  );
}

function Email() {
  return (
    <div className="absolute contents left-[134px] top-[237px]" data-name="Email">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[19px] leading-[0] left-[134px] text-[16px] text-white top-[237px] w-[311px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{`E-mail: `}</span>
        <span className="leading-[normal]">gestao@digitalpratico.com.br</span>
      </p>
    </div>
  );
}

function Telefone() {
  return (
    <div className="absolute contents left-[134px] top-[206px]" data-name="telefone">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[16px] leading-[0] left-[134px] text-[16px] text-white top-[206px] w-[258px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Telefone: `}</span>
        <span className="leading-[normal]">+55 (81) 9 9932-7339</span>
      </p>
    </div>
  );
}

function Endereco() {
  return (
    <div className="absolute contents left-[134px] top-[132px]" data-name="Endereço">
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[59px] leading-[0] left-[134px] text-[16px] text-white top-[132px] w-[302px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Edifício Luciano Costa
        </p>
        <p className="leading-[normal] mb-0">Rua Dona Maria César, n° 170 - Sala 203 A</p>
        <p className="leading-[normal]">Recife/PE - CEP: 50030-140 / Brasil</p>
      </div>
    </div>
  );
}

function PraticoDigital() {
  return (
    <div className="absolute contents left-[134px] top-[75px]" data-name="pratico digital">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[27px] leading-[normal] left-[134px] text-[21px] text-white top-[75px] w-[139px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Prático Digital
      </p>
    </div>
  );
}

function PraticoDigitalEndereco() {
  return (
    <div className="absolute contents left-[134px] top-[75px]" data-name="pratico digital endereço">
      <Email />
      <Telefone />
      <Endereco />
      <PraticoDigital />
    </div>
  );
}

function Rodape1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="RODAPE">
      <div className="absolute bg-[#1b81a2] h-[366px] left-0 top-0 w-[1440px]" data-name="bg" />
      <NossaRedesSociais />
      <Servicos />
      <LinksUteis />
      <PraticoDigitalEndereco />
    </div>
  );
}

export default function Rodape() {
  return (
    <div className="relative size-full" data-name="RODAPE">
      <Rodape1 />
    </div>
  );
}