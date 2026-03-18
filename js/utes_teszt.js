import { sakkEsemenykezelo, utesEllenorzes } from "./fuggvenyek.js?v=2";

export function tesztek() {
  let poz1 = "e3";
  let poz2 = "g1";
  console.assert(utesEllenorzes(poz1, poz2) == true, "átló nem működik jól");

  poz1 = "h8";
  poz2 = "a1";
  console.assert(utesEllenorzes(poz1, poz2) == true, "átló nem működik jól");

  poz1 = "a1";
  poz2 = "h8";
  console.assert(
    utesEllenorzes(poz1, poz2) == true,
    "átló nem működik jól más sorrenddel",
  );

  poz1 = "e3";
  poz2 = "e3";
  console.assert(
    utesEllenorzes(poz1, poz2) == true,
    "Ugyanazzal a számmal nem működik jól",
  );

  poz1 = "e3";
  poz2 = "b1";
  console.assert(
    utesEllenorzes(poz1, poz2) != true,
    "Nem kellene hogy üsse egymást, ezért nem működik jól",
  );

  poz1 = "e3";
  poz2 = "e8";
  console.assert(utesEllenorzes(poz1, poz2) == true, "oszlop nem működik jól");

  poz1 = "a3";
  poz2 = "d3";
  console.assert(utesEllenorzes(poz1, poz2) == true, "sor nem működik jól");

  poz1 = "x123";
  console.assert(
    utesEllenorzes(poz1, poz2) == undefined,
    "rossz inputot nem kezeli jól",
  );

  console.log("Minden teszt  lefutott");
}

tesztek();
