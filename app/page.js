import {
  BarraDePesquisa,
  CardCarro,
  FiltroCustomizado,
  Hero,
  MostrarMais,
} from "@/components";
import { anosDeFabricacao, combustivel } from "@/constants";
import { fetchCarros } from "@/utils";

export default async function Home({ searchParams }) {
  const todosOsCarros = await fetchCarros({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
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
            <FiltroCustomizado
              titulo="tipo de combustível"
              parametro="fuel"
              opcoes={combustivel}
            />
            <FiltroCustomizado
              titulo="ano"
              parametro="year"
              opcoes={anosDeFabricacao}
            />
          </div>
        </div>
        {!isListaCarrosVazia ? (
          <section>
            <div className="home__cars-wrapper">
              {todosOsCarros?.map((c, key) => (
                <CardCarro carro={c} key={key} />
              ))}
            </div>

            <MostrarMais
              numeroPagina={(searchParams.pageNumber || 10) / 10}
              isNext={(searchParams.limit || 10) > todosOsCarros.length}
            />
          </section>
        ) : (
          <p>oops, deu erro</p>
        )}
      </div>
    </main>
  );
}
