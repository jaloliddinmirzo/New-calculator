import { mode, oval } from "./ui.js";
let modeIndex = 0;
let list = ['alfa', "modeTwo", "modeThree"]
let trans = ['transOne', "transTwo", "transThree"]
// dark mode
export function darkFunc() {
    mode.addEventListener("click", () => {
        document.body.classList.remove(`${list[modeIndex]}`)
        oval.classList.remove(`${trans[modeIndex]}`)
        modeIndex++
        modeIndex = modeIndex > 2 ? 0 : modeIndex;
        document.body.classList.add(`${list[modeIndex]}`)
        oval.classList.add(`${trans[modeIndex]}`)
        console.log(trans[modeIndex]);
    })
}
