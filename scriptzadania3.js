// 1. Napisz funkcję, która przyjmuje dwa parametry: tablicę oraz wartość
// logiczną (true/false). Funkcja powinna zwracać sumę parzystych
// bądź nieparzystych wartości z tablicy (parzystych, jeśli drugi
// parametr miał wartość true, zaś nieparzystych w przeciwnym
// przypadku).
// * Jeśli pierwszym parametrem nie jest tablica, zwróć undefined.
// Możesz to sprawdzić przy pomocy Array.isArray()
// * Nie należy liczyć sumy, jeśli drugi parametr nie ma wartości
// ani true, ani false (używaj porównania === lub sprawdź typ
// wartości przy pomocy typeof)
// * Napisaną funkcję przetestuj na trzy sposoby: na tablicy
// wartości wpisanych ręcznie (w kodzie), na tablicy wypełnionej
// losowymi wartościami oraz na tablicy podanej przez
// użytkownika (jako wartości oddzielane przecinkami).
// (Math.floor(Math.random() * 100) + 1)

const randomArray = () => {
	let arr1 = [];
	for (let i = 0; i < 5; i++) {
		arr1.push(Math.floor(Math.random() * 10 + 1));
		arr1.sort((a, b) => {
			return a - b;
		});
	}
	console.log(arr1);
	return arr1;
};

randomArray();

const sum23 = (arr, parzyste) => {
	let suma = 0;
	if (!Array.isArray(arr)) return;
	if (parzyste === true) {
		arr.forEach(element => {
			if (element % 2 == 0) suma += element;
		});
	} else if (parzyste === false) {
		arr.forEach(element => {
			if (element % 2 !== 0) suma += element;
		});
	} else suma = 0;

	return suma;
};
console.log(sum23([1, 2, 3, 4, 5], true));
console.log(sum23([1, 2, 3, 4, 5], false));
console.log(sum23([1, 2, 3, 4, 5]));
console.log(sum23(randomArray(), Math.random() < 0.5));

// 2. Napisz funkcje, która przyjmuje jako parametry dwie liczby całkowite
// a i b, a następnie tworzy i zwraca jako wynik tablicę wypełnioną
// kolejnymi liczbami od a do b.
// * Na przykład, jeśli funkcja zostanie wywołana z argumentami 3 i
// 8, powinna zwrócić tablicę [3, 4, 5, 6, 7, 8].
// * Funkcja powinna również obsługiwać sytuację, gdy wartość a
// jest większa niż wartość b, zwracając wtedy pustą tablicę.

const range = (a, b) => {
	let array = [];
	for (let i = a; i <= b; i++) {
		array.push(i);
	}
	return array;
};

console.log(range(3, 8));
console.log(range(8, 3));

// 3. Przygotuj dokument HTML składający się z pewnej liczby paragrafów
// (elementów <p>). Następnie (już w kodzie JavaScript):
// * Powiększ rozmiar co drugiego paragrafu (użyj ustawienia stylu
// fontSize)
// * Tekst każdego paragrafu pokoloruj na losowy kolor (kolory
// możesz losować ze zdefiniowanej uprzednio puli, np. ‘orange’,
// ‘green’, ‘blue’, ‘yellow’).
// * Do każdego paragrafu dodaj atrybut title (podpowiedź
// pojawiająca się po najechaniu myszą) zawierający informację
// który to paragraf spośród ilu i jaka jest jego długość (w
// znakach). Np. „Nr 2/10, długość: 54”.

const randColor = () => {
	return (
		"#" +
		Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, "0")
			.toUpperCase()
	);
};

let paragraf = document.querySelectorAll("p");
for (let i = 0; i < paragraf.length; i++) {
	paragraf[i].style.color = randColor();
	paragraf[
		i
	].title = `Nr ${i}/${paragraf.length}, długość: ${paragraf[i].innerHTML.length} `;
	if (i % 2 == 0) {
		paragraf[i].style.fontSize = "150%";
	}
}

// 4. Napisz program, który na podstawie tablicy napisów (ścieżek do
// obrazków – mogą to być obrazki znajdujące się w jakimś podfolderze
// projektu) utworzy w dokumencie galerię obrazków (elementów
// <img>).
// * Pod każdym obrazkiem powinna znajdować się jego nazwa
// (bez ścieżki i rozszerzenia – możesz ją wydobyć wycinając
// tekst między ostatnim znakiem '.' a ostatnim znakiem '/').

const photoArray = [
	"./Photos/photo1.jfif",
	"./Photos/photo2.jfif",
	"./Photos/photo3.jfif",
	"./Photos/photo4.jfif",
	"./Photos/photo5.jfif",
];

const photoDisplay = () => {
	let ul = document.getElementById("4");
	ul.innerHTML = "";
	photoArray.forEach(element => {
		let img = document.createElement("img");
		let p = document.createElement("p");
		img.setAttribute("src", element);
		ul.appendChild(img);
		ul.appendChild(p).innerHTML = `${element.split("/").pop().split(".")[0]}`;
	});
};

photoDisplay();

// 5. Interfejs aplikacji powinien składać się z pola tekstowego oraz
// przycisków „dodaj”, „usuń” i „resetuj”. Użytkownik wprowadza w
// polu tekstowym imię, następnie naciskając „dodaj” może je dodać
// do listy imion (o ile już się na niej nie znajduje) lub naciskając „usuń”
// – usunąć (o ile jest na liście). Naciśnięcie reset czyści listę.
// *  Imiona przechowuj w tablicy (w zmiennej globalnej), a na tej
// podstawie aktualizuj widok (dokument HTML). Zamiast
// dodawać lub usuwać elementy HTML po każdej aktualizacji
// tablicy, prostsze może być odtworzenie widoku od zera.

let arrName = [];

const addName = () => {
	let nameNotExists = true;
	let name5 = document.getElementById("5").value;
	arrName.forEach(element => {
		if (element == name5) nameNotExists = false;
	});
	if (nameNotExists) {
		arrName.push(name5);
	}
	display();
};

const deleteName = () => {
	let name5 = document.getElementById("5").value;
	for (let i = 0; i < arrName.length; i++)
		if (arrName[i] == name5) arrName.splice(i, 1);
	console.log(arrName);
	display();
};

const reset = () => {
	arrName = [];
	display();
};

document.getElementById("dodaj").addEventListener("click", addName);
document.getElementById("usuń").addEventListener("click", deleteName);
document.getElementById("resetuj").addEventListener("click", reset);

const display = () => {
	let ul = document.getElementById("out");
	ul.innerHTML = "";
	for (let i = 0; i < arrName.length; ++i) {
		let li = document.createElement("LI");
		ul.appendChild(li).innerHTML = `${arrName[i]}`;
	}
};
