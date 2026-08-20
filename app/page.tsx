export default function CulturaBrasileira() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <header className="bg-gradient-to-r from-green-600 to-yellow-500 text-white py-32 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-md">A Alma da Cultura Brasileira</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow">Um mergulho profundo na diversidade, nas cores, nos ritmos e nos sabores do Brasil.</p>
      </header>

      {/* Seção de Música */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Nossos Ritmos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
            <h3 className="text-xl font-bold mb-3">Samba</h3>
            <p>O coração do carnaval e a expressão mais famosa da identidade musical brasileira, nascido no Rio de Janeiro.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3">Bossa Nova</h3>
            <p>A fusão elegante do samba com o jazz que levou a música brasileira para o mundo nos anos 50 e 60.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
            <h3 className="text-xl font-bold mb-3">Forró</h3>
            <p>O ritmo contagiante do Nordeste, embalado pela sanfona, zabumba e triângulo, essencial nas Festas Juninas.</p>
          </div>
        </div>
      </section>
    </main>
  );
}