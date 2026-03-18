import { megjelenit, rendezesEsemenyek, sakkEsemenykezelo, } from "./fuggvenyek.js?v=2";
import { SAKKADAT } from "./sakkadat.js";

let TABLAZAT = document.getElementById("tbody");

megjelenit(SAKKADAT, TABLAZAT);
rendezesEsemenyek(SAKKADAT, TABLAZAT);

/*
4. A táblázat alatt a két beviteli mezőbe
két sakktábla pozíciót adunk meg.
Írj függvényt, ami bemeneti
paraméterként megkapja a két pozíciót,
ami két ellentétes színű vezér
pozícióját jelenti.

A kimenetében pedig megmondja,
hogy a két vezér (királynő)
üti-e egymást. 

koordináta rendszer? 
ha ua a betű ●
ha ua a szám ●
Átló?
a sorok különbsége = oszlopok különbsége?
betűk - char?
*/

sakkEsemenykezelo();