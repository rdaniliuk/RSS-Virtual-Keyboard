const keyboardLayout = {
  en: [
    [
      { initial: "`", shift: "~" },
      { initial: "1", shift: "!" },
      { initial: "2", shift: "@" },
      { initial: "3", shift: "#" },
      { initial: "4", shift: "$" },
      { initial: "5", shift: "%" },
      { initial: "6", shift: "^" },
      { initial: "7", shift: "&" },
      { initial: "8", shift: "*" },
      { initial: "9", shift: "(" },
      { initial: "0", shift: ")" },
      { initial: "-", shift: "_" },
      { initial: "=", shift: "+" },
      { initial: "Backspace", action: "backspace", className: "buttonEnterAndDelete"  },
    ],
    [
      { initial: "Tab", action: "TAB", className: "buttonSpecialTwo"},
      { initial: "q" },
      { initial: "w" },
      { initial: "e" },
      { initial: "r" },
      { initial: "t" },
      { initial: "y" },
      { initial: "u" },
      { initial: "i" },
      { initial: "o" },
      { initial: "p" },
      { initial: "[", shift: "{" },
      { initial: "]", shift: "}" },
      { initial: "\\", shift: "/" },
      { initial: "Del", action: "DELETE", className: "buttonSpecial" },
    ],
    [
      { initial: "Caps Lk", action: "CAPS", className: "buttonSpecial" },
      { initial: "a" },
      { initial: "s" },
      { initial: "d" },
      { initial: "f" },
      { initial: "g" },
      { initial: "h" },
      { initial: "j" },
      { initial: "k" },
      { initial: "l" },
      { initial: ";", shift: ":" },
      { initial: "'", shift: '"' },
      { initial: "Enter", action: "ENTER", className: "buttonEnterAndDelete" },
    ],
    [
      { initial: "Shift", action: "SHIFT", className: "buttonSpecial" },
      { initial: "z" },
      { initial: "x" },
      { initial: "c" },
      { initial: "v" },
      { initial: "b" },
      { initial: "n" },
      { initial: "m" },
      { initial: ",", shift: "<" },
      { initial: ".", shift: ">" },
      { initial: "/", shift: "?" },
      { initial: "Shift", action: "SHIFT", className: "buttonSpecial" },
      { initial: "↑", action: "UP", className: "buttonTurns"  },
    ],
    [
      { initial: "Ctrl", action: "CTRL", className: "buttonSpecialTwo" },
      { initial: "Win", action: "WIN", className: "buttonSpecialTwo" },
      { initial: "Alt", action: "ALT", className: "buttonSpecialTwo" },
      { initial: "", action: "SPACE", className: "buttonSpace" },
      { initial: "Alt", action: "ALT", className: "buttonSpecialTwo" },
      { initial: "Ctrl", action: "CTRL", className: "buttonSpecialTwo" },
      { initial: "←", action: "LEFT", className: "buttonTurns" },
      { initial: "↓", action: "DOWN", className: "buttonTurns" },
      { initial: "→", action: "RIGHT", className: "buttonTurns" },
    ],
  ],
  ru: [
    [
      { initial: "ё", shift: "Ё" },
      { initial: "1", shift: "!" },
      { initial: "2", shift: '"' },
      { initial: "3", shift: "№" },
      { initial: "4", shift: ";" },
      { initial: "5", shift: "%" },
      { initial: "6", shift: ":" },
      { initial: "7", shift: "?" },
      { initial: "8", shift: "*" },
      { initial: "9", shift: "(" },
      { initial: "0", shift: ")" },
      { initial: "-", shift: "_" },
      { initial: "=", shift: "+" },
      { initial: "←", action: "backspace" },
    ],
    [
      { initial: "Tab", action: "TAB" },
      { initial: "й" },
      { initial: "ц" },
      { initial: "у" },
      { initial: "к" },
      { initial: "е" },
      { initial: "н" },
      { initial: "г" },
      { initial: "ш" },
      { initial: "щ" },
      { initial: "з" },
      { initial: "х" },
      { initial: "ъ" },
      { initial: "\\", shift: "/" },
      { initial: "Del", action: "DELETE" },
    ],
    [
      { initial: "Caps Lk", action: "CAPS" },
      { initial: "ф" },
      { initial: "ы" },
      { initial: "в" },
      { initial: "а" },
      { initial: "п" },
      { initial: "р" },
      { initial: "о" },
      { initial: "л" },
      { initial: "д" },
      { initial: "ж" },
      { initial: "э" },
      { initial: "Enter", action: "ENTER" },
    ],
    [
      { initial: "Shift", action: "SHIFT" },
      { initial: "я" },
      { initial: "ч" },
      { initial: "с" },
      { initial: "м" },
      { initial: "и" },
      { initial: "т" },
      { initial: "ь" },
      { initial: "б" },
      { initial: "ю" },
      { initial: ".", shift: "," },
      { initial: "↑", action: "UP" },
      { initial: "Shift", action: "SHIFT" },
    ],
    [
      { initial: "Ctrl", action: "CTRL" },
      { initial: "Win", action: "WIN" },
      { initial: "Alt", action: "ALT" },
      { initial: "", action: "SPACE" },
      { initial: "Alt", action: "ALT" },
      { initial: "Ctrl", action: "CTRL" },
      { initial: "←", action: "LEFT" },
      { initial: "↓", action: "DOWN" },
      { initial: "→", action: "RIGHT" },
    ],
  ],
};
let lang = "en";

function textAreaRender() {
  const textArea = document.createElement("textarea");
  textArea.id = "textArea";
  document.body.prepend(textArea);
  textArea.rows = 2;
  textArea.cols = 50;
  return textArea;
}

function keyboardRender(state) {
  const keyboardDiv = document.createElement("div");
  keyboardDiv.id = "keyboard";
  document.body.append(keyboardDiv);
  keyboardLayout[lang].forEach((row) => {
    const rowElem = document.createElement("div");
    rowElem.classList.add("row");
    keyboardDiv.appendChild(rowElem);
    row.forEach((cell) => {
      const keyboardButton = document.createElement("button");
      keyboardButton.innerText = cell[state] || cell.initial;
      rowElem.appendChild(keyboardButton);
      if (cell.className) {
        keyboardButton.classList.add(cell.className);
      }
    });
  });
  return keyboardDiv;
}

function instructionRender() {
  const optionDiv = document.createElement("div");
  document.body.append(optionDiv);
  optionDiv.innerHTML = "Клавиатура создана в операц ионной системе Windows \n Для переключения языка комбинация: левыe shift + alt";
  return optionDiv;
}

function setupClickEvents(keyboardDiv, textArea) {
  keyboardDiv.addEventListener("click", (event) => {
    console.log("click", event);
    const cursorPosition = textArea.selectionStart;
    keyboardLayout[lang].forEach((row) => {
      row.forEach((cell) => {
        if (cell.initial === event.target.innerText) {
          textArea.value += cell.initial;
        }
      });
    });
  });
}

// let isShiftPressed = false;

// function addAnimation(keyboardDiv) {
//   keyboardDiv.addEventListener("mousedown", (e) => {
//     console.log("keydown", e.button);
//     const keyboardButton = e.button;
//     keyboardButton.classList.add('.active');
// })}


document.addEventListener("DOMContentLoaded", (event) => {
  const textArea = textAreaRender();
  const keyboardDiv = keyboardRender("initial");
  instructionRender();
  setupClickEvents(keyboardDiv, textArea);
  addAnimation(keyboardDiv);
});


// document.addEventListener("keydown", (event) => {
//   console.log("keydown", event.key);

//   let keyboardDiv = document.getElementById("keyboard");

//   if (event.key === "Shift") {
//     isShiftPressed = true;
//     keyboardDestroy();
//     keyboardDiv = keyboardRender("shift");
//   }

//   const textArea = document.getElementById("textArea");

//   // setupClickEvents(keyboardDiv, textArea, isShiftPressed);
// });

// document.addEventListener("keyup", (event) => {
//   console.log("keyup", event.key);

//   let keyboardDiv = document.getElementById("keyboard");

//   if (event.key === "Shift") {
//     isShiftPressed = false;
//     keyboardDestroy();
//     keyboardDiv = keyboardRender("initial");
//   }
//   const textArea = document.getElementById("textArea");

//   // setupClickEvents(keyboardDiv, textArea, isShiftPressed);
// });

const calcTextArea = (currTextAreaVal, cursorPosition, action, char) => {
  let bcurrTextAreaValArr = currTextAreaVal.split("");
    if(action) {
    if (action === 'del') { return  currTextAreaVal.slice(0,cursorPosition) + currTextAreaVal.slice(cursorPosition+1,currTextAreaVal.length) }
    if (action === 'back') {return  currTextAreaVal.slice(0,cursorPosition-1) + currTextAreaVal.slice(cursorPosition,currTextAreaVal.length)}
    if (action === 'space') { bcurrTextAreaValArr.splice(cursorPosition,0," "); return bcurrTextAreaValArr.join('')}
    else {bcurrTextAreaValArr.splice(cursorPosition,0,char); return bcurrTextAreaValArr.join('')}
    }
  }