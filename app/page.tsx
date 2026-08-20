export default function CulturaBrasileira() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans flex flex-col">
      <header className="bg-gradient-to-r from-green-600 to-yellow-500 text-white py-32 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-md">A Alma da Cultura Brasileira</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow">Um mergulho profundo na diversidade, nas cores, nos ritmos e nos sabores do Brasil.</p>
      </header>

      <section className="py-20 px-6 max-w-5xl mx-auto flex-grow">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Nossos Ritmos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Samba</h3>
            <p>O coração do carnaval e a expressão mais famosa da identidade musical brasileira.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Bossa Nova</h3>
            <p>A fusão elegante do samba com o jazz que levou a música brasileira para o mundo.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Forró</h3>
            <p>O ritmo contagiante do Nordeste, embalado pela sanfona, zabumba e triângulo.</p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-800 mb-10 text-center">Sabores Inconfundíveis</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-full md:w-1/3 bg-zinc-200 h-48 rounded-lg flex items-center justify-center text-zinc-500">Imagem: Feijoada</div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">A Tradicional Feijoada</h3>
                <p className="text-gray-700">Uma mistura rica de feijão preto e carnes, servida com arroz, farofa e laranja.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-full md:w-1/3 bg-zinc-200 h-48 rounded-lg flex items-center justify-center text-zinc-500">Imagem: Pão de Queijo</div>
              <div className="w-full md:w-2/3 text-right">
                <h3 className="text-2xl font-bold mb-2">O Orgulho Mineiro</h3>
                <p className="text-gray-700">Pequenos pães assados de queijo e polvilho. Perfeitos com um café coado.</p>
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