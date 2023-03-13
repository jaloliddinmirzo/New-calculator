import {
    button, label,
    amal,
    opertor,
    del,
    reset,
    equel,
    form,
    nuqta
} from "./ui.js";
// import { buttonFunc } from "./logic.js";
let oper;
let c;
let a = label.value;
let m = false;




button.forEach((item) => {
    item.addEventListener("click", () => {
        label.focus()
        label.value += item.textContent

    });
})
amal.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.textContent == "/") {
            label.value += item.textContent
            oper = "/"
        } else if (item.textContent == "+") {
            label.value += item.textContent
            oper = "+"
        } else if (item.textContent == "-") {
            label.value += item.textContent
            oper = "-"
        } else if (item.textContent == "x") {
            label.value += "*"
            oper = "x"
        } else if (item.textContent == ".") {
            // label.value += item.textContent
            // oper = "."
        }

    })
});
opertor.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.textContent === "=") {

            c = label.value
            label.value = eval(c)

        }
        if (item.textContent === "=") {

            c = label.value
            label.value = eval(c)

        }
    })

});

nuqta.addEventListener("click", () => {
    if (!a.includes(".")) {
        label.value += "."
        if (a.includes(".")) {
            label.value += "."
        }
    }
})
