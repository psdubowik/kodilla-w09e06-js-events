# Events in JS - Kodilla FE Bootcamp

This is a solution to an assignment from Kodilla FE Bootcamp (week09e06) regarding events in JS.

Instructions were as follows:

Zadanie: Manipulowanie DOM po kliknięciu

Dodaj do strony listę elementów (<ul>) oraz przycisk. Kliknięcie w niego będzie powodowało dodawanie elementów do listy.
Spraw, aby po kliknięciu buttona do listy został dodany elementy z napisem item oraz kolejnym numerem (tj. 0, 1, 2...)

Spodziewane elementy listy po kliknięciu buttona kilkukrotnie to:

// <ul id="list">
//   <li>item 0</li>
//   <li>item 1</li>
//   <li>item 2</li>
// </ul>
Użyj funkcji addEventListener, aby nadać listener na przycisk.
Zapamiętaj w zmiennej list odniesienie do elementu z id list.
var list = document.getElementById('list')
To samo zrób dla elementu <button> - przypisz go do zmiennej o nazwie add.
Dodaj listener do buttona - ma on reagować na kliknięcie, czyli na rodzaj eventu click.
add.addEventListener('click', function() {});
Wewnątrz funkcji, która została przekazana w listenerze, dodaj kod odpowiadający za dodawanie elementów do listy.
W tym celu wewnątrz funkcji zawartej w listenerze zdeklaruj zmienną element i za pomocą metody createElement() utwórz kolejne pozycje menu:
var element = document.createElement('li');
Teraz zajmiemy się tekstami wewnątrz utworzonych elementów li. Za pomocą element.innerHTML = 'item'; możemy przypisać tekst item, a następnie w odpowiednim miejscu wstawić numer bieżącego elementu.
Możesz w tym celu skorzystać z funkcji getElementsByTagName oraz właściwości length, aby dowiedzieć się, ile elementów ma lista ma w danym momencie.
Ostatnim krokiem będzie dodanie naszego elementu do zmiennej list. Do tego użyjemy funkcji appendChild(). Powinno to wyglądać tak: list.appendChild(element);. Pamiętaj żeby wszystko wykonywało się wewnątrz funkcji wykonywanej po kliku.
Stwórz nowe repozytorium i wyślij tam swoje zadanie. Pamiętaj o udostępnieniu repozytorium swojemu mentorow

## Getting Started

We strongly advise you to use Chrome and the JS Console. 

### Prerequisites

-

### Installing

-

## Running the tests

-

### Break down into end to end tests

-

### And coding style tests

-

## Deployment

-

## Built With
* Java Script

## Contributing
-

## Versioning

-

## Authors

* **PSD** - *exercise* - [URLName](URL)

See also the list of [Contributors](https://github.com/psdubowik/kodilla-w09e06-js-events/graphs/contributors) who participated in this project.

## License

This project is licensed under the ISC License.

## Acknowledgments
-
