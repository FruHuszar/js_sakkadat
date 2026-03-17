import { megjelenit, rendezesEsemenyek } from "./fuggvenyek.js";
import { SAKKADAT } from "./sakkadat.js";

let TABLAZAT = document.getElementById("tbody");

megjelenit(SAKKADAT, TABLAZAT);
rendezesEsemenyek(SAKKADAT, TABLAZAT);

/*
4. A táblázat alatt a két beviteli mezőbe két sakktábla pozíciót adunk meg. Írj függvényt, ami bemeneti paraméterként megkapja a két pozíciót, ami két ellentétes színű vezér pozícióját jelenti. A kimenetében pedig megmondja, hogy a két vezér üti-e egymást. 
*/
