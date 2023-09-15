import { useState } from "preact/hooks";

function InteresCompuesto() {
  const [capital, setCapital] = useState(0);
  const [tasa, setTasa] = useState(0);
  const [periodos, setPeriodos] = useState(0);

  const calcularInteres = () => {
    const total = capital * Math.pow(1 + tasa, periodos);
    setCapital(total);
  };
  const reset = () => {
    setCapital(0);
    setTasa(0);
    setPeriodos(0);
  };
  return (
    <div class="container w-1/3 mx-auto flex flex-col items-center justify-center md:mt-6 bg-zinc-400 rounded-2xl ">
      <h1 class="text-2xl font-bold mb-4">Calculadora de interes compuesto</h1>

      <div class="my-4">
        <div class="w-full flex flex-col">
          <label>
            Capital inicial:
            <input
              type="number"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              class=" mx-2 rounded w-full p-1"
            />
          </label>
        </div>

        <div class="w-full flex flex-col">
          <label>
            Tasa de interés anual:
            <input
              type="number"
              value={tasa}
              onChange={(e) => setTasa(e.target.value / 100 / 365)}
              class="mx-2 rounded w-full p-1"
            />
          </label>
        </div>

        <div class="w-full flex flex-col">
          <label>
            Cantidad de días:
            <input
              type="number"
              value={periodos}
              onChange={(e) => setPeriodos(e.target.value)}
              class=" mx-2 rounded p-1 w-full"
            />
          </label>
        </div>
      </div>

      <div class="my-4">
        <button
          onClick={calcularInteres}
          class=" flex-row justify-center  text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 border"
        >
          Calcular
        </button>
      </div>
      <div>
        <button
          onClick={reset}
          class="flex-row justify-center  text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 border"
        >
          Resetear
        </button>
      </div>
      {/*
      <div class="my-4">
        <h2 class="text-2xl font-bold mb-4">Intereses Ganados:</h2>
        <p class="text-xl">{total - capital}</p>
      </div> */}

      <div class="my-4">
        <h2 class="text-2xl font-bold mb-4">Capital final:</h2>
        <p class="text-xl">{capital}</p>
      </div>
    </div>
  );
}

export default InteresCompuesto;
