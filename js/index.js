import {
  megjelenit,
  rendezesEsemenyek,
  sakkEsemenykezelo,
} from "./fuggvenyek.js?v=2";
import { SAKKADAT } from "./sakkadat.js";
import { tesztek } from "./utes_teszt.js";

let TABLAZAT = document.getElementById("tbody");

megjelenit(SAKKADAT, TABLAZAT);
rendezesEsemenyek(SAKKADAT, TABLAZAT);
sakkEsemenykezelo();
