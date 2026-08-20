export default function CulturaBrasileira() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      
      {/* Hero Section */}
      <header className="relative py-40 px-6 text-center flex flex-col items-center justify-center overflow-hidden min-h-[85vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2000&auto=format&fit=crop" 
            alt="Paisagem Brasileira" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/90 via-slate-900/70 to-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto mt-10">
          <span className="inline-block py-1 px-4 rounded-full bg-yellow-400 text-yellow-950 font-bold text-xs tracking-widest uppercase mb-6 shadow-lg">
            Descubra o Brasil
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight leading-tight">
            A Alma da Cultura <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">Brasileira</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Um mergulho profundo na diversidade, nas cores, nos ritmos e nos sabores vibrantes do nosso país.
          </p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-1">
            Comece a Explorar
          </button>
        </div>
      </header>

      {/* Seção de Música */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">Nossos Ritmos</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-yellow-400 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">🥁</div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Samba</h3>
            <p className="text-slate-600 leading-relaxed">O coração do carnaval e a expressão mais famosa da identidade musical brasileira, com raízes profundas na África.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">🎸</div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Bossa Nova</h3>
            <p className="text-slate-600 leading-relaxed">A fusão elegante do samba com o jazz. Poética e suave, levou a música brasileira para os ouvidos de todo o mundo.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">🪗</div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Forró</h3>
            <p className="text-slate-600 leading-relaxed">O ritmo contagiante do Nordeste, embalado pela sanfona, zabumba e triângulo. Sinônimo de festa e dança colada.</p>
          </div>
        </div>
      </section>

      {/* Seção de Culinária */}
      <section className="bg-white py-24 px-6 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">Sabores Inconfundíveis</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-5/12 h-72 overflow-hidden rounded-2xl relative shadow-lg">
                <img 
                  src="/img/feijoada.webp" 
                  alt="Feijoada Brasileira"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-7/12">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3 block">Prato Principal</span>
                <h3 className="text-3xl font-bold mb-4 text-slate-800">A Tradicional Feijoada</h3>
                <p className="text-lg text-slate-600 leading-relaxed">Uma mistura rica de feijão preto e carnes, cozida lentamente. Tradicionalmente servida com arroz branco, farofa crocante, couve refogada e fatias de laranja.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="w-full md:w-5/12 h-72 overflow-hidden rounded-2xl relative shadow-lg">
                <img 
                  src="/img/paodequeijo.jpg" 
                  alt="Pão de Queijo"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-7/12 text-left md:text-right">
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 mb-3 block">Lanche Típico</span>
                <h3 className="text-3xl font-bold mb-4 text-slate-800">O Orgulho Mineiro</h3>
                <p className="text-lg text-slate-600 leading-relaxed">Pequenos pães assados feitos com muito queijo e polvilho. Possuem uma casca crocante e um interior macio e elástico. Perfeitos acompanhados de um café coado na hora.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Festas */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">Celebrações Culturais</span>
            <h2 className="text-4xl font-extrabold text-slate-800 mb-6 tracking-tight">Um Povo que Celebra</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                A cultura brasileira é inseparável de sua alegria. O <strong>Carnaval</strong> é o espetáculo máximo, paralisando o país com desfiles grandiosos no Sudeste, bloquinhos de rua contagiantes e trios elétricos arrastando multidões pelo Nordeste.
              </p>
              <p>
                No meio do ano, o país se transforma para as <strong>Festas Juninas</strong>. Fogueiras, bandeirinhas coloridas, dança de quadrilha e muita comida à base de milho e amendoim celebram o interior do país de norte a sul.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-green-400 rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <img 
              src="/img/carnaval.webp" 
              alt="Carnaval Brasileiro" 
              className="relative z-10 rounded-2xl shadow-xl w-full h-[450px] object-cover transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Footer Profissional */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center mt-auto border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-4">Descubra o Brasil</h3>
          <p className="mb-8 text-slate-500 max-w-md mx-auto">Um projeto dedicado a celebrar e espalhar as belezas da cultura brasileira pelo mundo.</p>
          <div className="w-full h-px bg-slate-800 mb-8"></div>
          <p className="text-sm">© {new Date().getFullYear()} Cultura Brasileira. Todos os direitos reservados.</p>
          <p className="text-xs mt-2 text-slate-600">Criado com Next.js, Tailwind CSS e ❤️</p>
        </div>
      </footer>
    </main>
  );
}