import "./App.css"

function App() {
  return (
    <>
      <div className="p-6 space-y-8 max-w-6xl mx-auto">
        {/* LATIHAN 1 - NAVBAR */}
        <h2 className="font-semibold">LATIHAN 1</h2>
        <nav className="p-4 bg-gray-100 rounded">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Kiri - Logo */}
            <div className="font-bold text-xl">MyLogo</div>

            {/* Kanan - Menu */}
            <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <hr className="border-gray-200" />

        {/* LATIHAN 2 - GRID GALERI */}
        <h2 className="font-semibold">LATIHAN 2</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2 justify-start">
            {Array.from({ length: 6 }).map((_, i) => (
              <img
              key={i}
              src="https://www.placehold.co/200x200"
              alt={`Gambar Galeri ${i + 1}`}
              className="rounded bg-gray-200 w-[200px] h-[200px] lg:w-[130px] lg:h-[130px] object-contain"
            />
        ))}
        </div>

        <hr className="border-gray-200" />

        {/* LATIHAN 3 - PRICING TABLE */}
        <h2 className="font-semibold">LATIHAN 3</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 text-center bg-gray-200">
            <h3 className="font-semibold text-lg">Basic</h3>
            <p className="text-gray-500 mt-1">Rp 50.000</p>
          </div>

          <div className="p-6 text-center bg-blue-200 md:scale-105">
            <h3 className="font-semibold text-lg">Pro</h3>
            <p className="text-gray-700 mt-1">Rp 100.000</p>
          </div>

          <div className="p-6 text-center bg-gray-200">
            <h3 className="font-semibold text-lg">Premium</h3>
            <p className="text-gray-600 mt-1">Rp 200.000</p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        <h2 className="font-semibold">LATIHAN 4</h2>
        <div className="grid grid-cols-12 gap-4">
          <header className="bg-gray-300 p-4 rounded col-span-12 h-12 md:h-40 min-h-40">
            Header
          </header>

          <aside className="bg-gray-200 p-4 rounded col-span-12 md:col-span-3 min-h-40">Sidebar</aside>

          <main className="bg-white border p-4 rounded col-span-12 md:col-span-9 min-h-40">Content</main>

          <footer className="bg-gray-300 p-4 rounded col-span-12 h-12 md:h-40 min-h-40">
            Footer
          </footer>
        </div>

        <hr className="border-gray-200" />

        {/* LATIHAN 5 - CARD PRODUCT */}
        <h2 className="font-semibold">LATIHAN 5</h2>
        <div className="p-4 border rounded flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
          <img src="https://www.placehold.co/80x80" alt="Gambar Produk" className="h-20 w-20 rounded object-cover" />
          <div>
            <h3 className="font-semibold text-lg">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
