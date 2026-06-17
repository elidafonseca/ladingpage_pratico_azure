import svgPaths from "./svg-umffmgwdz4";
import imgMapExemplo from "./99db223e83b82edae2887ecc729d4ecab6db32d2.png";

function BtnComeceAgora() {
  return (
    <div className="absolute contents left-[865px] top-[680px]" data-name="btn comece agora">
      <div className="absolute bg-[#1b81a2] h-[36.735px] left-[865px] rounded-[10px] top-[680px] w-[166px]" data-name="COMECE AGORA" />
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[18px] leading-[normal] left-[886px] text-[16px] text-white top-[689px] w-[133px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enviar mensagem
      </p>
    </div>
  );
}

function Mensagem() {
  return (
    <div className="absolute contents left-[637px] top-[423px]" data-name="mensagem">
      <div className="absolute border border-[#5a5c5e] border-solid h-[212px] left-[637px] rounded-[10px] top-[447px] w-[650px]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[637px] text-[#5a5c5e] text-[16px] top-[423px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mensagem
      </p>
    </div>
  );
}

function Assunto() {
  return (
    <div className="absolute contents left-[637px] top-[339px]" data-name="Assunto">
      <div className="absolute border border-[#5a5c5e] border-solid h-[45px] left-[637px] rounded-[10px] top-[363px] w-[650px]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[637px] text-[#5a5c5e] text-[16px] top-[339px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assunto
      </p>
    </div>
  );
}

function Email() {
  return (
    <div className="absolute contents left-[962px] top-[255px]" data-name="email">
      <div className="absolute border border-[#5a5c5e] border-solid h-[45px] left-[962px] rounded-[10px] top-[279px] w-[325px]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[962px] text-[#5a5c5e] text-[16px] top-[255px] w-[49.333px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email
      </p>
    </div>
  );
}

function Nome() {
  return (
    <div className="absolute contents left-[637px] top-[255px]" data-name="nome">
      <div className="absolute border border-[#5a5c5e] border-solid h-[45px] left-[637px] rounded-[10px] top-[279px] w-[300px]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[637px] text-[#5a5c5e] text-[16px] top-[255px] w-[54.815px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nome
      </p>
    </div>
  );
}

function Formulario() {
  return (
    <div className="absolute contents left-[613px] top-[242px]" data-name="formulário">
      <div className="absolute flex h-[487px] items-center justify-center left-[613px] top-[242px] w-[694px]">
        <div className="flex-none rotate-180">
          <div className="bg-gradient-to-b from-[#fbfbfb] h-[487px] relative rounded-[25px] to-[#f9f9f9] w-[694px]" data-name="bg formulario" />
        </div>
      </div>
      <BtnComeceAgora />
      <Mensagem />
      <Assunto />
      <Email />
      <Nome />
    </div>
  );
}

function Telefone() {
  return (
    <div className="absolute contents leading-[normal] left-[194px] text-[#2078a3] top-[421px]" data-name="Telefone">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[27px] left-[194px] text-[21px] top-[421px] w-[83px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Telefone
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[22px] left-[194px] text-[16px] top-[458px] w-[147px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`+55 (81) 9 9932-7339 `}</p>
    </div>
  );
}

function Email1() {
  return (
    <div className="absolute contents left-[194px] text-[#2078a3] top-[345px]" data-name="Email">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[27px] leading-[normal] left-[194px] text-[21px] top-[345px] w-[139px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email
      </p>
      <a className="absolute block font-['Roboto:Regular',sans-serif] font-normal h-[24px] leading-[0] left-[194px] text-[16px] top-[382px] w-[214px]" href="mailto:gestao@digitalpratico.com.br" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer leading-[normal]">gestao@digitalpratico.com.br</p>
      </a>
    </div>
  );
}

function Localizacao() {
  return (
    <div className="absolute contents leading-[normal] left-[194px] text-[#2078a3] top-[256px]" data-name="localização">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[27px] left-[194px] text-[21px] top-[256px] w-[129.094px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Localização
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[37px] left-[194px] text-[16px] top-[293px] w-[404px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ed Luciano Costa - R. Dona Maria César, 170 - Sala 203 A Recife, PE, 50030-140
      </p>
    </div>
  );
}

function Telefone1() {
  return (
    <div className="absolute left-[144px] size-[40px] top-[418px]" data-name="telefone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="telefone">
          <path d={svgPaths.pbea2680} fill="var(--fill-0, #2078A3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Email2() {
  return (
    <div className="absolute left-[144px] size-[40px] top-[339px]" data-name="email">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="email">
          <path d={svgPaths.p2e618300} fill="var(--fill-0, #2078A3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Localizacao1() {
  return (
    <div className="absolute left-[144px] size-[40px] top-[250px]" data-name="localização">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="localizaÃ§Ã£o">
          <path d={svgPaths.p16fc3130} fill="var(--fill-0, #2078A3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Incones() {
  return (
    <div className="absolute contents left-[144px] top-[250px]" data-name="incones">
      <Telefone1 />
      <Email2 />
      <Localizacao1 />
    </div>
  );
}

function Dados() {
  return (
    <div className="absolute contents left-[144px] top-[250px]" data-name="dados">
      <Telefone />
      <Email1 />
      <Localizacao />
      <Incones />
    </div>
  );
}

function LocalizacaoEAfins() {
  return (
    <div className="absolute contents left-[134px] top-[242px]" data-name="localização e afins">
      <div className="absolute flex h-[487px] items-center justify-center left-[134px] top-[242px] w-[471px]">
        <div className="flex-none rotate-180">
          <div className="bg-gradient-to-b from-white h-[487px] relative rounded-[25px] to-[#f9f9f9] w-[471px]" data-name="bg localização" />
        </div>
      </div>
      <div className="absolute h-[212px] left-[145px] pointer-events-none rounded-[10px] top-[508px] w-[444px]" data-name="map exemplo">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[10px] size-full" src={imgMapExemplo} />
        <div aria-hidden="true" className="absolute border border-[#1b81a2] border-solid inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <Dados />
    </div>
  );
}

function Texto() {
  return (
    <div className="absolute contents leading-[normal] left-[382px] top-[54px]" data-name="Texto">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[49px] left-[382px] text-[#1b81a2] text-[44px] top-[92px] w-[676px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inicie aqui o seu contato conosco.
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[34px] left-[627px] text-[#2078a3] text-[34px] top-[54px] w-[187px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contate-nos
      </p>
    </div>
  );
}

function Top() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Top">
      <div className="absolute bg-[#fafcfc] h-[194px] left-0 top-0 w-[1440px]" data-name="bg texto" />
      <Texto />
    </div>
  );
}

function EntreEmContato1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="ENTRE EM CONTATO">
      <div className="absolute bg-[#e6e6e6] h-[582px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[194px] w-[1440px]" data-name="bg" />
      <Formulario />
      <LocalizacaoEAfins />
      <Top />
    </div>
  );
}

export default function EntreEmContato() {
  return (
    <div className="relative size-full" data-name="entre em contato">
      <EntreEmContato1 />
    </div>
  );
}