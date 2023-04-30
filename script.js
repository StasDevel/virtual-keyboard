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
    "Backslash": "\\",
    "Delete": "Del"
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
    "ArrowUp": "▲",
    "ShiftRight": "Shift"
    },
    {
    "ControlLeft": "Ctrl",
    "MetaLeft": "Win",
    "AltLeft": "Alt",
    "Space": " ",
    "AltRight": "Alt",
    "ArrowLeft": "◄",
    "ArrowDown": "▼",
    "ArrowRight": "►",
    "ControlRight": "Ctrl"
    }
]

let russianButtons = {
    "Backquote": "ё",
    "KeyQ": "й",
    "KeyW": "ц",
    "KeyE": "у",
    "KeyR": "к",
    "KeyT": "е",
    "KeyY": "н",
    "KeyU": "г",
    "KeyI": "ш",
    "KeyO": "щ",
    "KeyP": "з",
    "BracketLeft": "х",
    "BracketRight": "ъ",
    "KeyA": "ф",
    "KeyS": "ы",
    "KeyD": "в",
    "KeyF": "а",
    "KeyG": "п",
    "KeyH": "р",
    "KeyJ": "о",
    "KeyK": "л",
    "KeyL": "д",
    "Semicolon": "ж",
    "Quote": "э",
    "KeyZ": "я",
    "KeyX": "ч",
    "KeyC": "с",
    "KeyV": "м",
    "KeyB": "и",
    "KeyN": "т",
    "KeyM": "ь",
    "Comma": "б",
    "Period": "ю",
    "Slash": "."
};

let engButtons = {
    "Backquote": "`",
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
};

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
        buttonRow.append(button);

    }
}

// document.addEventListener ( `keydown`, function func (e){
//     for (let element of keyBoard.children) {
//         for (let el of element.children) {
//             if ([...el.classList].includes(e.code)) {
//                 el.style.backgroundColor = `green`;
//             }
//         }
//     }
// }
// )

// document.addEventListener(`keydown`, function (e) {
//     console.log(e.code, e.key)

// })

let turner = [];
document.addEventListener(`keydown`, function colorChangerOn (e){
    
    for (let element of keyBoard.children) {
        for (let el of element.children) {
            if ([...el.classList].includes(e.code)) {
                el.style.transform = `scale(0.9)`;
                el.style.boxShadow = `0px 10px 20px 2px rgba(0, 0, 0, 0.25)`;
            }
        }
    }

    // Меняет раскладку
    
    if ((e.code === 'ShiftLeft' || e.code === 'AltLeft') && turner.length < 2) {
        turner.push (e.code)
    } else if (turner.length >= 2) {
        turner.splice(0, 1);
    }
    if (turner[0] === 'ShiftLeft' && turner[1] === 'AltLeft')  {
        for (let element of keyBoard.children) {
            for (let i = 0; i < element.children.length; i++) { 
                if (element.children[i].innerHTML != engButtons[element.children[i].classList[1]] && Object.keys(engButtons).includes(element.children[i].classList[1])) {
                    console.log(engButtons[element.children[i].classList[1]]);
                    element.children[i].innerHTML = engButtons[element.children[i].classList[1]];
                } else if (element.children[i].innerHTML != russianButtons[element.children[i].classList[1]] && Object.keys(russianButtons).includes(element.children[i].classList[1])) {
                    element.children[i].innerHTML = russianButtons[element.children[i].classList[1]];
                }
            }
        }

        console.log(turner)
        turner = [];
        
    }
    
    // Меняет регистр

    if (e.code === 'CapsLock') {
        for (let element of keyBoard.children) {
            for (let el of element.children) {
                if (el.innerHTML.length <= 1 && el.innerHTML[0] != el.innerHTML[0].toUpperCase()) {
                    el.innerHTML = el.innerHTML.toUpperCase();
                } else if (el.innerHTML.length <= 1 && el.innerHTML[0] == el.innerHTML[0].toUpperCase()){
                    el.innerHTML = el.innerHTML.toLowerCase();
                }
            }
        }
    }
    
})

document.onkeyup = function colorChangerOff (e){
    for (let element of keyBoard.children) {
        for (let el of element.children) {
            if ([...el.classList].includes(e.code)) {
                el.style.transform = `scale(1)`;
                el.style.boxShadow = `2px 2px 2px 0px rgba(0,0,0,0.3)`;
                if (el.innerHTML.length <= 1) {
                    innerField.innerHTML += el.innerHTML
                }
            }
            
        }
    }
    
}

//======================================================= Действия Мыши

// for (let element of keyBoard.children) {
//     for (let el of element.children) {
//         el.addEventListener(`click`, function func (e) {
//                 el.style.transform = `scale(0.9)`;
//                 el.style.boxShadow = `0px 10px 20px 2px rgba(0, 0, 0, 0.25)`;    
// });
// el.addEventListener(`click`, function func (e) {
            
//     el.style.transform = `scale(1)`;
//     el.style.boxShadow = `2px 2px 2px 0px rgba(0,0,0,0.3)`;

// })
//     }
// }

document.addEventListener(`mousedown`, function func (e) {
    
    if ([...e.target.classList].includes(`button`)) {
        e.target.style.transform = `scale(0.9)`;
        e.target.style.boxShadow = `0px 10px 20px 2px rgba(0, 0, 0, 0.25)`;
    }

    if ([...e.target.classList].includes(`button`) && e.target.innerHTML.length <= 1) {
        innerField.innerHTML += e.target.innerHTML
    }
    
    if ([...e.target.classList].includes(`Enter`)) {
        innerField.innerHTML += `\n`
    };

    if ([...e.target.classList].includes(`Tab`)) {
        innerField.innerHTML += `   `
    }

    if ([...e.target.classList].includes(`CapsLock`)) {
            for (let element of keyBoard.children) {
                for (let el of element.children) {
                    if (el.innerHTML.length <= 1 && el.innerHTML[0] != el.innerHTML[0].toUpperCase()) {
                        el.innerHTML = el.innerHTML.toUpperCase();
                    } else if (el.innerHTML.length <= 1 && el.innerHTML[0] == el.innerHTML[0].toUpperCase()){
                        el.innerHTML = el.innerHTML.toLowerCase();
                    }
                }
            }
    }

    if ([...e.target.classList].includes(`Backspace`)) {
        console.log(innerField.innerHTML.split(``));
        let arr = innerField.innerHTML.split(``);
        arr.splice(innerField.selectionStart - 1, 1);
        innerField.innerHTML = arr.join('');
    }

    if ([...e.target.classList].includes(`Delete`)) {
        console.log(innerField.innerHTML.split(``));
        let arr = innerField.innerHTML.split(``);
        arr.splice(innerField.selectionStart, 1);
        innerField.innerHTML = arr.join('');
    }
    
});

document.addEventListener(`mouseup`, function func (e) {
    if ([...e.target.classList].includes(`button`)) {
        e.target.style.transform = `scale(1)`;
        e.target.style.boxShadow = `2px 2px 2px 0px rgba(0,0,0,0.3)`;
    }
});

innerField.addEventListener(`click`, (e) => {
    console.log(innerField.selectionStart)
})