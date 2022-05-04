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
      { initial: "←", action: "backspace" },
    ],
    [
      { initial: "tab", action: "TAB" },
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
    ],
  ],
  ru: [],
};

document.addEventListener("DOMContentLoaded", function (event) {
  const keyboardDiv = document.createElement("div");
  keyboardDiv.id = "keyboard";
  document.body.prepend(keyboardDiv);
  keyboardLayout.en.forEach((row) => {
    let rowElem = document.createElement("div");
    rowElem.classList.add("row");
    keyboardDiv.appendChild(rowElem);
    row.forEach((cell) => {
      const keyboardButton = document.createElement("button");
      keyboardButton.innerText = cell.initial;
      rowElem.appendChild(keyboardButton);
    });
  });
});
