// Ćwiczenie 1.
//Stwórz tablicę wypełnioną losowymi liczbami z zakresu 1-20, a następnie przy pomocy funkcji filter wybierz z niej wszystkie liczby z zakresu od 5 do 15 i wypisz je do konsoli.

let arr1 = [];
for (i = 0; i < 10; i++) {
	arr1.push(Number(Math.floor(Math.random() * 20) + 1));
}
console.log(arr1);
console.log(arr1.filter(val => val > 5 && val < 15));

//Ćwiczenie 2
// Zadeklaruj tablicę wypełnioną danymi studentów na wzór:
// [ { imię: "Piotr", nazwisko: "Nowak", punkty: 43 },
//   { imię: "Tomasz", nazwisko: "Kowalski", punkty: 68 },
//   { imię: "Julia", nazwisko: "Bagińska", punkty: 75 }, ... ]
// Następnie przy pomocy funkcji filter wybierz z niej osoby, których liczba punktów przekracza 50.

const arr2 = [
	{ imię: "Piotr", nazwisko: "Nowak", punkty: 100 },
	{ imię: "Tomasz", nazwisko: "Kowalski", punkty: 68 },
	{ imię: "Julia", nazwisko: "Bagińska", punkty: 75 },
];

console.log(arr2.filter(val => val.punkty > 50));

// Ćwiczenie 3
// Z listy studentów uzyskanej z poprzedniego zadania usuń przy pomocy funkcji filter te osoby, których nazwisko zaczyna się na literę K.

console.log(arr2.filter(surname => surname.nazwisko.charAt(0) !== "K"));

// Ćwiczenie 4
// Wygeneruj tablicę liczb rzeczywistych. Następnie przy pomocy funkcji map zamień ją na tablicę wartości sformatowanych jako kwota w zł.
// (np. wartość 2.5 zmieni się w "2.50 zł").

let arr4 = [];
for (i = 0; i < 5; i++) {
	arr4.push((Math.random() * 10 + 1).toFixed(2));
}
console.log(arr4);

console.log(arr4.map(price => `${price}zł`));

// Ćwiczenie 5
// Z listy studentów z ćwiczenia 3 korzystając z funkcji map wyświetl na ekranie same nazwiska.

console.log(arr2.map(user => user.nazwisko));

// Ćwiczenie 6
// Zdefiniuj tablicę produktów na wzór poniższej:
// [ { nazwa: "jajka", ilość: 6, cena: 1.2 },
//   { nazwa: "mleko", ilość: 2, cena: 8.8 },
//   { nazwa: "chleb", ilość: 1, cena: 7.5 }, ... ]
// Następnie, korzystając z funkcji map, stwórz listę typu <ul> zawierającą nazwy towarów oraz ich ceny.
// (np. "<ul><li>jajka (1.20 zł)</li><li>mleko (8.80 zł)</li>...</ul>").

const arr6 = [
	{ nazwa: "jajka", ilość: 6, cena: 1.2 },
	{ nazwa: "mleko", ilość: 2, cena: 8.8 },
	{ nazwa: "chleb", ilość: 1, cena: 7.5 },
];
let ul = document.getElementById("out");
arr6.map(element => {
	let li = document.createElement("LI");
	ul.appendChild(li).innerHTML = `${element.nazwa} (${element.cena}zł)`;
});

// Ćwiczenie 7
// Sprawdź czy choć jedna osoba z Ćwiczenia 2 zdobyła przynajmniej 90 punktów. Użyj metody some.

console.log(arr2.some(points => points.punkty > 90));

// Ćwiczenie 8
// Sprawdź czy wszystkie osoby z Ćwiczenia 2 zdobyły ponad 33 punkty. Użyj metody every.

console.log(arr2.every(points => points.punkty >= 30));

// Ćwiczenie 9
// Na liście produktów z Ćwiczenia 6 znajdź pierwszy produkt o cenie powyżej 5 zł. Użyj metody find.

console.log(arr6.find(price => price.cena > 5));

// Ćwiczenie 10
// Stwórz tablicę losowych wartości. Użyj funkcji reduce, aby obliczyć ich średnią (reduce liczy sumę, a później dzielimy ją przez liczbę elementów).

const arr10 = [6, 10, 1, 2, 7];
console.log(arr10.reduce((a, b) => a + b) / arr10.length);

// Ćwiczenie 11
// Na losowej tablicy z Ćwiczenia 10 użyj reduce, aby znaleźć wartość elementu maksymalnego.
// Podpowiedź: funkcja przekazana do reduce powinna zwracać większą wartość ze swych dwóch parametrów.

const max = (a, b) => {
	if (a > b) return a;
	return b;
};

console.log(arr10.reduce(max));

// Ćwiczenie 12
// Na podstawie listy produktów z Ćwiczenia 6 korzystając z metody reduce oblicz łączną wartość zakupów (pamiętaj o przemnożeniu ilości przez cenę).
// Podpowiedź: należy przekazać 0 jako drugi parametr reduce (patrz kolejna strona). Funkcja przekazana do reduce przyjmuje dwa parametry: pierwszy to aktualna wartość sumy, a drugi – kolejny obiekt produktu do zsumowania.

console.log(arr6.reduce((sum, price) => sum + price.cena * price.ilość, 0));

// Ćwiczenie 13
// Na liście studentów z Ćwiczenia 2 znajdź przy pomocy metody reduce osobę, która zdobyła najwięcej punktów.

const maxPoint = (a, b) => {
	if (a.punkty > b.punkty) return a;
	else return b;
};
console.log(arr2.reduce(maxPoint));

