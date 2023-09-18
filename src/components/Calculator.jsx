import { useState } from "preact/hooks";

function InteresCompuesto() {
  const [capital, setCapital] = useState(0);
  const [tasa, setTasa] = useState(0);
  const [periodos, setPeriodos] = useState(0);
  const [capitalFinal, setCapitalFinal] = useState(0);
  const [interesesGanadas, setInteresesGanadas] = useState(0);

  const calcularInteres = () => {
    const total = capital * Math.pow(1 + tasa, periodos);
    setCapitalFinal(total.toFixed(2));
    const intereses = total - capital;
    setInteresesGanadas(intereses.toFixed(2));
  };
  // const reset = () => {
  //   setCapital(0);
  //   setTasa(0);
  //   setPeriodos(0);
  // };
  const reset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      itemvalues: [{}],
    });
    setCapital(0);
    setTasa(0);
    setPeriodos(0);
  };
  return (
    <div class="container md:w-1/4  mx-auto flex flex-col items-center justify-center md:mt-6 bg-white rounded-2xl ">
      <div class="my-4">
        <div class="w-full flex flex-col">
          <h1 class="text-xl font-semibold">
            Calculadora de interés compuesto
          </h1>
          <img src="./invest.svg" alt="" class="mx-auto w-32 h-auto mb-4" />
          <label class=" text-lg text-navy-700 font-semibold mb-2">
            Capital inicial:
            <input
              type="number"
              placeholder="Ej: 1000"
              // value={capital}
              onChange={(e) => setCapital(e.target.value)}
              class=" mt-1 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-cyan-500 text-slate-500 placeholder:text-slate-300 dark:!border-cyan-400 dark:!text-cyan-400 dark:placeholder:!text-cyan-400"
            />
          </label>
        </div>

        <div class="w-full flex flex-col">
          <label class=" text-lg text-navy-700 font-semibold mb-2">
            Tasa de interés anual:
            <input
              type="number"
              placeholder="Ej: 10"
              // value={tasa}
              onChange={(e) => setTasa(e.target.value / 100 / 365)}
              class="mt-1 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-cyan-500 text-slate-500 placeholder:text-slate-300 dark:!border-cyan-400 dark:!text-cyan-400 dark:placeholder:!text-cyan-400"
            />
          </label>
        </div>

        <div class="w-full flex flex-col">
          <label class=" text-lg text-navy-700 font-semibold mb-2">
            Cantidad de días:
            <input
              type="number"
              placeholder="Ej: 365"
              // value={periodos}
              onChange={(e) => setPeriodos(e.target.value)}
              class=" mt-1 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-cyan-500 text-slate-00 placeholder:text-slate-300 dark:!border-cyan-400 dark:!text-cyan-400 dark:placeholder:!text-cyan-400"
            />
          </label>
        </div>
      </div>
      <div class="flex">
        <div>
          <button
            onClick={calcularInteres}
            class=" border border-cyan-500 bg-cyan-500 text-white rounded-md px-4 py-2 mx-2 transition duration-500 ease select-none hover:bg-cyan-600 focus:outline-none focus:shadow-outline"
          >
            Calcular
          </button>
        </div>
        <div>
          <button
            onClick={reset}
            class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 mx-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
          >
            Resetear
          </button>
        </div>
      </div>
      <div class="flex fle gap-2">
        <div class="my-4 w-1/2 ">
          <h2 class="text-lg font-bold mb-2">Capital final:</h2>
          <p class="text-xl border rounded-lg p-3 bg-cyan-300 text-right">
            {capitalFinal}
          </p>
        </div>
        <div class="my-4 w-1/2">
          <h2 class="text-lg font-bold mb-2">Int. Ganados:</h2>
          <p class="text-xl border rounded-lg p-3 bg-cyan-300 text-right">
            {interesesGanadas}
          </p>
        </div>
      </div>
      <p class="text-xs p-3 text-slate-600">
        Nota: Esta calculadora de interés compuesto fue desarrollada con fines
        educativos, bajo ningún concepto debe tomarse como una recomendación o
        herramienta financiera.
      </p>
      <p class="text-xs text-right text-slate-500">
        <span class="text-xs">©</span>ezerom 2023
      </p>
    </div>
  );
}

export default InteresCompuesto;
