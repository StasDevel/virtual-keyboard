// let arrOfEngLetters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
// console.log(arrOfEngLetters.length)

// let objOfEngLetters2 = {
//     "Backquote": "`",
//     "Digit1": "1",
//     "Digit2": "2",
//     "Digit3": "3",
//     "Digit4": "4",
//     "Digit5": "5",
//     "Digit6": "6",
//     "Digit7": "7",
//     "Digit8": "8",
//     "Digit9": "9",
//     "Digit0": "0",
//     "Minus": "-",
//     "Equal": "=",
//     "Backspace": "Backspace",
//     "Tab": "Tab",
//     "KeyQ": "q",
//     "KeyW": "w",
//     "KeyE": "e",
//     "KeyR": "r",
//     "KeyT": "t",
//     "KeyY": "y",
//     "KeyU": "u",
//     "KeyI": "i",
//     "KeyO": "o",
//     "KeyP": "p",
//     "BracketLeft": "[",
//     "BracketRight": "]",
//     "Backslash": "\\",
//     "CapsLock": "CapsLock",
//     "KeyA": "A",
//     "KeyS": "S",
//     "KeyD": "D",
//     "KeyF": "F",
//     "KeyG": "G",
//     "KeyH": "H",
//     "KeyJ": "J",
//     "KeyK": "K",
//     "KeyL": "L",
//     "Semicolon": ";",
//     "Quote": "'",
//     "Enter": "Enter",
//     "ShiftLeft": "Shift",
//     "KeyZ": "Z",
//     "KeyX": "X",
//     "KeyC": "C",
//     "KeyV": "V",
//     "KeyB": "B",
//     "KeyN": "N",
//     "KeyM": "M",
//     "Comma": ",",
//     "Period": ".",
//     "Slash": "/",
//     "ArrowUp": "ArrowUp",
//     "ShiftRight": "Shift",
//     "ControlLeft": "Control",
//     "MetaLeft": "Win",
//     "AltLeft": "Alt",
//     "Space": " ",
//     "AltRight": "Alt",
//     "ControlRight": "Control",
//     "ArrowLeft": "ArrowLeft",
//     "ArrowDown": "ArrowDown",
//     "ArrowRight": "ArrowRight"
// }
// console.log(Object.keys(objOfEngLetters2).length)

let rowsOfButtons = [
    {
    "Backquote": "`",
    "Digit1": "1",
    "Digit2": "2",
    "Digit3": "3",
    "Digit4": "4",
    "Digit5": "5",
    "Digit6": "6",
    "Digit7": "7",
    "Digit8": "8",
    "Digit9": "9",
    "Digit0": "0",
    "Minus": "-",
    "Equal": "=",
    "Backspace": "Backspace"
    },
    {
    "Tab": "Tab",
    "KeyQ": "q",
    "KeyW": "w",
    "KeyE": "e",
    "KeyR": "r",
    "KeyT": "t",
    "KeyY": "y",
    "KeyU": "u",
    "KeyI": "i",
    "KeyO": "o",
    "KeyP": "p",
    "BracketLeft": "[",
    "BracketRight": "]",
    "Backslash": "\\"
    },
    {
    "CapsLock": "CapsLock",
    "KeyA": "a",
    "KeyS": "s",
    "KeyD": "d",
    "KeyF": "f",
    "KeyG": "g",
    "KeyH": "h",
    "KeyJ": "j",
    "KeyK": "k",
    "KeyL": "l",
    "Semicolon": ";",
    "Quote": "'",
    "Enter": "Enter"
    },
    {
    "ShiftLeft": "Shift",
    "KeyZ": "z",
    "KeyX": "x",
    "KeyC": "c",
    "KeyV": "v",
    "KeyB": "b",
    "KeyN": "n",
    "KeyM": "m",
    "Comma": ",",
    "Period": ".",
    "Slash": "/",
    "ArrowUp": "ArrowUp",
    "ShiftRight": "Shift"
    },
    {
    "ControlLeft": "Control",
    "MetaLeft": "Win",
    "AltLeft": "Alt",
    "Space": " ",
    "AltRight": "Alt",
    "ControlRight": "Control",
    "ArrowLeft": "ArrowLeft",
    "ArrowDown": "ArrowDown",
    "ArrowRight": "ArrowRight"
    }
]
let body = document.querySelector(`body`);

let innerField = document.createElement(`textarea`);
innerField.classList.add(`textarea`)
body.append(innerField)

let keyBoard = document.createElement(`div`);
keyBoard.classList.add('keyBoard');
body.append(keyBoard)


for (let element of rowsOfButtons) {
    let buttonRow = document.createElement(`div`);
    buttonRow.classList.add(`buttonRow`);
    keyBoard.append(buttonRow)
    for (let el in element) {
        let button = document.createElement(`div`);
        button.classList.add(`button`);
        button.classList.add(el);
        button.innerHTML = element[el];
        buttonRow.append(button)
    }
}




document.onkeydown = function(e)
{

    // objOfEngLetters2[e.code] = e.key

    console.log(e.code, e.key)
}