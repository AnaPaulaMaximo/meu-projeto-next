export default function CulturaBrasileira() {
  return (
    <main className="min-h-screen bg-slate-50 text-zinc-900 font-sans flex flex-col">
      
      {/* Hero Section */}
      <header className="relative py-40 px-6 text-center flex flex-col items-center justify-center overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2000&auto=format&fit=crop" 
            alt="Paisagem Brasileira" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-500 text-yellow-950 font-bold text-sm tracking-widest uppercase mb-6">
            Descubra o Brasil
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight">
            A Alma da Cultura <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">Brasileira</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">
            Um mergulho profundo na diversidade, nas cores, nos ritmos e nos sabores vibrantes do nosso país.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full transition-colors text-lg shadow-lg shadow-green-500/30">
            Comece a Explorar
          </button>
        </div>
      </header>

      {/* Seção de Música */}
      <section className="py-24 px-6 max-w-6xl mx-auto flex-grow">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-zinc-900 tracking-tight">Nossos Ritmos</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card Samba */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🥁</div>
            <h3 className="text-2xl font-bold mb-3 text-zinc-800">Samba</h3>
            <p className="text-gray-600 leading-relaxed">O coração do carnaval e a expressão mais famosa da identidade musical brasileira, com raízes profundas na África.</p>
          </div>
          
          {/* Card Bossa Nova */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎸</div>
            <h3 className="text-2xl font-bold mb-3 text-zinc-800">Bossa Nova</h3>
            <p className="text-gray-600 leading-relaxed">A fusão elegante do samba com o jazz. Poética e suave, levou a música brasileira para os ouvidos de todo o mundo.</p>
          </div>
          
          {/* Card Forró */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🪗</div>
            <h3 className="text-2xl font-bold mb-3 text-zinc-800">Forró</h3>
            <p className="text-gray-600 leading-relaxed">O ritmo contagiante do Nordeste, embalado pela sanfona, zabumba e triângulo. Sinônimo de festa e dança colada.</p>
          </div>
        </div>
      </section>

      {/* Seção de Culinária */}
      <section className="bg-yellow-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-yellow-900 mb-12 text-center tracking-tight">Sabores Inconfundíveis</h2>
          <div className="space-y-12">
            
            {/* Feijoada */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-2xl shadow-lg border border-yellow-100">
              <div className="w-full md:w-2/5 h-64 overflow-hidden rounded-xl relative">
                <img 
                  src="/img/feijoada.webp"
                  alt="Feijoada Brasileira"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-3/5">
                <span className="text-sm font-bold uppercase tracking-wider text-orange-600 mb-2 block">Prato Principal</span>
                <h3 className="text-3xl font-bold mb-3 text-zinc-800">A Tradicional Feijoada</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Uma mistura rica de feijão preto e carnes, cozida lentamente. Tradicionalmente servida com arroz branco, farofa crocante, couve refogada e fatias de laranja.</p>
              </div>
            </div>

            {/* Pão de Queijo */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-6 rounded-2xl shadow-lg border border-yellow-100">
              <div className="w-full md:w-2/5 h-64 overflow-hidden rounded-xl relative">
                <img 
                  src="/img/paodequeijo.jpg" 
                  alt="Pão de Queijo"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-3/5 text-left md:text-right">
                <span className="text-sm font-bold uppercase tracking-wider text-yellow-600 mb-2 block">Lanche Típico</span>
                <h3 className="text-3xl font-bold mb-3 text-zinc-800">O Orgulho Mineiro</h3>
                <p className="text-lg text-gray-600 leading-relaxed">Pequenos pães assados feitos com muito queijo e polvilho. Possuem uma casca crocante e um interior macio e elástico. Perfeitos acompanhados de um café coado na hora.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Um Povo que Celebra</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">O Carnaval paralisa o país em fevereiro, enquanto em junho, o Brasil se veste de xadrez para as Festas Juninas, celebrando com fogueiras, quadrilhas e muita comida típica.</p>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-8 text-center mt-auto">
        <p className="mb-2">© 2026 Descubra o Brasil.</p>
        <p className="text-sm text-green-300">Criado com Next.js e Tailwind CSS</p>
      </footer>
    </main>
  );
}