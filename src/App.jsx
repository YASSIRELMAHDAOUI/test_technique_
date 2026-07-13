import React from 'react';

export default function App() {
  return (
    <main className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
      
<section className="relative bg-[#050505] py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 overflow-hidden min-h-screen flex flex-col justify-center">

    {/* --- DÉCORATIONS SVG EN ARRIÈRE-PLAN (masquées sur mobile / tablette) --- */}
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">

            {/* Ligne rouge décorative (partant du haut) */}
            <path
                d="M -50,150 C 400,150 500,700 800,1080"
                stroke="#e03c4f"
                strokeWidth="1.5"
                fill="none"
            />

            {/* Contour du téléphone (smartphone) */}
            <rect
                x="1350"
                y="180"
                width="320"
                height="620"
                rx="50"
                stroke="#ffffff"
                strokeWidth="1.5"
                fill="none"
            />

            {/* Flèche blanche pointant vers le téléphone */}
            <polygon
                points="1290,490 1350,470 1350,510"
                fill="#ffffff"
            />

            {/* Ligne rouge en boucle (bas à droite) */}
            <path
                d="M 1600,920 C 1650,850 1750,980 1850,900"
                stroke="#e03c4f"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    </div>


    {/* --- CONTENU TEXTE PRINCIPAL --- */}
    <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col">

        {/* Titres et Textes */}
        <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-black text-white uppercase leading-[1.15] tracking-tight">
                Les 3 choses à faire dès <br className="hidden sm:block" />
                maintenant pour perdre du <br className="hidden sm:block" />
                poids durablement et pour <br className="hidden sm:block" />
                obtenir un corps athlétique
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 font-medium">
                (avec tes premiers résultats visibles en 3 semaines seulement) !
            </p>

            <p className="mt-8 sm:mt-10 md:mt-12 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                Sans sacrifier ce que tu aimes manger, sans faire des heures de sport et surtout... sans reprise de poids après !
            </p>
        </div>


        {/* --- CERCLE "LEARN MORE" (Milieu bas) --- */}
        <div className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-32 flex justify-center items-center w-full">
            <div className="relative w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px]">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    {/* Trait du cercle */}
                    <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" fill="none" />

                    {/* Chemin caché pour le texte */}
                    <path id="textCirclePath" d="M 5,50 A 45,45 0 1,1 95,50 A 45,45 0 1,1 5,50" fill="none" />

                    {/* Le texte suit le cercle */}
                    <text className="text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] fill-white font-medium tracking-widest uppercase">
                        <textPath href="#textCirclePath" startOffset="15%">
                            LEARN MORE • LEARN MORE • LEARN MORE •
                        </textPath>
                    </text>
                </svg>

                {/* Flèche centrale vers le bas */}
                <div className="absolute inset-0 flex items-center justify-center pb-0.5 sm:pb-1">
                    <svg
                        width="18"
                        height="18"
                        className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] lg:w-[24px] lg:h-[24px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                    </svg>
                </div>
            </div>
        </div>
    </div>


    {/* --- RANGÉE DE LOGOS (Bas de section) --- */}
    <div className="relative z-10 mt-12 sm:mt-14 md:mt-16 lg:mt-20 flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto w-full px-2">

        {/* Logo 1 : Porctime */}
        <div className="flex items-center gap-1 text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide">
            <span className="flex gap-0.5">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-500 rounded-full"></span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-500 rounded-full"></span>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-500 rounded-full"></span>
            </span>
            Porctime
        </div>

        {/* Logo 2 : TRE-KING */}
        <div className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-widest uppercase">
            TRE-KING
        </div>

        {/* Logo 3 : HDK (en rouge avec style dessiné) */}
        <div className="text-[#e03c4f] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold italic transform -rotate-3">
            HDK
        </div>

        {/* Logo 4 : Laces */}
        <div className="text-gray-500 text-xl sm:text-2xl md:text-2xl lg:text-3xl italic font-serif tracking-wide">
            Laces
        </div>

        {/* Logo 5 : Kraken */}
        <div className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase">
            Kraken
        </div>

    </div>

</section>

     
      <section className="bg-white py-20 px-6 md:px-20 relative min-h-[70vh] flex items-center overflow-hidden">
        
        {/* Triangle Rouge (coin haut-gauche) */}
        <svg className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24" viewBox="0 0 100 100">
          <polygon points="0,0 100,0 0,100" fill="#ef4444" />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full relative z-10 max-w-7xl mx-auto">
          
          {/* Texte gauche */}
          <div className="flex flex-col justify-start pt-4">
            <h2 className="text-red-500 text-4xl md:text-5xl font-black uppercase leading-none tracking-tighter">LOREM IPSUM EST</h2>
            <h2 className="text-black text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mt-[-5px]">LOREM IPSUM EST</h2>
            
            <h3 className="text-red-500 font-bold text-lg md:text-xl mt-8 mb-2">Lorem ipsum est un</h3>
            <p className="text-xs md:text-sm text-gray-600 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <button className="bg-black text-white px-8 py-3 font-bold uppercase text-xs md:text-sm mt-6 self-start hover:bg-gray-800 transition-colors shadow-lg">
              LOREM IPSUM EST UN TEXTE
            </button>
          </div>

          {/* Bloc de droite (Carte blanche avec ombre) */}
          <div className="relative flex items-center justify-center mt-10 md:mt-0">
            <div className="bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] w-full md:w-[500px] h-[350px] relative rounded-sm">
              <button className="absolute bottom-5 right-5 bg-[#ef4444] text-white px-6 py-2 text-xs md:text-sm font-bold uppercase rounded-sm shadow-md">
                Lorem
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-16 px-4 md:px-8 relative">
        <h2 className="text-center text-2xl md:text-4xl font-black uppercase text-black mb-12 tracking-tight">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR
        </h2>

        <div className="relative max-w-6xl mx-auto px-10 md:px-20">
          
          {/* Barres rouges verticales (gauche & droite) */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ef4444]"></div>
          <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#ef4444]"></div>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 max-w-5xl w-full z-10 mx-auto px-4 sm:px-6">
    {/* Card 1 */}
    <div className="relative bg-[#e5e5e5] pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-7 md:pb-8 px-4 sm:px-5 md:px-6 flex flex-col items-center text-center rounded-sm min-h-[200px] sm:min-h-[220px] md:min-h-[240px]">
        <div className="absolute -top-8 sm:-top-9 md:-top-10 w-16 sm:w-[72px] md:w-20 h-16 sm:h-[72px] md:h-20 bg-[#de3c4d] rounded-full shadow-lg" />
        <p className="text-xs sm:text-sm md:text-sm text-gray-800 mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-[180px] sm:max-w-[200px] md:max-w-none">
            La technique facile pour...
        </p>
        <h3 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-gray-500 uppercase mt-auto tracking-wide">
            SECRET #1
        </h3>
    </div>

    {/* Card 2 */}
    <div className="relative bg-[#de3c4d] pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-7 md:pb-8 px-4 sm:px-5 md:px-6 flex flex-col items-center text-center rounded-sm min-h-[200px] sm:min-h-[220px] md:min-h-[240px]">
        <div className="absolute -top-8 sm:-top-9 md:-top-10 w-16 sm:w-[72px] md:w-20 h-16 sm:h-[72px] md:h-20 bg-[#de3c4d] rounded-full shadow-lg" />
        <p className="text-xs sm:text-sm md:text-sm text-white mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-[180px] sm:max-w-[200px] md:max-w-none">
            Ce qu'il faut changer dans ton...
        </p>
        <h3 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-white uppercase mt-auto tracking-wide">
            SECRET #2
        </h3>
    </div>

    {/* Card 3 */}
    <div className="relative bg-[#e5e5e5] pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-7 md:pb-8 px-4 sm:px-5 md:px-6 flex flex-col items-center text-center rounded-sm min-h-[200px] sm:min-h-[220px] md:min-h-[240px] sm:col-span-2 lg:col-span-1">
        <div className="absolute -top-8 sm:-top-9 md:-top-10 w-16 sm:w-[72px] md:w-20 h-16 sm:h-[72px] md:h-20 bg-[#de3c4d] rounded-full shadow-lg" />
        <p className="text-xs sm:text-sm md:text-sm text-gray-800 mb-6 sm:mb-7 md:mb-8 leading-relaxed max-w-[180px] sm:max-w-[200px] md:max-w-none">
            Apprends à construire ton...
        </p>
        <h3 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-gray-500 uppercase mt-auto tracking-wide">
            SECRET #3
        </h3>
    </div>
</div>
        </div>

        <div className="mt-12 flex flex-col items-center text-center relative z-10 ml-auto mr-auto max-w-3xl">
  <p className="mt-16 text-gray-500 text-sm max-w-2xl z-10">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  </p>
  <button className="mt-6 px-10 py-3 bg-black text-white text-sm font-bold uppercase rounded-full tracking-wider z-10 hover:opacity-80 transition">
    Lorem ipsum un texte
  </button>
</div>
      </section>


      {/* ================= SECTION 4 : TÉMOIGNAGES (Fond Noir) ================= */}
      <section className="bg-black py-20 px-6 md:px-20 text-white relative overflow-hidden min-h-[50vh] flex flex-col">
        
        {/* Titre Superposé (Rouge derrière le Blanc) */}
        <div className="relative inline-block mb-10 self-start md:ml-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase text-white leading-none tracking-tighter opacity-80">TÉMOIGNAGES</h2>
          <h2 className="absolute mt-2 left-20 text-2xl md:text-4xl font-black uppercase text-red-500 leading-none tracking-tighter -translate-x-2 -translate-y-2 z-10">TÉMOIGNAGES</h2>
        </div>

        {/* Ligne Rouge ondulée (droite) */}
        <svg className="absolute right-0 top-16 w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
          <path d="M 0,60 C 30,10 70,80 90,30" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        
        <div className="flex h-screen w-screen items-center justify-center bg-[#121212]">
      {/* UNIQUE DIV */}
      <div
        className="relative h-[60vh] w-[80vw] max-w-6xl 
          before:absolute before:left-[5%] before:top-1/2 before:h-[60%] before:w-[28%] before:-translate-y-1/2 before:rounded-2xl before:bg-[#0a0a0a] before:shadow-xl before:content-['']
          after:absolute after:right-[5%] after:top-1/2 after:h-[60%] after:w-[28%] after:-translate-y-1/2 after:rounded-2xl after:bg-[#0a0a0a] after:shadow-xl after:content-['']
          after:bg-[linear-gradient(to_bottom,#ef4444_10px,transparent_10px)]
          after:bg-[size:4px_10px] after:bg-[position:top_right] after:bg-no-repeat
        "
      >
        {/* La div elle-même sert de carte centrale */}
        <div className="absolute left-1/2 top-1/2 h-[60%] w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#0a0a0a] shadow-xl" />
      </div>
    </div>
        
        <div className="mt-10 text-center relative z-10 self-center md:ml-10">
          <p className="text-[#ef4444] font-bold text-lg uppercase tracking-widest">Lorem ipsum</p>
          <div className="flex justify-center  mt-1 text-2xl gap-1">
            <span className='text-[#ef4444]'>●</span><span>○</span><span>○</span>
          </div>
          <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider font-medium">Lorem ipsum dolor sit amet</p>
        </div>
      </section>


      {/* ================= SECTION 5 : TEXTE ESPACE / ANT (Fond Blanc) ================= */}
      <section className="bg-white py-16 md:py-24 px-4">
  <div className="max-w-6xl mx-auto flex flex-col gap-8">
    
    {/* --- Ligne du haut : Titre + ANT côte à côte --- */}
    <div className="flex flex-col md:flex-row gap-10  ">
      
      <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase leading-[1.1] tracking-tight">
        Lorem ipsum est un <br />
        texte d'espace réservé <br />
        couramment
      </h2>
      
      <span 
        className="
          text-[#e03c4f] 
          font-bold text-[120px] md:text-[180px] 
          leading-none
        "
      >
        ANT
      </span>
      
    </div>

    {/* --- Ligne du bas : Paragraphes --- */}
    <div className="flex flex-col gap-4 text-[#1a1a1a] text-[17px] leading-[1.7] max-w-2xl">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation <strong className="font-bold">ullamco laboris</strong> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Aldus Corporation, qui a plus tard fusionné avec Adobe Systems, a contribué à amener Lorem Ipsum à l'ère de l'information avec son logiciel phare <strong className="font-bold">1985 Aldus PageMaker</strong>.
      </p>
      <p className="text-[#e03c4f] font-bold border-2 border-[#e03c4f] rounded-sm px-4 py-2 w-fit self-center md:self-start mt-6 bg-[#e03c4f] text-white transition-colors cursor-pointer   ">
        Lorem ipsum dolor  </p>
    </div>

  </div>
</section>


      {/* ================= FOOTER (Noir) ================= */}
      <footer className="bg-[#050505] py-16 md:py-24 px-4 flex flex-col items-center justify-center text-center">
  
  {/* Premier paragraphe (Blanc/Gris) */}
  <p className="text-gray-300 text-base md:text-lg leading-8 max-w-4xl mx-auto">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

  {/* Second paragraphe (Rouge) */}
  <p className="mt-12 text-[#e03c4f] text-base md:text-lg font-medium leading-8 max-w-3xl mx-auto">
    Le passage classique «Lorem ipsum dolor sit amet...» est attribué à un remixage du texte du philosophe romain Cicéron, dont le nom est tiré du traité de Cicéron, <span className="font-bold">C. De Finibus Bonorum</span>.
  </p>

</footer>

    </main>
  );
}
