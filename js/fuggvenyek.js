function egyMegjelenit(adat = { nev, nemzetiseg, gyozelmek_szama }, TABLAZAT) {
  let kod = `
    <tr>
        <td>${adat.nev}</td>
        <td>${adat.nemzetiseg}</td>
        <td>${adat.gyozelmek_szama}</td>
    </tr>
    `;
  TABLAZAT.innerHTML += kod;
}

export function megjelenit(SAKKADAT, TABLAZAT) {
  SAKKADAT.forEach(function (adat, index) {
    egyMegjelenit(adat, TABLAZAT);
  });
}

export function rendezesEsemenyek(SAKKADAT, TABLAZAT) {
  const NEV = document.getElementById("nev");
  const NEMZETISEG = document.getElementById("nemzetiseg");
  const GYOZELMEK_SZAMA = document.getElementById("gyozelmek_szama");

  NEV.addEventListener("click", function () {
    TABLAZAT.innerHTML = "";
    let novekvo = NEV.innerHTML.includes("↓");
    SAKKADAT.sort(function (a, b) {
      if (novekvo) {
        return a.nev < b.nev ? -1 : 1;
      } else {
        return a.nev < b.nev ? 1 : -1;
      }
    });
    NEV.innerHTML = "Név";
    if (novekvo) {
      NEV.innerHTML += " ↑";
    } else {
      NEV.innerHTML += " ↓";
    }
    megjelenit(SAKKADAT, TABLAZAT);
  });

  NEMZETISEG.addEventListener("click", function () {
    TABLAZAT.innerHTML = "";
    let novekvo = NEMZETISEG.innerHTML.includes("↓");
    SAKKADAT.sort(function (a, b) {
      if (novekvo) {
        return a.nemzetiseg < b.nemzetiseg ? -1 : 1;
      } else {
        return a.nemzetiseg < b.nemzetiseg ? 1 : -1;
      }
    });
    NEMZETISEG.innerHTML = "Nemzetiség";
    if (novekvo) {
      NEMZETISEG.innerHTML += " ↑";
    } else {
      NEMZETISEG.innerHTML += " ↓";
    }
    megjelenit(SAKKADAT, TABLAZAT);
  });

  GYOZELMEK_SZAMA.addEventListener("click", function () {
    TABLAZAT.innerHTML = "";
    let novekvo = GYOZELMEK_SZAMA.innerHTML.includes("↓");
    SAKKADAT.sort(function (a, b) {
      return novekvo
        ? a.gyozelmek_szama - b.gyozelmek_szama
        : b.gyozelmek_szama - a.gyozelmek_szama;
    });
    GYOZELMEK_SZAMA.innerHTML = "Győzelmek száma";
    if (novekvo) {
      GYOZELMEK_SZAMA.innerHTML += " ↑";
    } else {
      GYOZELMEK_SZAMA.innerHTML += " ↓";
    }
    megjelenit(SAKKADAT, TABLAZAT);
  });
}
