import Image from "next/image";
export default function Home() { 
  return(
   <div className="bg-[#1f1f1f] text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 absolute w-full z-20">
        <h1 className="text-2xl font-semibold tracking-wide">
          LUXE
        </h1>

        <div className="flex gap-8 text-sm text-gray-300">
          <a href="#">Home</a>
          <a href="#">Collection</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Perfume"
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px]"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-5xl">

          <p className="uppercase tracking-[0.3em] text-gray-400 mb-6 text-sm">
            Luxury Fragrance Collection
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            Designing
            <br />
            Timeless Pictures
          </h1>

          <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-lg leading-8">
            Sophisticated scents crafted with elegance, emotion, and timeless
            artistry. Experience luxury through minimalist design and refined
            fragrance aesthetics.
          </p>

          <button className="mt-10 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-full">
            Explore Collection
          </button>

        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-20 bg-[#242424]">

        <div className="border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Premium Craftsmanship
          </h2>

          <p className="text-gray-400 leading-7">
            Every fragrance bottle is designed with precision and timeless
            elegance.
          </p>
        </div>

        <div className="border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Luxury Experience
          </h2>

          <p className="text-gray-400 leading-7">
            Immerse yourself in sophisticated scents inspired by modern luxury.
          </p>
        </div>

        <div className="border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Timeless Design
          </h2>

          <p className="text-gray-400 leading-7">
            Minimal aesthetics blended with rich visual storytelling and mood.
          </p>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        © 2026 LUXE Fragrances. All rights reserved.
      </footer>

    </div>
  )
}
