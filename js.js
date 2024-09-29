// let container = document.querySelector(".container"); // пустое поле
// let gridButton = document.getElementById("submit-grid");// кнопка Create Grid
// let clearGridButton = document.getElementById("clear-grid"); // кнопка Clear Grid
// let gridWidth = document.getElementById("width-range");
// let gridHeight = document.getElementById("height-range");
// let colorButton = document.getElementById("color-input");
// let eraseBtn = document.getElementById("erase-btn");
// let paintBtn = document.getElementById("paint-btn");
// let widthValue = document.getElementById("width-value");
// let heightValue = document.getElementById("height-value");

// let events = {
//     mouse: {
//         down: "mousedown",
//         move: "mousemove",
//         up: "mouseup"
//     },
//     touch: {
//         down: "touchstart",
//         mobe: "touchmove",
//         up: "touchend",
//     },
// };

// let deviceType = "";

// let draw = false;
// let erase = false;

// const isTouchDevice = () => {
//     try {
//         document.createEvent("TouchEvent");
//         deviceType = "touch";
//         return true;
//     } catch (e) {
//         deviceType = "mouse";
//         return false;
//     }
// };

// isTouchDevice();

// gridButton.addEventListener("click", () => {
//     container.innerHTML = "";
//     let count = 0;
//     for (let i = 0; i < gridHeight.value; i++) {
//         count += 2;
//         let div = document.createElement("div");
//         div.classList.add("gridRow");

//         for (let j = 0; j < gridWidth.value; j++) {
//             count += 2;
//             let col = document.createElement("div");
//             col.classList.add("gridCol");

//             col.setAttribute("id", `gridCol${count}`);
//             col.addEventListener(events[deviceType].down, () => {
//                 draw = true;
//                 if (erase) {
//                     col.style.backgroundColor = "transparent";
//                 } else {
//                     col.style.backgroundColor = colorButton.value;
//                 }
//             });

//             col.addEventListener(events[deviceType].move, (e) => {
//                 let elementId = document.elementFromPoint(
//                     !isTouchDevice() ? e.clientX : e.touches[0].clientX,
//                     !isTouchDevice() ? e.clientY : e.touches[0].clientY,
//                 ).id;
//                 checker(elementId);
//             });

//             col.addEventListener(events[deviceType].up, () => {
//                 draw = false;
//             });

//             div.appendChild(col);

//         }

//         container.appendChild(div);

//     }
// });

// function checker(elementId) {
//     let gridColumns = document.querySelectorAll(".gridCol");
//     gridColumns.forEach((element) => {
//         if (elementId == element.id) {
//             if (draw && !erase) {
//                 element.style.backgroundColor = colorButton.value;
//             } else if (draw && erase) {
//                 element.style.backgroundColor = "transparent";
//             }
//         }
//     });
// }

// clearGridButton.addEventListener("click", () => {
//     container.innerHTML = "";
// });

// eraseBtn.addEventListener("click", () => {
//     erase = true;
// });

// paintBtn.addEventListener("click", () => {
//     erase = false;
// });

// gridWidth.addEventListener("input", () => {
//     widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
// });

// gridHeight.addEventListener("input", () => {
//     heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
// });

// window.onload = () => {
//     gridHeight.value = 0;
//     gridWidth.value = 0;
// };

// const CreateGrid = document.querySelector('.Create-Grid');
// const ClearGrid = document.querySelector('.Clear-Grid');
// const Erase = document.querySelector('.Erase');
// const Paint = document.querySelector('.Paint');

let btCreateGrid = document.querySelector('.CreateGrid');
let btClearGrid = document.querySelector('.ClearGrid');
let btErase = document.querySelector('.Erase');
let btPaint = document.querySelector('.Paint');

let conteiner = document.querySelector('.conteiner');

let widthRange = document.getElementById('width-range');
let heightRange = document.getElementById('height-range');

let counterWidth = document.querySelector(".counterWidth")
let counterHeight = document.querySelector(".counterHeight")

let color = document.getElementById('color');



let listMous = {
    down: 'mousedown',
    move: 'mousemove',
    up: 'mouseup'
}

let draw = false;
let erase = false;

widthRange.value = 0;
heightRange.value = 0;

btCreateGrid.addEventListener('click', () => {
    conteiner.innerHTML = '';

    let count = 0;
    for (let i = 0; i < widthRange.value; i++) {
        count += 2;
        let row = document.createElement('div');
        row.classList.add('row');


        for (let j = 0; j < heightRange.value; j++) {
            count += 2;

            let col = document.createElement('div');
            col.classList.add('col');
            col.setAttribute('id', `col-${count}`);

            col.addEventListener(listMous.down, () => {
                draw = true;

                if (!erase) {
                    col.style.backgroundColor = color.value;
                }
                else {
                    col.style.backgroundColor = 'transparent';
                }
            })

            col.addEventListener(listMous.move, (e) => {
                // let data = {
                //     data1: e.clientX,
                //     data2: e.clientY,
                // }
                if (draw) {
                    let elementId = document.elementFromPoint(
                        e.clientX,
                        e.clientY,
                    ).id;
                    checker(elementId);
                }

            })

            col.addEventListener(listMous.up, () => {
                draw = false;

            })

            row.append(col);
        }

        conteiner.append(row);
    }
})

function checker(elementId) {

    let arrCol = document.querySelectorAll('.col');

    arrCol.forEach(element => {
        if (!erase && element.id === elementId) {
            element.style.backgroundColor = color.value;
        }
        else if(erase && element.id === elementId) {
            element.style.backgroundColor = 'transparent';
        }
    })
}

btErase.addEventListener('click', () => {
    erase = true;
})

btPaint.addEventListener('click', () => {
    erase = false;
})

btClearGrid.addEventListener('click', () => {
    conteiner.innerHTML = "";
})

heightRange.addEventListener('input', () => {
    counterHeight.innerHTML = heightRange.value;
})

widthRange.addEventListener('input', () => {
    counterWidth.innerHTML = widthRange.value;
})