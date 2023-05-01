const rowsOfButtons = [
  {
    Backquote: '`',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Backspace: 'Backspace',
  },
  {
    Tab: 'Tab',
    KeyQ: 'q',
    KeyW: 'w',
    KeyE: 'e',
    KeyR: 'r',
    KeyT: 't',
    KeyY: 'y',
    KeyU: 'u',
    KeyI: 'i',
    KeyO: 'o',
    KeyP: 'p',
    BracketLeft: '[',
    BracketRight: ']',
    Backslash: '\\',
    Delete: 'Del',
  },
  {
    CapsLock: 'CapsLock',
    KeyA: 'a',
    KeyS: 's',
    KeyD: 'd',
    KeyF: 'f',
    KeyG: 'g',
    KeyH: 'h',
    KeyJ: 'j',
    KeyK: 'k',
    KeyL: 'l',
    Semicolon: ';',
    Quote: "'",
    Enter: 'Enter',
  },
  {
    ShiftLeft: 'Shift',
    KeyZ: 'z',
    KeyX: 'x',
    KeyC: 'c',
    KeyV: 'v',
    KeyB: 'b',
    KeyN: 'n',
    KeyM: 'm',
    Comma: ',',
    Period: '.',
    Slash: '/',
    ArrowUp: '▲',
    ShiftRight: 'Shift',
  },
  {
    ControlLeft: 'Ctrl',
    MetaLeft: 'Win',
    AltLeft: 'Alt',
    Space: ' ',
    AltRight: 'Alt',
    ArrowLeft: '◄',
    ArrowDown: '▼',
    ArrowRight: '►',
    ControlRight: 'Ctrl',
  },
];

const rowsOfButtonsEng = {
  Backquote: '`',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Delete: 'Del',
  CapsLock: 'CapsLock',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ';',
  Quote: "'",
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ArrowUp: '▲',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  MetaLeft: 'Win',
  AltLeft: 'Alt',
  Space: ' ',
  AltRight: 'Alt',
  ArrowLeft: '◄',
  ArrowDown: '▼',
  ArrowRight: '►',
  ControlRight: 'Ctrl',
};

const rowsOfButtonsRus = {
  Backquote: 'ё',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'й',
  KeyW: 'ц',
  KeyE: 'у',
  KeyR: 'к',
  KeyT: 'е',
  KeyY: 'н',
  KeyU: 'г',
  KeyI: 'ш',
  KeyO: 'щ',
  KeyP: 'з',
  BracketLeft: 'х',
  BracketRight: 'ъ',
  Backslash: '\\',
  Delete: 'Del',
  CapsLock: 'CapsLock',
  KeyA: 'ф',
  KeyS: 'ы',
  KeyD: 'в',
  KeyF: 'а',
  KeyG: 'п',
  KeyH: 'р',
  KeyJ: 'о',
  KeyK: 'л',
  KeyL: 'д',
  Semicolon: 'ж',
  Quote: 'э',
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  KeyZ: 'я',
  KeyX: 'ч',
  KeyC: 'с',
  KeyV: 'м',
  KeyB: 'и',
  KeyN: 'т',
  KeyM: 'ь',
  Comma: 'б',
  Period: 'ю',
  Slash: '.',
  ArrowUp: '▲',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  MetaLeft: 'Win',
  AltLeft: 'Alt',
  Space: ' ',
  AltRight: 'Alt',
  ArrowLeft: '◄',
  ArrowDown: '▼',
  ArrowRight: '►',
  ControlRight: 'Ctrl',
};

const shiftButtonsRus = {
  ShiftLeft: 'Shift',
  Backquote: 'Ё',
  Digit1: '!',
  Digit2: '"',
  Digit3: '№',
  Digit4: ';',
  Digit5: '%',
  Digit6: ':',
  Digit7: '?',
  Digit8: '*',
  Digit9: '(',
  Digit0: ')',
  Minus: '_',
  Equal: '+',
  KeyQ: 'Й',
  KeyW: 'Ц',
  KeyE: 'У',
  KeyR: 'К',
  KeyT: 'Е',
  KeyY: 'Н',
  KeyU: 'Г',
  KeyI: 'Ш',
  KeyO: 'Щ',
  KeyP: 'З',
  BracketLeft: 'Х',
  BracketRight: 'Ъ',
  Backslash: '/',
  KeyA: 'Ф',
  KeyS: 'Ы',
  KeyD: 'В',
  KeyF: 'А',
  KeyG: 'П',
  KeyH: 'Р',
  KeyJ: 'О',
  KeyK: 'Л',
  KeyL: 'Д',
  Semicolon: 'Ж',
  Quote: 'Э',
  KeyZ: 'Я',
  KeyX: 'Ч',
  KeyC: 'С',
  KeyV: 'М',
  KeyB: 'И',
  KeyN: 'Т',
  KeyM: 'Ь',
  Comma: 'Б',
  Period: 'Ю',
  Slash: ',',
};

const shiftButtonsEng = {
  Backquote: '~',
  Digit1: '!',
  Digit2: '@',
  Digit3: '#',
  Digit4: '$',
  Digit5: '%',
  Digit6: '^',
  Digit7: '&',
  Digit8: '*',
  Digit9: '(',
  Digit0: ')',
  Minus: '_',
  Equal: '+',
  KeyQ: 'Q',
  KeyW: 'W',
  KeyE: 'E',
  KeyR: 'R',
  KeyT: 'T',
  KeyY: 'Y',
  KeyU: 'U',
  KeyI: 'I',
  KeyO: 'O',
  KeyP: 'P',
  BracketLeft: '{',
  BracketRight: '}',
  Backslash: '|',
  KeyA: 'A',
  KeyS: 'S',
  KeyD: 'D',
  KeyF: 'F',
  KeyG: 'G',
  KeyH: 'H',
  KeyJ: 'J',
  KeyK: 'K',
  KeyL: 'L',
  Semicolon: ':',
  Quote: '"',
  KeyZ: 'Z',
  KeyX: 'X',
  KeyC: 'C',
  KeyV: 'V',
  KeyB: 'B',
  KeyN: 'N',
  KeyM: 'M',
  Comma: '<',
  Period: '>',
  Slash: '?',
};

const body = document.querySelector('body');

const title = document.createElement('p');
title.classList.add('title');
title.innerHTML = 'RSS Виртуальная клавиатура';
body.append(title);

const innerField = document.createElement('textarea');
innerField.classList.add('textarea');
body.append(innerField);

const keyBoard = document.createElement('div');
keyBoard.classList.add('keyBoard');
body.append(keyBoard);

const info = document.createElement('p');
info.classList.add('info');
info.innerHTML = 'Клавиатура создана в операционной системе Windows';
body.append(info);

const lang = document.createElement('p');
lang.classList.add('lang');
lang.innerHTML = 'Для переключения языка комбинация: левыe Ctrl + Alt';
body.append(lang);

if (localStorage.getItem(`checker`) === null) {
    localStorage.setItem('checker', `eng`);
};

for (const element of rowsOfButtons) {
  const buttonRow = document.createElement('div');
  buttonRow.classList.add('buttonRow');
  keyBoard.append(buttonRow);
  for (const el in element) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.classList.add(el);
    button.innerHTML = element[el];
    buttonRow.append(button);
  }
}

if (localStorage.getItem('checker') === 'eng') {
  for (const element of keyBoard.children) {
    for (let i = 0; i < element.children.length; i++) {
      element.children[i].innerHTML = rowsOfButtonsEng[element.children[i].classList[1]];
    }
  }
} else if (localStorage.getItem('checker') === 'rus') {
  for (const element of keyBoard.children) {
    for (let i = 0; i < element.children.length; i++) {
      element.children[i].innerHTML = rowsOfButtonsRus[element.children[i].classList[1]];
    }
  }
}
// document.addEventListener(`keydown`, function (e) {
//     // shiftButtonsRus[e.code] = e.key;
//     console.log(e.code, e.key)
//     // console.log(shiftButtonsRus)
// })

let turner = [];

document.addEventListener('keydown', (e) => {
  // Анимация кнопок при нажатии (можно улучшить!)

  for (const element of keyBoard.children) {
    for (const el of element.children) {
      if ([...el.classList].includes(e.code)) {
        el.style.transform = 'scale(0.9)';
        el.style.boxShadow = '0px 10px 20px 2px rgba(0, 0, 0, 0.25)';
        el.style.backgroundColor = '#45ff01';
      }
    }
  }

  // Настройка таба

  if (e.code === 'Tab') {
    e.preventDefault();
    innerField.innerHTML += '   ';
  }

  if (e.code === 'AltLeft' || e.code === 'AltRight') {
    e.preventDefault();
  }

  // Меняет раскладку

  if ((e.code === 'ControlLeft' || e.code === 'AltLeft') && turner.length < 2) {
    turner.push(e.code);
    setTimeout(() => {
      turner = [];
    }, 500);
  }
  if (turner[0] === 'ControlLeft' && turner[1] === 'AltLeft') {
    if (localStorage.getItem('checker') === 'rus') {
      for (const element of keyBoard.children) {
        for (let i = 0; i < element.children.length; i++) {
          element.children[i].innerHTML = rowsOfButtonsEng[element.children[i].classList[1]];
        }
      }
      localStorage.setItem('checker', 'eng');
    } else if (localStorage.getItem('checker') === 'eng') {
      for (const element of keyBoard.children) {
        for (let i = 0; i < element.children.length; i++) {
          element.children[i].innerHTML = rowsOfButtonsRus[element.children[i].classList[1]];
        }
      }
      localStorage.setItem('checker', 'rus');
    }
    turner = [];
  }

  // Меняет регистр

  if (e.code === 'CapsLock') {
    for (const element of keyBoard.children) {
      for (const el of element.children) {
        if (el.innerHTML.length <= 1 && el.innerHTML[0] !== el.innerHTML[0].toUpperCase()) {
          el.innerHTML = el.innerHTML.toUpperCase();
        } else if (el.innerHTML.length <= 1 && el.innerHTML[0] === el.innerHTML[0].toUpperCase()) {
          el.innerHTML = el.innerHTML.toLowerCase();
        }
      }
    }
  }

  // Нормальный рабочий обработчик шифтов на изменение символов!!!!!!!

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (localStorage.getItem('checker') === 'rus') {
      for (const element of keyBoard.children) {
        for (let i = 0; i < element.children.length; i++) {
          if (element.children[i].innerHTML !== shiftButtonsRus[element.children[i].classList[1]] && Object.keys(shiftButtonsRus).includes(element.children[i].classList[1])) {
            element.children[i].innerHTML = shiftButtonsRus[element.children[i].classList[1]];
          }
        }
      }
    } else if (localStorage.getItem('checker') === 'eng') {
      for (const element of keyBoard.children) {
        for (let i = 0; i < element.children.length; i++) {
          if (element.children[i].innerHTML !== shiftButtonsEng[element.children[i].classList[1]] && Object.keys(shiftButtonsEng).includes(element.children[i].classList[1])) {
            element.children[i].innerHTML = shiftButtonsEng[element.children[i].classList[1]];
          }
        }
      }
    }
  }
});

document.addEventListener('keyup', (e) => {
  // Стили клавиш при поднятии клавиши

  for (const element of keyBoard.children) {
    for (const el of element.children) {
      if ([...el.classList].includes(e.code)) {
        el.style.transform = 'scale(1)';
        el.style.boxShadow = '2px 2px 2px 0px rgba(0,0,0,0.3)';
        el.style.backgroundColor = '#0000005e';
        if (el.innerHTML.length <= 1) {
          innerField.innerHTML += el.innerHTML;
        }
      }
    }
  }

  // Возвращает буквы в норму, когда отпускается левый или правый шифты

  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (localStorage.getItem('checker') === 'rus') {
      for (const element of keyBoard.children) {
        for (let i = 0; i < element.children.length; i++) {
          element.children[i].innerHTML = rowsOfButtonsRus[element.children[i].classList[1]];
        }
      }
    } else if (localStorage.getItem('checker') === 'eng') {
      for (const element of keyBoard.children) {
        for (let i = 0; i < element.children.length; i++) {
          element.children[i].innerHTML = rowsOfButtonsEng[element.children[i].classList[1]];
        }
      }
    }
  }
});

//= ====================================================== Действия Мыши
let lastPointerPos = 0;

document.addEventListener('mousedown', (e) => {
  if ([...e.target.classList].includes('button')) {
    e.target.style.transform = 'scale(0.9)';
    e.target.style.boxShadow = '0px 10px 20px 2px rgba(0, 0, 0, 0.25)';
  }

  if ([...e.target.classList].includes('button') && e.target.innerHTML.length <= 1) {
    var end = innerField.selectionStart;
	var start = innerField.selectionEnd;
	var finText = innerField.innerHTML.substring(0, start) + e.target.innerHTML + innerField.innerHTML.substring(end);
	innerField.innerHTML = finText;
    innerField.selectionStart = lastPointerPos + 1;
  }

  if ([...e.target.classList].includes('Enter')) {
    innerField.innerHTML += '\n';
  }

  if ([...e.target.classList].includes('Tab')) {
    innerField.innerHTML += '   ';
  }

  if ([...e.target.classList].includes('CapsLock')) {
    for (const element of keyBoard.children) {
      for (const el of element.children) {
        if (el.innerHTML.length <= 1 && el.innerHTML[0] !== el.innerHTML[0].toUpperCase()) {
          el.innerHTML = el.innerHTML.toUpperCase();
        } else if (el.innerHTML.length <= 1 && el.innerHTML[0] === el.innerHTML[0].toUpperCase()) {
          el.innerHTML = el.innerHTML.toLowerCase();
        }
      }
    }
  }

  if ([...e.target.classList].includes('Backspace')) {
    const arr = innerField.innerHTML.split('');
    arr.splice(innerField.selectionStart - 1, 1);
    innerField.innerHTML = arr.join('');
    innerField.selectionStart = lastPointerPos;
  }

  if ([...e.target.classList].includes('Delete') && innerField.selectionStart > 0) {
    const arr = innerField.innerHTML.split('');
    arr.splice(innerField.selectionStart, 1);
    innerField.innerHTML = arr.join('');
    innerField.selectionStart = lastPointerPos;
  }
});

document.addEventListener('mouseup', (e) => {
  if ([...e.target.classList].includes('button')) {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '2px 2px 2px 0px rgba(0,0,0,0.3)';
  };
});

document.addEventListener('mouseout', (e) => {
  if ([...e.target.classList].includes('button')) {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '2px 2px 2px 0px rgba(0,0,0,0.3)';
    e.target.style.backgroundColor = `#0000005e`;
  }
});

document.addEventListener('mouseover', (e) => {
    if ([...e.target.classList].includes('button')) {
      e.target.style.backgroundColor = `#45ff01`;
    }
  });

// Предотвращение слета фокуса с поля ввода
keyBoard.onmousedown = function(e) {
    lastPointerPos = innerField.selectionStart;
    if (document.activeElement === innerField) {
      e.preventDefault();
    }
  };