import css from "./index.css";
import input from './input.json';





const inputEl = document.getElementById("input")

for (const key in input) {
    const e = inputEl.appendChild(document.createElement("h1"))
    e.innerText = key
    for (const key2 in input[key]) {
        const parent = inputEl.appendChild(document.createElement("div"))

        const lbl = parent.appendChild(document.createElement("label"))
        lbl.innerText = key2
        parent.appendChild(document.createElement("br"))


        const div = parent.appendChild(document.createElement("div"))
        div.style = "display: flex"
        const value = input[key][key2]
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                const lbl = div.appendChild(document.createElement("label"))
                lbl.innerText = value[i]
                const inp = div.appendChild(document.createElement("input"))
                inp.type = "radio"
                inp.name = key2

            }
            
            parent.appendChild(document.createElement("br"))
       
        } else {
            const inp = parent.appendChild(document.createElement("input"))


            inp.type = "text"
            if (value == '99')
                inp.type = "number"
            else
                if (value == 'ja/nee') {
                    inp.type = "checkbox"
                    inp.value = true
                }
                else
                    inp.value = value
        }
    }
}
