import {
    button, label,
    amal,
    opertor,
    equel,
    reset,
    oval,
    mode,
    body
} from "./ui.js";




let c = "0";
export function buttonFunc() {
    button.forEach((item) => {
        item.addEventListener("click", () => {
            label.focus()
            label.value += item.textContent.trim()
        });
    })
}


export function amalFunc() {
    amal.forEach((item) => {
        item.addEventListener("click", () => {

            if (item.textContent == "+" || item.textContent == "-" || item.textContent == "/" || item.textContent == "x" || item.textContent == ".") {
                let end = label.value[label.value.length - 1];
                if (end == "-" || end == "+" || end == "/" || end == "x" || end == ".") {
                    label.value = label.value.slice(0, label.value.length-1) + item.textContent;
                    return;
                }
            }
                            if (end  == ".") {
                    label.value += "." 
                    return;
                }
            label.value += item.textContent;
        })
    });

}

// opertor func

export function opertorFunc() {
    opertor.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.textContent === "=" && label.value) {
                c = label.value
                let g = c.replaceAll("x", "*")
                c = g
                label.value = eval(c)
            } else if (item.textContent === "RESET") {
                c = 0
                label.value = ''
            } else if (item.textContent === "DEL") {
                let b = label.value
                let m = b.slice(0, b.length - 1)
                label.value = m
            }
        })

    });
}


// key press
export function keyFunc() {
    document.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            equel.click()
        } else if (e.keyCode !== 13) {
            return;
        }

    })
}


// let j = 5

// let time = setInterval(() => {

//     if (j > 0) {
//         j--
//         console.log(j);
//     }
// }, 200);


// function tmef() {
    
// }


