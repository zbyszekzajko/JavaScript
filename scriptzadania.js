// 1. Napisz program, który prosi użytkownika o wprowadzenie dwóch liczb, a następnie
// oblicza i wyświetla wynik dodawania, odejmowania, mnożenia i dzielenia tych liczb.

function calculator() {
	let a = Number(document.getElementById("in1").value);
	let b = Number(document.getElementById("in2").value);
	let sum = a + b;
	let min = a - b;
	let multi = a * b;
	let div = a / b;
	document.getElementById(
		"out1"
	).innerHTML = `Suma liczb ${a} i ${b} wynosi ${sum}`;
	document.getElementById(
		"ou2"
	).innerHTML = `Odejmowanie liczb ${a} i ${b} wynosi ${min}`;
	document.getElementById(
		"out3"
	).innerHTML = `Mnozenie liczb ${a} i ${b} wynosi ${multi}`;
	document.getElementById(
		"out4"
	).innerHTML = `Dzielenie ${a} i ${b} wynosi ${div}`;
}

// 2. Napisz program, który prosi użytkownika o podanie imienia i nazwiska, a następnie
//  wyświetla na ekranie powitanie w formacie "Witaj, {imie} {nazwisko}!".

const nameSurname = () => {
	let name = document.getElementById("name").value;
	let surname = document.getElementById("surname").value;

	alert(`Witaj ${name} ${surname}!`);
};

// 3. Napisz program, który prosi użytkownika o wprowadzenie liczby i wyświetla na
// ekranie komunikat informujący, czy liczba jest parzysta czy nieparzysta.

const evenNumber = () => {
	let number3 = parseFloat(document.getElementById("number3").value);
	if (number3 % 2 == 0)
		document.getElementById("evenNum").innerHTML = `Liczba jest parzysta`;
	else
		document.getElementById("evenNum").innerHTML = `Liczba jest nie parzysta`;
};
// 4. Napisz program, który pobiera od użytkownika ciąg znaków i wyświetla go w
// odwróconej kolejności. Na przykład, dla wejścia "JavaScript" program powinien
// wyświetlić "tpircSavaJ".

const reverse = () => {
	let word = document.getElementById("word").value;
	document.getElementById("4").innerHTML = `${word
		.split("")
		.reverse()
		.join("")}`;
};

// 5. Napisz program, który pobiera od użytkownika ciąg znaków i zamienia w nim
// wszystkie wystąpienia podanego znaku na inny podany znak. Na przykład, dla wejścia
// "JavaScript jest fajny" i zamiany litery "a" na literę "o", program powinien wyświetlić
// "JovoScript jest fojny".

const rep5 = () => {
	let word1 = document.getElementById("word1").value;
	let newWord1 = word1.replaceAll("a", "b");
	document.getElementById("5").innerHTML = `Zamieniona litera ${newWord1}`;
};

// 6. Napisz program, który wylosuje trzy liczby całkowite z zakresu od 1 do 100 i wyświetli
// je na ekranie. Następnie program powinien znaleźć i wyświetlić największą z tych
// liczb.

const random6 = () => {
	const num6 = [];
	for (let i = 1; i <= 3; i++) {
		let num = Math.floor(Math.random() * 100) + 1;
		num6.push(num);
	}
	document.getElementById("6").innerHTML = `Wylosowane liczby to ${num6.join(
		" "
	)} najwiekszą liczbą jest ${Math.max(...num6)}`;
};

// 7. Napisz program, który oblicza pole trójkąta na podstawie długości boku a i wysokości
// h. Program powinien prosić użytkownika o wprowadzenie wartości a i h, a następnie
// wyświetlać obliczone pole na ekranie.

const triangle = () => {
	const aTringle = parseFloat(document.getElementById("aTriangle").value);
	const htriangle = parseFloat(document.getElementById("hTriangle").value);
	const triangleArea = (1 / 2) * aTringle * htriangle;
	document.getElementById(
		"triangleArea"
	).innerHTML = `Pole trójkąta wynosi ${triangleArea}`;
};

// 8. Napisz program, który oblicza wartość pierwiastka kwadratowego z liczby x. Program
// powinien prosić użytkownika o wprowadzenie wartości x, a następnie wyświetlać
// obliczony pierwiastek na ekranie.

const squere = () => {
	let x = document.getElementById("squereX").value;
	document.getElementById(
		"squere"
	).innerHTML = `Pierwiastek kwadratowy z ${x} wynosi ${Math.sqrt(x).toFixed(
		2
	)}`;
};

// 9. Napisz program, który pobiera od użytkownika ciąg znaków i sprawdza czy jest on
// palindromem. Wersja prostsza: zakładamy, że użytkownik podał jedno słowo (np.
// "kajak"). Wersja bardziej zawansowana: powinniśmy ignorować spacje i wielkość
// znaków, np. "Zakopane na pokaz". Do realizacji tych zadań można skorzystać z funkcji
// takich jak: split(), reverse(), join(), toLowerCase(), replace() oraz trim().

const palindrom = () => {
	let word = document.getElementById("palindromWord").value;
	let wordNew = word.toLowerCase().trim().replaceAll(" ", "");
	wordNew == wordNew.split("").reverse().join("")
		? (document.getElementById(
				"palWord"
		  ).innerHTML = `Słowo "${word}" jest palindromem`)
		: (document.getElementById(
				"palWord"
		  ).innerHTML = `Słowo "${word}" nie jest palindromem`);
};

// 10. Napisz program, który prosi użytkownika o podanie adresu email, a następnie
// sprawdza, czy podany ciąg zawiera znak @ i co najmniej jedną kropkę po znaku @.
// Jeśli tak, program powinien wyświetlić komunikat "Podany ciąg jest poprawnym
// adresem email". W przeciwnym przypadku program powinien wyświetlić komunikat
// "Podany ciąg nie jest poprawnym adresem email".

const mail = () => {
	let email = document.querySelector("#mail").value;
	email.indexOf("@") < email.lastIndexOf(".")
		? (document.getElementById("10").innerHTML = `Podany ciąg jest poprawnym
	adresem email`)
		: (document.getElementById(
				"10"
		  ).innerHTML = `Podany ciąg nie jest poprawnym adresem email`);
};

// 11. Napisz program, który prosi użytkownika o podanie ciągu znaków, a następnie
// sprawdza, czy podany ciąg składa się wyłącznie z liter alfabetu. Jeśli tak, program
// powinien wyświetlić komunikat "Podany ciąg składa się wyłącznie z liter alfabetu". W
// przeciwnym przypadku program powinien wyświetlić komunikat "Podany ciąg zawiera
// znaki spoza alfabetu".

function char11() {
	let newCharacter;
	noLetter = true;
	let character = document.querySelector("#character").value;
	newCharacter = character.trim().replaceAll(" ", "").split("");

	for (let i = 0; i < newCharacter.length; i++) {
		if (!newCharacter[i].match(/[a-z]/gi)) {
			noLetter = false;
		}
	}
	noLetter
		? (document.getElementById(
				"11"
		  ).innerHTML = `Podany ciąg składa się wyłącznie z liter alfabetu`)
		: (document.getElementById(
				"11"
		  ).innerHTML = `Podany ciąg zawiera znaki z poza alfabetu`);
}

// 12. Napisz program, który pobiera od użytkownika dwa ciągi znaków i sprawdza, czy są
// one swoimi anagramami. Dwa ciągi znaków są anagramami, jeśli składają się z tych
// samych liter, ale w innej kolejności. Na przykład, "listen" i "silent" to anagramy. Jeśli
// dwa ciągi są anagramami, program powinien wyświetlić komunikat "Podane ciągi są
// anagramami". W przeciwnym razie program powinien wyświetlić komunikat "Podane
// ciągi nie są anagramami".

// 13. Napisz program, który zamienia wprowadzony przez użytkownika ciąg znaków na tzw.
// "camel case". "Camel case" to styl pisania nazw, w którym każde słowo zaczyna się
// wielką literą, z wyjątkiem pierwszego słowa, które zapisujemy małymi literami. Na
// przykład, ciąg znaków "ala ma kota" powinien być zamieniony na "alaMaKota".
// Program powinien umożliwić użytkownikowi wprowadzenie dowolnego ciągu znaków
// i wyświetlenie wyniku na ekranie.

const camelCase = () => {
	let camel = document.querySelector("#camel").value;
	let tab = camel.trim().split(" ");
	let tab1 = [tab[0].toLowerCase()];

	tab.slice(1).forEach(element => {
		console.log(element);
		if (!element == " ")
			tab1.push(element[0].toUpperCase() + element.substring(1).toLowerCase());
	});

	document.getElementById("13").innerHTML = `${tab1.join("")}`;
};

// 14. Napisz program, który generuje losową liczbę całkowitą z zakresu od 1 do 10 i prosi
// użytkownika o odgadnięcie tej liczby. Program powinien wyświetlić informację, czy
// użytkownik zgadł liczbę czy nie, oraz podpowiedzi, czy podana liczba jest za mała lub
// za duża. Program powinien kontynuować grę, aż użytkownik zgadnie poprawnie
// wylosowaną liczbę.

let runNumber = Math.floor(Math.random() * 10) + 1;
const game = () => {
	let guessNumber = parseInt(document.querySelector("#guessNumber").value);
	console.log(runNumber);
	console.log(guessNumber);
	if (runNumber == guessNumber)
		console.log(`Brawo zgadłeś!!! Wylosowana liczba to ${guessNumber}`);
	else if (runNumber < guessNumber)
		console.log(`Podana liczba jest mniejsza od ${guessNumber} `);
	else console.log(`Podana liczba jest większa od ${guessNumber}`);
};

// 15. Napisz program, który pobiera od użytkownika ciąg znaków (hasło) i sprawdza, czy
// spełnia ono następujące warunki bezpieczeństwa: ma co najmniej 8 znaków, zawiera
// co najmniej jedną dużą literę (A-Z), zawiera co najmniej jedną małą literę (a-z),
// zawiera co najmniej jedną cyfrę (0-9), zawiera co najmniej jeden znak nie będący ani
// literą ani cyfrą (np. !, @, # itp.). Jeśli hasło spełnia powyższe warunki, program
// powinien wyświetlić komunikat "Hasło jest bezpieczne". W przeciwnym razie program
// powinien wyświetlić komunikat "Hasło nie spełnia wymagań bezpieczeństwa".

// 16. Napisz program, który pobiera od użytkownika dwie liczby całkowite i
// wyświetla wszystkie liczby między nimi, włącznie z tymi liczbami. Na
// przykład, jeśli użytkownik wprowadzi liczby 3 i 8, program powinien
// wyświetlić ciąg: 3, 4, 5, 6, 7, 8.
// a. Posłuż się pętlą for

const twoNumber = () => {
	const tab16 = [];
	let number1 = document.getElementById("number1").value;
	let number2 = document.getElementById("number2").value;

	for (let i = number1; i <= number2; i++) {
		tab16.push(i);
	}
	document.getElementById("16").innerHTML = `${tab16.join(" ")}`;
};

// 17. Napisz program, który prosi użytkownika o wprowadzenie listy liczb,
// oddzielonych przecinkami. Program powinien następnie obliczyć
// sumę tych liczb i wyświetlić ją na ekranie.
// a. Skorzystaj z funkcji split()

const task17 = () => {
	sum = 0;
	let number17 = document.getElementById("number17").value;
	tab17 = number17.split(",");
	tab17.forEach(element => {
		sum += Number(element);
	});

	document.getElementById("17").innerHTML = `${sum}`;
};

// 18. Napisz program, który wypełni tablicę losowymi liczbami całkowitymi
// z przedziału od 1 do 100, o rozmiarze podanym przez użytkownika.
// Następnie program powinien znaleźć i wyświetlić największą liczbę w
// tej tablicy.

const randomNumber18 = () => {
	const arr18 = [];
	let n = Number(document.getElementById("number18").value);
	for (let i = 1; i <= n; i++) {
		arr18.push(Math.floor(Math.random() * 100) + 1);
	}
	console.log(arr18);
	document.getElementById("18").innerHTML = `Najwieksza liczba jest ${Math.max(
		...arr18
	)}`;
};

// 19. Napisz program, który losuje liczby z zakresu od 1 do 50, dopóki ich
// suma nie przekroczy 200. Następnie program powinien usunąć
// wszystkie liczby parzyste z wylosowanej tablicy i wyświetlić na
// ekranie tablicę z pozostałymi liczbami.
// a. Podpowiedź: zamiast usuwania, łatwiejsze może być
// przepisanie nieparzystych wartości do nowej tablicy.

const randomNumber19 = () => {
	let sum = 0;
	let arr19 = [];
	let arr19Odd = [];
	let num = 0;
	while (sum <= 200) {
		num = Number(Math.floor(Math.random() * 50) + 1);
		sum += num;
		if (sum <= 200) {
			arr19.push(num);
			if (num % 2 !== 0) arr19Odd.push(num);
		}
	}
	console.log(sum);
	console.log(arr19);
	console.log(arr19Odd);
};

randomNumber19();

// 20. Napisz program, który pobiera od użytkownika listę nazwisk
// oddzielonych przecinkami. Program powinien następnie posortować
// te nazwiska według długości nazwiska (od najkrótszego do
// najdłuższego) i wyświetlić posortowaną listę na ekranie.
// a. Posłuż się funkcją sort(), podając jako parametr własną funkcję
// porównującą

const surnameSort = () => {
	surname20 = document.getElementById("surname20").value;
	let arr20 = surname20.split(",");
	console.log(arr20);
	arr20.sort((a, b) => a.length - b.length);
	console.log(arr20);
	document.getElementById("20").innerHTML = `${arr20.join(", ")}`;
};
// 6. Napisz program, który poprosi użytkownika o wprowadzenie listy
// towarów oddzielonych przecinkami. Następnie program powinien
// utworzyć tablicę obiektów, gdzie każdy obiekt zawiera nazwę towaru
// i losową cenę. Cena powinna być wylosowana z przedziału od 0.01
// do 99.99. Wyświetl zawartość tablicy.
// 7. Zadeklaruj (w kodzie programu) tablicę studentów, gdzie każdy
// student ma imię, nazwisko i liczbę punktów (od 0 do 100). Następnie
// oblicz średnią punktów i wypisz dane studentów którzy zdobyli
