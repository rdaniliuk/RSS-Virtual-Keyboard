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
        initial: 'backspace',
        action: 'BACKSPACE',
        className: 'buttonEnterAndDelete',
      },
    ],
    [
      { initial: 'tab', action: 'TAB', className: 'buttonSpecialTwo' },
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
      {
        initial: 'delete', action: 'DELETE', className: 'buttonSpecial', id: 'delete',
      },
    ],
    [
      {
        initial: 'capsLk', action: 'CAPS', className: 'buttonSpecial', id: 'capslock',
      },
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
      { initial: 'enter', action: 'ENTER', className: 'buttonEnterAndDelete' },
    ],
    [
      { initial: 'shift', action: 'SHIFT', className: 'buttonSpecial' },
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
      {
        initial: '↑', action: 'UP', className: 'buttonTurns', id: 'arrowup',
      },
      { initial: 'like', className: 'buttonLike', id: 'like' },
    ],
    [
      {
        initial: 'ctrl', action: 'CTRL', className: 'buttonSpecialTwo', id: 'control',
      },
      {
        initial: 'win', action: 'WIN', className: 'buttonSpecialTwo', id: 'meta',
      },
      {
        initial: 'alt',
        action: 'ALT',
        className: 'buttonSpecialTwo',
        id: 'alt',
      },
      {
        initial: ' ', action: 'SPACE', className: 'buttonSpace', id: 'space',
      },
      {
        initial: '←', action: 'LEFT', className: 'buttonTurns', id: 'arrowleft',
      },
      {
        initial: '↓', action: 'DOWN', className: 'buttonTurns', id: 'arrowdown',
      },
      {
        initial: '→', action: 'RIGHT', className: 'buttonTurns', id: 'arrowright',
      },
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
        initial: 'backspace',
        action: 'BACKSPACE',
        className: 'buttonEnterAndDelete',
      },
    ],
    [
      { initial: 'tab', action: 'TAB', className: 'buttonSpecialTwo' },
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
      {
        initial: 'delete', action: 'DELETE', className: 'buttonSpecial', id: 'delete',
      },
    ],
    [
      {
        initial: 'capsLk', action: 'CAPS', className: 'buttonSpecial', id: 'capslock',
      },
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
      { initial: 'enter', action: 'ENTER', className: 'buttonEnterAndDelete' },
    ],
    [
      { initial: 'shift', action: 'SHIFT', className: 'buttonSpecial' },
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
      {
        initial: '↑', action: 'UP', className: 'buttonTurns', id: 'arrowup',
      },
      { initial: 'like', className: 'buttonLike', id: 'like' },
    ],
    [
      {
        initial: 'ctrl', action: 'CTRL', className: 'buttonSpecialTwo', id: 'control',
      },
      {
        initial: 'win', action: 'WIN', className: 'buttonSpecialTwo', id: 'meta',
      },
      {
        initial: 'alt',
        action: 'ALT',
        className: 'buttonSpecialTwo',
        id: 'alt',
      },
      {
        initial: ' ', action: 'SPACE', className: 'buttonSpace', id: 'space',
      },
      {
        initial: '←', action: 'LEFT', className: 'buttonTurns', id: 'arrowleft',
      },
      {
        initial: '↓', action: 'DOWN', className: 'buttonTurns', id: 'arrowdown',
      },
      {
        initial: '→', action: 'RIGHT', className: 'buttonTurns', id: 'arrowright',
      },
    ],
  ],
};

const specialKeys = ['ctrl', 'capsLk', ' ', 'win', 'alt', '↑', '←', '↓', '→'];

let lang = localStorage.getItem('lang') || 'en';

function textAreaRender() {
  const textArea = document.createElement('textarea');
  textArea.id = 'textArea';
  document.body.prepend(textArea);
  textArea.rows = 2;
  textArea.cols = 50;
  return textArea;
}
function instructionRender() {
  const optionDiv = document.createElement('p');
  document.body.prepend(optionDiv);
  optionDiv.innerHTML = 'Клавиатура создана в операц ионной системе Windows \n Для переключения языка комбинация: Ctrl + Alt. \n При проверке на совем устройстве все работало без ошибок, если заметите како-то баг , то буду признателен, если напишите мне в дискорде, чтобы я его пофиксил  discord: BBS#7805';
  return optionDiv;
}
function keyboardRender() {
  const keyboardDiv = document.createElement('div');
  keyboardDiv.id = 'keyboard';
  document.body.append(keyboardDiv);
  keyboardLayout[lang].forEach((row) => {
    const rowElem = document.createElement('div');
    rowElem.classList.add('row');
    keyboardDiv.appendChild(rowElem);
    row.forEach((cell) => {
      const keyboardButton = document.createElement('button');
      keyboardButton.innerText = cell.initial;
      keyboardButton.id = cell.id
        ? cell.id
        : cell.initial.toLowerCase();
      rowElem.appendChild(keyboardButton);
      if (cell.className) {
        keyboardButton.classList.add(cell.className);
      }
    });
  });
  return keyboardDiv;
}

document.addEventListener('mousedown', (e) => {
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
      row.forEach((cell) => {
        const elem = document.getElementById(cell.initial.toLowerCase());
        if (cell.shift) {
          elem.innerHTML = cell.shift;
          shiftWasPressed = true;
        } else if (!cell.action) {
          elem.innerHTML = cell.initial.toUpperCase();
        }
      });
    });
  }
});

document.addEventListener('keydown', (event) => {
  const keyboardDiv = document.getElementById('keyboard');
  const rows = keyboardDiv.children;
  if (event.code === 'AltLeft' && (event.ctrlKey || event.metaKey)) {
    lang = lang === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', lang);
    keyboardLayout[lang].forEach((row, i) => {
      const currentRowEl = rows[i];
      row.forEach((cell, j) => {
        const currentEl = currentRowEl.children[j];
        if (!specialKeys.includes(cell.initial)) {
          currentEl.innerText = cell.initial;
          currentEl.id = cell.initial;
        }
      });
    });
  }
});

document.addEventListener('keyup', (event) => {
  if (!event.shiftKey && shiftWasPressed) {
    keyboardLayout[lang].forEach((row) => {
      row.forEach((cell) => {
        const elem = document.getElementById(
          cell.id ? cell.id : cell.initial.toLowerCase(),
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
  const { key, code } = e;
  const id = key === ' ' ? code : key;
  const el = document.getElementById(id.toLowerCase());
  el.classList.add('active');
});

document.addEventListener('keyup', (e) => {
  const { key, code } = e;
  const id = key === ' ' ? code : key;
  const el = document.getElementById(id.toLowerCase());
  el.classList.remove('active');
});

let capsWasPressed = false;
document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
    if (capsWasPressed === false) {
      capsWasPressed = true;
    } else {
      capsWasPressed = false;
    }
    keyboardLayout[lang].forEach((row) => {
      row.forEach((cell) => {
        const elem = document.getElementById(cell.initial.toLowerCase());
        if (capsWasPressed === true) {
          if (!cell.shift && !cell.action) {
            elem.innerHTML = cell.initial.toUpperCase();
          }
        } else if (!cell.shift && !cell.action) {
          elem.innerHTML = cell.initial.toLowerCase();
        }
      });
    });
  }
});

document.addEventListener('click', (event) => {
  if (event.target.id === 'capslock') {
    if (capsWasPressed === false) {
      capsWasPressed = true;
    } else {
      capsWasPressed = false;
    }
    keyboardLayout[lang].forEach((row) => {
      row.forEach((cell) => {
        const elem = document.getElementById(cell.initial.toLowerCase());
        if (capsWasPressed === true) {
          if (!cell.shift && !cell.action) {
            elem.innerHTML = cell.initial.toUpperCase();
          }
        } else if (!cell.shift && !cell.action) {
          elem.innerHTML = cell.initial.toLowerCase();
        }
      });
    });
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    const textArea = document.querySelector('textarea');
    textArea.focus();
  }
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
      document.addEventListener('mousedown', (event) => {
        if (event.target.id === 'shift') {
          keyboardLayout[lang].forEach((row) => {
            row.forEach((cell) => {
              const elem = document.getElementById(cell.initial.toLowerCase());
              if (cell.shift) {
                elem.innerHTML = cell.shift;
                shiftWasPressed = true;
              } else if (!cell.action) {
                elem.innerHTML = cell.initial.toUpperCase();
              }
            });
          });
        }
      });
      document.addEventListener('mouseup', (event) => {
        if (!event.shiftKey && shiftWasPressed) {
          keyboardLayout[lang].forEach((row) => {
            row.forEach((cell) => {
              const elem = document.getElementById(
                cell.id ? cell.id : cell.initial.toLowerCase(),
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

function setupClickEvents(keyboardDiv) {
  const textArea = document.getElementById('textArea');
  keyboardDiv.addEventListener('click', (event) => {
    const cursorPosition = textArea.selectionStart;
    keyboardLayout[lang].forEach((row) => {
      row.forEach((cell) => {
        if (cell.initial === event.target.innerText.toLowerCase()
        || cell.shift === event.target.innerText.toLowerCase()) {
          textArea.value = calcTextArea(
            textArea.value,
            cursorPosition,
            cell.action,
            event.target.innerText,
          );
          textArea.selectionStart = cursorPosition;
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const textArea = textAreaRender();
  const keyboardDiv = keyboardRender('initial');
  instructionRender();
  setupClickEvents(keyboardDiv, textArea);
  textArea.focus();
});
