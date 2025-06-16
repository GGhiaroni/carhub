import { Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="descubra">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de modelos</h1>
          <p>Explore os carros que você pode gostar</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container"></div>
        </div>
      </div>
    </main>
  );
}
