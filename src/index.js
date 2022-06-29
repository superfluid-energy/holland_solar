
import css from "./index.css";
import input from './input.json';

const inputDiv = document.getElementById("input")

for (const key in input) {
    const e = inputDiv.appendChild(document.createElement("h3"))
    e.innerText = key
    for (const key2 in input[key]) {
        const parent = inputDiv.appendChild(document.createElement("div"))
        parent.classList.add("inputBox")
        const lbl = parent.appendChild(document.createElement("label"))
        lbl.innerText = key2
        const value = input[key][key2]
        if (Array.isArray(value)) {
            const div = parent.appendChild(document.createElement("div"))
            div.classList.add("checkbox_div")

            for (let i = 0; i < value.length; i++) {
                const lbl = div.appendChild(document.createElement("label"))
                lbl.innerText = value[i]
                const inp = div.appendChild(document.createElement("input"))
                inp.type = "radio"
                inp.name = key2

            }
        }
        else
            
                if (value == 'ja/nee') {
                    const lbl = parent.appendChild(document.createElement("label"))
                    const checkbox = lbl.appendChild(document.createElement("input"))
                    checkbox.type = "checkbox"
                }
                else {
                    const inp = parent.appendChild(document.createElement("input"))
                    if (value == '99') {
                         inp.type = "number"
                    } else
                    if (value.startsWith('xx')) {
                         inp.type = "number"
                        const unit = parent.appendChild(document.createElement("span"))
                        unit.innerText = value.substr(3)
                        unit.style = "padding-top: 1.2vw"

                    }
                    else {
                      
                        inp.type = "text"
                        inp.value = value
                    }
                }
        /*   
 
 
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
}*/

    }
}