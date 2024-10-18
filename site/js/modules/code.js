import { copy } from "clipboard";

class CodeBlock {
  constructor() {
    window.addEventListener("load", () => {
      this.init();
    });
  }

  init() {
    const codes = document.querySelectorAll(".code");

    codes.forEach((code) => {
      const codeTitle = code.querySelector(".code-title");
      const codeText = code.querySelector("code").innerText;
      const codeBody = code.querySelector(".code-body");
      const copyBtn = document.createElement("button");

      copyBtn.setAttribute("type", "button");
      copyBtn.setAttribute("copy-code", "");
      copyBtn.setAttribute(
        "class",
        "btn btn-xs btn-icon btn-grey-500 btn-colored btn-dimmed rounded p-1"
      );

      copyBtn.innerHTML = `<i class="cl-icon-copy"></i>`;

      if (codeTitle) {
        codeTitle.appendChild(copyBtn);
      }

      copyBtn.addEventListener("click", () => {
        navigator.clipboard

          .writeText(codeText)

          .then(() => {
            code.classList.add("copied");

            setTimeout(() => {
              code.classList.remove("copied");
            }, 2000);
          })

          .catch((err) => {
            console.error("Ошибка копирования: ", err);
          });
      });
    });
  }
}

new CodeBlock();
