export async function fetchCarros(filtros) {
  const { manufacturer, year, fuel, model } = filtros;

  const headers = {
    "x-rapidapi-key": "f9fb169dfdmshbb09a40a4ce2292p1be1f6jsn8b15f2be40b0",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
      { headers: headers }
    );

    //
    if (!response.ok) {
      const errorData = await response.text();
      console.error(
        `Erro na requisição à API: Status ${response.status}, Mensagem: ${errorData}`
      );
      return [];
    }

    const data = await response.json();

    console.log("Dados recebidos da API:", data);

    if (!Array.isArray(data)) {
      console.error("A API não retornou um array. Formato inesperado:", data);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Ocorreu um erro ao buscar carros:", error);
    return [];
  }
}

export const calcularValorAluguelCarro = (year) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = year * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const gerarNumeroAleatorio = () => {
  const min = 15;
  const max = 30;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const camposTraduzidos = {
  make: "Marca",
  model: "Modelo",
  transmission: "Transmissão",
  year: "Ano",
  class: "Classe",
  cylinders: "Cilindros",
  displacement: "Deslocamento",
  drive: "Tração",
  fuel_type: "Combustível",
};

const valoresTraduzidos = {
  transmission: {
    a: "Automático",
    m: "Manual",
  },
  drive: {
    fwd: "Dianteira",
    rwd: "Traseira",
    awd: "Integral",
  },
  fuel_type: {
    gas: "Gasolina",
    diesel: "Diesel",
    electric: "Elétrico",
    hybrid: "Híbrido",
  },
  class: {
    "compact car": "Compacto",
  },
};

export const traduzirValor = (chave, valorOriginal) => {
  const traduzido = valoresTraduzidos[chave]?.[valorOriginal];
  return traduzido ?? valorOriginal;
};

export const transformarPrimeiraLetraMaiuscula = (texto) => {
  if (!texto || typeof texto !== "string") return texto;
  return texto
    .split(" ")
    .map(
      (palavra) =>
        palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
    )
    .join(" ");
};

export const gerarImagemCarroUrl = (carro, angle) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = carro;

  url.searchParams.append("customer", "img");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  return `${url}`;
};

export const atualizarSearchParams = (tipo, valor) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(tipo, valor);

  const novoCaminhoUrl = `${
    window.location.pathname
  }?${searchParams.toString()}`;

  return novoCaminhoUrl;
};
