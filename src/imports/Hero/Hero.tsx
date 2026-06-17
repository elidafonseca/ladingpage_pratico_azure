import svgPaths from "./svg-s7im9q7bks";

function Bg2EsqDirCinzaEBranco() {
  return (
    <div className="absolute contents left-0 top-0" data-name="bg 2 esq dir cinza e branco">
      <div className="absolute bg-[#dee5e9] h-[698px] left-0 top-0 w-[707px]" data-name="BG cinza" />
      <div className="absolute bg-[#fafcfc] h-[698px] left-[733px] top-0 w-[707px]" data-name="BG branco" />
    </div>
  );
}

function Logotipo() {
  return (
    <div className="absolute inset-[15.9%_9.08%_16.02%_57.92%]" data-name="LOGOTIPO">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 475.2 475.2">
        <g id="LOGOTIPO">
          <path d={svgPaths.p3148c600} fill="var(--fill-0, #FAFCFC)" id="Vector" />
          <path d={svgPaths.p39f97b00} fill="var(--fill-0, #FAFCFC)" id="Vector_2" />
          <path d={svgPaths.pf244c00} fill="var(--fill-0, #FAFCFC)" id="Vector_3" />
          <path d={svgPaths.p25a49f00} fill="var(--fill-0, #FAFCFC)" id="Vector_4" />
          <path d={svgPaths.pa54aa80} fill="var(--fill-0, #FAFCFC)" id="Vector_5" />
          <path d={svgPaths.p2c039780} fill="var(--fill-0, #FAFCFC)" id="Vector_6" />
          <path d={svgPaths.p28af600} fill="var(--fill-0, #FAFCFC)" id="Vector_7" />
          <path d={svgPaths.p27745d00} fill="var(--fill-0, #FAFCFC)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Texto() {
  return (
    <div className="absolute contents left-[140px] text-[#dee5e9] top-[172px]" data-name="Texto">
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal h-[98px] leading-[0] left-[140px] text-[0px] top-[428px] w-[579px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] mb-0 text-[16px]">{`Nossa inteligência artificial reduz custos e economiza tempo automatizando tarefas fiscais e tributárias. Mesmo com pouco conhecimento na área fiscal  você pode transformar a gestão da sua empresa.`}</p>
        <p className="leading-[normal] mb-0 text-[16px]">{` `}</p>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Evite a burocracia e conheça  nossa solução inovadora.`}</p>
      </div>
      <div className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[0] left-[140px] text-[42px] top-[266px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] mb-0">Simplifique sua gestão tributária</p>
        <p className="leading-[normal] mb-0">e foque no que realmente importa:</p>
        <p className="leading-[normal]">O SUCESSO DO SEU NEGÓCIO.</p>
      </div>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[normal] left-[140px] text-[55px] top-[172px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        SEJA PRÁTICO!
      </p>
    </div>
  );
}

function Hero1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="HERO">
      <Bg2EsqDirCinzaEBranco />
      <div className="absolute h-[698px] left-0 top-0 w-[1440px]" data-name="BG forma">
        <div className="absolute inset-[0_-0.28%_-1.15%_-0.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1448 706">
            <g filter="url(#filter0_d_1_61)" id="BG forma">
              <path d={svgPaths.p3463b000} fill="url(#paint0_linear_1_61)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="706" id="filter0_d_1_61" width="1448" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_61" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_61" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_61" x1="588" x2="724" y1="-50" y2="698">
                <stop stopColor="#21719A" />
                <stop offset="1" stopColor="#1A92C6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Logotipo />
      <Texto />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative size-full" data-name="hero">
      <Hero1 />
    </div>
  );
}