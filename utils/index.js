export async function fetchCarros() {
  const headers = {
    "x-rapidapi-key": "f9fb169dfdmshbb09a40a4ce2292p1be1f6jsn8b15f2be40b0",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const data = response.json();

  return data;
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
