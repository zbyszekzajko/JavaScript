// 1. Napisz klasę Produkt. Każdy Produkt ma nazwę oraz cenę.
// - Napisz metodę toString, która zwraca sformatowaną cenę, np. "2.50 zł".

class Produkt {
	constructor(i, j) {
		this.nazwa = i;
		this.cena = j;
	}
	toString() {
		return this.nazwa + " " + "cena: " + this.cena + "zł";
	}
}
let p1 = new Produkt("mleko", 4.5);
console.log("nazwa: " + p1);

// 2. Napisz klasę Skarbonka. Skarbonka powinna pozwalać na:
// · wrzucenie pewnej kwoty
// · wyjęcie (i zwrócenie) całej sumy
// · (*) Skarbonka powinna akceptować jedynie istniejące nominały (a zatem nie możemy wrzucić 8 zł, ale możemy po kolei wrzucać 5 zł, 2 zł, 1 zł)
// · (***) przechowuj informację o wszystkich wrzuconych monetach (jako listę lub słownik). Dodaj metodę pozwalającą na podejrzenie zawartości oraz metodę wyjmującą losową monetę.
let suma = 0;
class Skarbonka {
	suma = 0;
	dodaj(kwota) {
		this.suma += kwota;
		document.getElementById("p2").innerHTML = this.suma;
	}
	wyjmij() {
		document.getElementById("p2").innerHTML = this.suma;
		this.suma = 0;
	}
}
let k = new Skarbonka();
let moneta = document.getElementById("2");

document.getElementById("button2").addEventListener("click", function () {
	let skarb = Number(moneta.value);
	k.dodaj(skarb);
});
document.getElementById("wyjmij").addEventListener("click", function () {
	k.wyjmij();
});

// 3. Napisz klasę Pudełko. Pudełko powinno oferować metody:
// · otwórz
// · zamknij
// · włóż
// · wyjmij
// · Do pudełka możemy włożyć np. string. Pudełko nie powinno pozwalać np. na otwarcie już otwartego pudełka albo włożenie czegoś do zamkniętego lub już pełnego pudełka. O niepowodzeniu akcji możesz informować wypisując komunikat lub rzucając wyjątek.

class Pudełko {
	open = false;
	close = false;
	pelne = false;

	otworz() {
		if (this.open) {
			throw new Error("element jest już otwarty");
		} else if (this.close) {
			throw new Error("element został zamkniety");
		} else {
			this.open = true;
			console.log(this.open);
		}
	}
	zamknij() {
		if (!this.open) {
			throw new Error("Pudełko nie zostało otwarte");
		} else {
			this.close = true;
			this.open = false;
		}
	}
	wloz() {
		console.log(this.open);
		if (this.open && !this.close && !this.pelne) {
			this.pelne = true;
		} else if (!this.open) {
			throw new Error("Pudełko nie zostało otwarte");
		} else if (this.close) {
			throw new Error("Pudełko zostało zamkniete");
		} else if (this.pelne) {
			throw new Error("Pudłko jest pełne");
		}
	}
	wyjmij() {
		if (this.pelne) {
			this.pelne = false;
		} else throw new Error("Pudełko jest puste");
	}
}

let f1 = new Pudełko();
document.getElementById("open").addEventListener("click", function () {
	f1.otworz();
});
document.getElementById("close").addEventListener("click", function () {
	f1.zamknij();
});
document.getElementById("remove").addEventListener("click", function () {
	f1.wyjmij();
	document.getElementById("3").innerHTML = "";
});
document.getElementById("add").addEventListener("click", function () {
	f1.wloz("kostka");
	document.getElementById("3").innerHTML = "kostka";
});

// 4. Napisz klasę Punkt (z właściwościami x i y). Następnie stwórz klasę Okrąg (z właściwościami środek i promień). Okrąg powinien oferować metodę czyPunktNależy, która sprawdza czy podany punkt znajduje się wewnątrz okręgu (na podstawie odległości od środka i promienia

class Punkt {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Okrąg {
	constructor(punkt) {
		this.punkt = punkt;
	}
	czyPunktNależy(srodekX, srodekY, promien) {
		this.srodekX = srodekX;
		this.srodekY = srodekY;
		this.promien = promien;
		let d =
			Math.pow(this.srodekX - this.punkt.x, 2) +
			Math.pow(this.srodekY - this.punkt.y, 2);
		if (d < Math.pow(this.promien, 2))
			console.log("punkt lezy wewnatrz okregu");
		else console.log("punkt nie lezy wewnatrz okregu");
	}
}

let p4 = new Punkt(10, 10);
let okrag = new Okrąg(p4);
okrag.czyPunktNależy(0, 0, 5);

// 5. Napisz klasę Sklep. Sklep ma nazwę, adres oraz zawiera listę Produktów. Sklep powinien oferować metody pozwalające na:
// · dodanie Produktu
// · usunięcie Produktu na podstawie nazwy
// · wyświetlenie wszystkich Produktów

class Produkty {
	constructor(nazwa) {
		this.nazwa = nazwa;
	}
}

class Sklep {
	constructor(nazwaSklepu) {
		this.nazwaSklepu = nazwaSklepu;
		this.produkty = [];
		this.i = 0;
	}
	dodaj(pr) {
		this.produkty.push(pr);
	}
	usun(usunPR) {
		this.usunPR = usunPR;
		sklep.produkty.forEach(element => {
			if (element.nazwa == this.usunPR) {
				sklep.produkty.splice(this.i, 1);
			}
			this.i++;
		});
	}
	wyswietl() {
		console.table(sklep.produkty);
		for (let v of sklep.produkty) {
			console.log(v.nazwa);
		}
	}
}

let sklep = new Sklep("Lewiatan");
sklep.dodaj(new Produkty("kawa"));
sklep.dodaj(new Produkty("ziemniaki"));
sklep.dodaj(new Produkty("woda"));
sklep.wyswietl();
sklep.usun("ziemniaki");
sklep.wyswietl();
