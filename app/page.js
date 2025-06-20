import {
  BarraDePesquisa,
  CardCarro,
  FiltroCustomizado,
  Hero,
} from "@/components";
import { fetchCarros } from "@/utils";

export default async function Home({ searchParams }) {
  const todosOsCarros = await fetchCarros({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    model: searchParams.model || "",
  });

  const isListaCarrosVazia =
    !Array.isArray(todosOsCarros) || todosOsCarros.length < 1 || !todosOsCarros;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="descubra">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de modelos</h1>
          <p>Explore os carros que você pode gostar</p>
        </div>
        <div className="home__filters">
          <BarraDePesquisa />
          <div className="home__filter-container">
            <FiltroCustomizado title="tipo de combustível" />
            <FiltroCustomizado title="ano" />
          </div>
        </div>
        {!isListaCarrosVazia ? (
          <section>
            <div className="home__cars-wrapper">
              {todosOsCarros?.map((c, key) => (
                <CardCarro carro={c} key={c.title} />
              ))}
            </div>
          </section>
        ) : (
          <p>oops, deu erro</p>
        )}
      </div>
    </main>
  );
}
