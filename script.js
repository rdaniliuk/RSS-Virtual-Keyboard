const keyboardLayout = {
  en: [
    [
      { initial: '`', shift: '~' },
      { initial: '1', shift: '!' },
      { initial: '2', shift: '@' },
      { initial: '3', shift: '#' },
      { initial: '4', shift: '$' },
      { initial: '5', shift: '%' },
      { initial: '6', shift: '^' },
      { initial: '7', shift: '&' },
      { initial: '8', shift: '*' },
      { initial: '9', shift: '(' },
      { initial: '0', shift: ')' },
      { initial: '-', shift: '_' },
      { initial: '=', shift: '+' },
      {
        initial: 'Backspace',
        action: 'BACKSPACE',
        className: 'buttonEnterAndDelete',
      },
    ],
    [
      { initial: 'Tab', action: 'TAB', className: 'buttonSpecialTwo' },
      { initial: 'q' },
      { initial: 'w' },
      { initial: 'e' },
      { initial: 'r' },
      { initial: 't' },
      { initial: 'y' },
      { initial: 'u' },
      { initial: 'i' },
      { initial: 'o' },
      { initial: 'p' },
      { initial: '[', shift: '{' },
      { initial: ']', shift: '}' },
      { initial: '\\', shift: '/' },
      { initial: 'Del', action: 'DELETE', className: 'buttonSpecial' },
    ],
    [
      { initial: 'CapsLk', action: 'CAPS', className: 'buttonSpecial' },
      { initial: 'a' },
      { initial: 's' },
      { initial: 'd' },
      { initial: 'f' },
      { initial: 'g' },
      { initial: 'h' },
      { initial: 'j' },
      { initial: 'k' },
      { initial: 'l' },
      { initial: ';', shift: ':' },
      { initial: '\'', shift: '"' },
      { initial: 'Enter', action: 'ENTER', className: 'buttonEnterAndDelete' },
    ],
    [
      { initial: 'Shift', action: 'SHIFT', className: 'buttonSpecial' },
      { initial: 'z' },
      { initial: 'x' },
      { initial: 'c' },
      { initial: 'v' },
      { initial: 'b' },
      { initial: 'n' },
      { initial: 'm' },
      { initial: ',', shift: '<' },
      { initial: '.', shift: '>' },
      { initial: '/', shift: '?' },
      { initial: 'Shift', action: 'SHIFT', className: 'buttonSpecial' },
      { initial: '↑', action: 'UP', className: 'buttonTurns' },
    ],
    [
      { initial: 'Ctrl', action: 'CTRL', className: 'buttonSpecialTwo' },
      { initial: 'Win', action: 'WIN', className: 'buttonSpecialTwo' },
      {
        initial: 'Alt',
        action: 'ALT',
        className: 'buttonSpecialTwo',
        id: 'key-left-alt',
      },
      { initial: '', action: 'SPACE', className: 'buttonSpace' },
      {
        initial: 'Alt',
        action: 'ALT',
        className: 'buttonSpecialTwo',
        id: 'key-right-alt',
      },
      { initial: 'Ctrl', action: 'CTRL', className: 'buttonSpecialTwo' },
      { initial: '←', action: 'LEFT', className: 'buttonTurns' },
      { initial: '↓', action: 'DOWN', className: 'buttonTurns' },
      { initial: '→', action: 'RIGHT', className: 'buttonTurns' },
    ],
  ],
  ru: [
    [
      { initial: 'ё', shift: 'Ё' },
      { initial: '1', shift: '!' },
      { initial: '2', shift: '"' },
      { initial: '3', shift: '№' },
      { initial: '4', shift: ';' },
      { initial: '5', shift: '%' },
      { initial: '6', shift: ':' },
      { initial: '7', shift: '?' },
      { initial: '8', shift: '*' },
      { initial: '9', shift: '(' },
      { initial: '0', shift: ')' },
      { initial: '-', shift: '_' },
      { initial: '=', shift: '+' },
      {
        initial: 'Backspace',
        action: 'BACKSPACE',
        className: 'buttonEnterAndDelete',
      },
    ],
    [
      { initial: 'Tab', action: 'TAB', className: 'buttonSpecialTwo' },
      { initial: 'й' },
      { initial: 'ц' },
      { initial: 'у' },
      { initial: 'к' },
      { initial: 'е' },
      { initial: 'н' },
      { initial: 'г' },
      { initial: 'ш' },
      { initial: 'щ' },
      { initial: 'з' },
      { initial: 'х' },
      { initial: 'ъ' },
      { initial: '\\', shift: '/' },
      { initial: 'Del', action: 'DELETE', className: 'buttonSpecial' },
    ],
    [
      { initial: 'Caps', action: 'CAPS', className: 'buttonSpecial' },
      { initial: 'ф' },
      { initial: 'ы' },
      { initial: 'в' },
      { initial: 'а' },
      { initial: 'п' },
      { initial: 'р' },
      { initial: 'о' },
      { initial: 'л' },
      { initial: 'д' },
      { initial: 'ж' },
      { initial: 'э' },
      { initial: 'Enter', action: 'ENTER', className: 'buttonEnterAndDelete' },
    ],
    [
      { initial: 'Shift', action: 'SHIFT', className: 'buttonSpecial' },
      { initial: 'я' },
      { initial: 'ч' },
      { initial: 'с' },
      { initial: 'м' },
      { initial: 'и' },
      { initial: 'т' },
      { initial: 'ь' },
      { initial: 'б' },
      { initial: 'ю' },
      { initial: '.', shift: ',' },
      { initial: 'Shift', action: 'SHIFT', className: 'buttonSpecial' },
      { initial: '↑', action: 'UP', className: 'buttonTurns' },
    ],
    [
      { initial: 'Ctrl', action: 'CTRL', className: 'buttonSpecialTwo' },
      { initial: 'Win', action: 'WIN', className: 'buttonSpecialTwo' },
      {
        initial: 'Alt',
        action: 'ALT',
        className: 'buttonSpecialTwo',
        id: 'key-left-alt',
      },
      { initial: '', action: 'SPACE', className: 'buttonSpace' },
      {
        initial: 'Alt',
        action: 'ALT',
        className: 'buttonSpecialTwo',
        id: 'key-right-alt',
      },
      { initial: 'Ctrl', action: 'CTRL', className: 'buttonSpecialTwo' },
      { initial: '←', action: 'LEFT', className: 'buttonTurns' },
      { initial: '↓', action: 'DOWN', className: 'buttonTurns' },
      { initial: '→', action: 'RIGHT', className: 'buttonTurns' },
    ],
  ],
};
let lang = 'en';

function textAreaRender() {
  const textArea = document.createElement('textarea');
  textArea.id = 'textArea';
  document.body.prepend(textArea);
  textArea.rows = 2;
  textArea.cols = 50;
  return textArea;
}

function keyboardRender() {
  const keyboardDiv = document.createElement('div');
  keyboardDiv.id = 'keyboard';
  document.body.append(keyboardDiv);
  keyboardLayout[lang].forEach((row) => {
    const rowElem = document.createElement('div');
    rowElem.classList.add('row');
    keyboardDiv.appendChild(rowElem);
    row.forEach((cell, i) => {
      const keyboardButton = document.createElement('button');
      keyboardButton.innerText = cell.initial;
      keyboardButton.id = cell.id
        ? cell.id
        : `key-${cell.initial.toLowerCase()}`;
      rowElem.appendChild(keyboardButton);
      if (cell.className) {
        keyboardButton.classList.add(cell.className);
      }
    });
  });
  return keyboardDiv;
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft' && (event.ctrlKey || event.metaKey)) {
    lang = 'en';
  }});

function instructionRender() {
  const optionDiv = document.createElement('div');
  document.body.append(optionDiv);
  optionDiv.innerHTML = 'Клавиатура создана в операц ионной системе Windows \n Для переключения языка комбинация: левыe Ctrl + Alt';
  return optionDiv;
}

function setupClickEvents(keyboardDiv, textArea) {
  keyboardDiv.addEventListener('click', (event) => {
    console.log('click', event);
    console.log('shift is active', event.shiftKey);
    const cursorPosition = textArea.selectionStart;
    keyboardLayout[lang].forEach((row) => {
      row.forEach((cell) => {
        if (cell.initial === event.target.innerText) {
          textArea.value = calcTextArea(
            textArea.value,
            cursorPosition,
            cell.action,
            cell.initial,
          );
          console.log('textAreavalue', textArea.value);
        }
      });
    });
  });
}

document.addEventListener('mousedown', (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    e.target.classList.add('active');
  }
});
document.addEventListener('mouseup', (e) => {
  e.target.classList.remove('active');
});

let shiftWasPressed = false;
document.addEventListener('keydown', (event) => {
  if (event.shiftKey) {
    keyboardLayout[lang].forEach((row) => {
      row.forEach((cell, i) => {
        const elem = document.getElementById(
          cell.id ? cell.id : `key-${cell.initial.toLowerCase()}`,
        );
        if (cell.shift) {
          elem.innerHTML = cell.shift;
          shiftWasPressed = true;
        }
        else if (!cell.action) {
          elem.innerHTML = cell.initial.toUpperCase();
        }
      });
    });
  }
});

document.addEventListener('keyup', (event) => {
  if (!event.shiftKey && shiftWasPressed) {
    keyboardLayout[lang].forEach((row) => {
      row.forEach((cell, i) => {
        const elem = document.getElementById(
          cell.id ? cell.id : `key-${cell.initial.toLowerCase()}`,
        );
        if (cell.shift) {
          elem.innerHTML = cell.initial;
          shiftWasPressed = false;
        } else {
          elem.innerHTML = cell.initial;
        }
      });
    });
  }
});


document.body.addEventListener('keydown', (e) => {
  console.log('e.keyCode', e.code);
  const { key } = e;
  const el = document.getElementById(`key-${key.toLowerCase()}`);
  console.log('keydown', el);
  el.classList.add('active');
});

document.addEventListener('keyup', (e) => {
  const { key } = e;
  console.log('keydSDASDASDown', key);
  const el = document.getElementById(`key-${key.toLowerCase()}`);
  console.log('keydown', el);
  el.classList.remove('active');
});

let capsWasPressed = false;
document.addEventListener('keypress', (event) => {
  if (event.code === 20) {
    capsWasPressed = true;
    keyboardLayout[lang].forEach((row) => {
      row.forEach((cell, i) => {
        const elem = document.getElementById(
          cell.id ? cell.id : `key-${cell.initial.toLowerCase()}`,
        );
        if (!cell.shift && !cell.action) {
          elem.innerHTML = cell.initial.toUpperCase();
        }
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const textArea = textAreaRender();
  const keyboardDiv = keyboardRender('initial');
  instructionRender();
  setupClickEvents(keyboardDiv, textArea);
});

const calcTextArea = (currTextAreaVal, cursorPosition, action, char) => {
  const textArea = document.querySelector('textarea');
  switch (action) {
    case 'DELETE': {
      return (
        currTextAreaVal.slice(0, cursorPosition)
        + currTextAreaVal.slice(cursorPosition + 1, currTextAreaVal.length)
      );
    }

    case 'BACKSPACE': {
      if (cursorPosition === 0) {
        return currTextAreaVal;
      }
      textArea.focus();
      return (
        currTextAreaVal.slice(0, cursorPosition - 1)
          + currTextAreaVal.slice(cursorPosition)
      );
    }

    case 'SPACE': {
      return (
        `${currTextAreaVal.slice(0, cursorPosition)
        } ${
          currTextAreaVal.slice(cursorPosition)}`
      );
    }
    case 'TAB': {
      return (
        `${currTextAreaVal.slice(0, cursorPosition)
        }    ${
          currTextAreaVal.slice(cursorPosition)}`
      );
    }
    case 'CAPS': {
      return currTextAreaVal;
    }
    case 'SHIFT': {
      return currTextAreaVal;
    }
    case 'CTRL': {
      return currTextAreaVal;
    }
    case 'WIN': {
      return currTextAreaVal;
    }
    case 'ALT': {
      return currTextAreaVal;
    }
    case 'LEFT': {
      textArea.selectionEnd = cursorPosition - 1;
      textArea.focus();
      return currTextAreaVal;
    }
    case 'RIGHT': {
      textArea.selectionStart = cursorPosition + 1;
      textArea.focus();
      return currTextAreaVal;
    }
    case 'ENTER': {
      return (
        `${currTextAreaVal.slice(0, cursorPosition)
        }\n${
          currTextAreaVal.slice(cursorPosition)}`
      );
    }
    default: {
      return (
        currTextAreaVal.slice(0, cursorPosition)
        + char
        + currTextAreaVal.slice(cursorPosition)
      );
    }
  }
};
