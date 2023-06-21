// LocalStorage

// 1. Zapisywanie i odczytywanie wartości z LocalStorage

// · Napisz program, który pozwoli użytkownikowi wprowadzić swoje imię i zapisze je w LocalStorage. Osobnym przyciskiem użytkownik może odczytać zapisane imię z LocalStorage i wyświetlić je na ekranie.

// · Aby korzystać z LocalStorage, można użyć metod localStorage.setItem(key, value) do zapisywania wartości oraz localStorage.getItem(key) do odczytywania wartości.

const firstName = () => {
	let imie = document.getElementById("1").value;
	localStorage.setItem("firstName", imie);
};
const displayName = () => {
	document.getElementById("name").innerHTML = `${localStorage.getItem(
		"firstName"
	)}`;
};

// 2. Rzut kostką i LocalStorage

// · Napisz program, który pozwala na wykonanie rzutu kostką sześciościenną i wyświetla wynik na ekranie. Ostatnio wyrzucona wartość powinna być zapamiętywana również po zamknięciu i ponownym otwarciu strony.

// · Zmodyfikuj program, aby zapamiętywał ostatnie 10 rzutów.

// · LocalStorage przechowuje dane w postaci tekstowej, więc jeśli potrzebujemy przechowywać obiekty JavaScript (np. tablicę wylosowanych wartości), musimy je najpierw przekonwertować na tekst (np. za pomocą JSON.stringify()) i przy odczycie przekonwertować z powrotem na obiekt (np. za pomocą JSON.parse()).

let arrDisce = [];
let i = 1;
disceDisplay = "";
const dice = () => {
	number = Math.floor(Math.random() * 6 + 1);
	if (arrDisce.length >= 10) {
		arrDisce.splice(0, 1);
	}
	arrDisce.push(` Rzut${i}- ${number}`);
	i++;
	document.getElementById("2").innerHTML = `${arrDisce}`;
	localStorage.setItem("throwDisce", JSON.stringify(arrDisce));
	console.log(arrDisce);
};
document.getElementById("2").innerHTML = `${JSON.parse(
	localStorage.getItem("throwDisce")
)}`;

// 3. Zapamiętywanie preferencji użytkownika

// · Napisz program, który pozwala użytkownikowi zdefiniować swoje preferencje, takie jak kolor tła strony, kolor tekstu i rozmiar czcionki. Program powinien zapisać te preferencje w LocalStorage, aby móc je przywrócić przy kolejnym odwiedzeniu strony.
arrBackgroundColor = ["red", "blue", "green", "yellow"];
arrColor = ["red", "blue", "green", "yellow"];
arrFont = [10, 20, 30, 40];
let bC = 0;
let c = 0;
let f = 0;

document
	.getElementById("bacgroundColor")
	.addEventListener("click", function () {
		if (bC == arrBackgroundColor.length) bC = 0;
		if (bC < arrBackgroundColor.length) {
			document.body.style.backgroundColor = `${arrBackgroundColor[bC]}`;
			localStorage.setItem("bColor", `${arrBackgroundColor[bC]}`);
			bC++;
		}
	});
document.getElementById("textColor").addEventListener("click", function () {
	if (c == arrColor.length) c = 0;
	if (c < arrColor.length) {
		document.body.style.color = `${arrColor[c]}`;
		localStorage.setItem("color", `${arrColor[c]}`);
		c++;
	}
});

document.getElementById("fontSize").addEventListener("click", function () {
	if (f == arrFont.length) f = 0;
	if (f < arrFont.length) {
		document.body.style.fontSize = `${arrFont[f]}px`;
		localStorage.setItem("font", `${arrFont[f]}`);
		f++;
	}
});

document.body.style.backgroundColor = localStorage.getItem("bColor");
document.body.style.color = localStorage.getItem("color");
document.body.style.fontSize = localStorage.getItem("font") + "px";

// 4. Koszyk zakupowy w LocalStorage (***)

// · Napisz program, który symuluje koszyk zakupowy. Użytkownik może dodawać produkty do koszyka, a program będzie przechowywać te informacje w LocalStorage. Program powinien umożliwiać dodawanie, usuwanie i wyświetlanie produktów w koszyku.

// Timery

// 5. SetTimeout

// · Przetestuj dziełanie funkcji setTimeout pisząc program, który po naciśnięciu przycisku czeka dwie sekundy i wyświetla komunikat na ekranie.
const setTimeFunction = () => {
	setTimeout(function () {
		let text = document.getElementById("time").value;
		document.getElementById("5").innerHTML = `${text}`;
	}, 2000);
};

// 6. SetInterval

// · Przetestuj działanie funkcji setInterval pisząc program, który wyświetla zegar. Aktualny czas możesz sprawdzić przy pomocy obiektu Date. Funkcja setInterval pozwoli odświeżać wartość zegara co sekundę.

const myTime = () => {
	const time = new Date();
	document.getElementById("6").innerHTML = `${time.toLocaleTimeString()}`;
};

setInterval(myTime, 1000);

// 7. Stoper

// · Napisz program, który wykorzystuje funkcję setInterval, aby wyświetlać na ekranie działający stoper, odmierzający czas z dokładnością do dziesiątych sekundy. Jeden przycisk pozwala na uruchomienie stopera (odliczanie wartości rozpoczyna się od 0), a na jego zatrzymanie (przy pomocy funkcji clearInterval)

// · Dodaj trzeci przycisk, który pozwoli na notowanie „międzyczasów” – zapamiętuje i wypisuje na ekranie aktualną wartość stopera, ale bez jego zatrzymywania.

let time7;
let ms = 0;
let second = 0;
let min = 0;
let dane7 = JSON.parse(localStorage.getItem("stoper"));
let element = document.getElementById("7");
let ul = document.getElementById("ul");
console.log(dane7);

if (dane7 == null) saveTime = [];
else saveTime = dane7;

const start = () => {
	time7 = setInterval(function () {
		ms++;
		if (ms == 100) {
			second++;
			ms = 0;
		}
		if (second == 60) {
			min++;
			second = 0;
			ms = 0;
		}
		element.innerHTML = `${min} min : ${second} sec : ${ms} ms`;
	}, 10);
};

const stop = () => {
	clearInterval(time7);
};
const save = () => {
	let saveTimeObject = {
		minuty: `${min}`,
		sekundy: `${second}`,
		milisec: `${ms}`,
	};

	saveTime.push(saveTimeObject);
	let li = document.createElement("LI");
	ul.appendChild(
		li
	).innerHTML = `${saveTimeObject.minuty} min : ${saveTimeObject.sekundy} sec : ${saveTimeObject.milisec} ms`;
	localStorage.setItem("stoper", JSON.stringify(saveTime));
};
let arrTim = JSON.parse(localStorage.getItem("stoper"));
if (localStorage.length > 0) {
	arrTim.forEach(element => {
		let li = document.createElement("LI");
		ul.appendChild(
			li
		).innerHTML = `${element.minuty} min : ${element.sekundy} sec : ${element.milisec} ms`;
	});
}
// localStorage.clear();

// 8. Minutnik

// · Napisz program, który pozwoli na realizację prostego minutnika. Użytkownik wybiera liczbę minut i sekund do odmierzenia, po czym uruchamia przyciskiem minutnik. Czas jest odliczany „w dół” i na bieżąco wyświetlany na ekranie. Po dobięgnięciu licznika do 0, wyświetlany jest komunikat a ekran zmienia kolor.

const timer = () => {
	let min = document.getElementById("min").value;
	let sec = document.getElementById("sec").value;
	let timeOut = true;
	console.log(min);
	console.log(sec);

	const countDown = () => {
		if (min >= 0) {
			if (sec >= 0) {
				sec--;
				if (min == 0 && sec < 0) {
					min = 0;
					sec = 0;
					document.body.style.backgroundColor = "red";
				}
				if (sec < 0) {
					min--;
					sec = 59;
				}
			}
			document.getElementById("time8").innerHTML = `${min} min ${sec} sec`;
		}
	};
	setInterval(countDown, 1000);
};

// 9. Animacja przesuwającego się elementu

// · Stwórz prostą animację, w której element na stronie przesuwa się w prawo z określoną prędkością. Wykorzystaj funkcję setInterval do cyklicznego aktualizowania pozycji elementu na stronie. Jeśli nadasz elementowi wartość stylu „position: aboslute”, możesz ustwić jego pozycję przy pomocy właściwości stylu „left”.
let box = document.getElementById("9");
let a = 20;
box.style.border = "thick solid #0000FF";
box.style.position = "absolute";
box.style.height = "20px";
box.style.left = `${a}px`;
const moveElement = () => {
	a += 5;
	box.style.left = `${a}px`;
	if (a >= 1500) a = 10;
};
setInterval(moveElement, 10);

// 10. Powiadomienia na żywo (***)

// · Napisz program, który symuluje powiadomienia na żywo. Co losową liczbę sekund na ekranie pojawia się nowe powiadomienie, które przez pewien czas pozostaje wyświetlone, a następnie zniknie. Wykorzystaj funkcji setTimeout lub/i setInterval do generowania nowych powiadomień i zarządzania ich widocznością na ekranie.

let arr10 = [
	"komunikat nr.1",
	"komunikat nr.2",
	"komunikat nr.3",
	"komunikat nr.4",
];
let index = 0;

const showNotification = () => {
	if (index < arr10.length)
		document.getElementById("10").innerHTML = `${arr10[index]}`;
	index++;
	if (index == arr10.length) index = 0;
};

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateNotification = () => {
	const delay = getRandomInt(1000, 5000);
	console.log(delay);
	setTimeout(function () {
		showNotification();
		generateNotification();
	}, delay);
};

generateNotification();
