let htmlElements;
let div = document.getElementById("item");
div.addEventListener("click", foo, false);

function foo() {
    let a = document.querySelector("input.bg-color-input").value;
    document.body.style.backgroundColor = a;
    let b = document.querySelector(".text-color-input").value;
    document.getElementById("hello-world").style.color = b;
}
let itemsArray = [
    { color: "white", bgColor: "blue" },
    {
        color: "black",
        bgColor: "yellow",
    },
    {
        color: "green",
        bgColor: "whitesmoke",
    },
];

function init() {
    htmlElements = {
        bgColorInput: document.querySelector("input.bg-color-input"),
        textColorInput: document.querySelector("input.text-color-input"),
        addButton: document.querySelector("button.add-button"),
        items: document.querySelector("div.items"),
    };

    render();
}

init();

function render() {
    let element = document.querySelector(".items");
    // let elements = document.querySelectorAll(".items");
    // elements.forEach()
    let div = document.createElement("div");
    let span = document.createElement("span");
    let button = document.createElement("button");
    div.appendChild(span);
    div.classList.add("item");
    div.setAttribute("style", "background-color: blue");

    span.setAttribute("class", "item-text");
    span.innerText = htmlElements.textColorInput.value;
    span.setAttribute("style", "color:textColorInput.value");
    div.appendChild(button);
    button.classList.add("delete-button");
    console.log(element);
    element.appendChild(div);
    button.innerText = "X";
    // let br = document.createElement("br");

    // console.log(element);
    // const papa = "div.items";
    // link.innerHTML = papa;

    // element.appendChild(br);
    // element.appendChild(link);
}
// <div class="item">
//   <div class="item" style="background-color: blue;">
//     <span class="item-text" style="color: white;">
//       white
//     </span>
//     <button class="delete-button">X</button>
//   </div>
//   <div class="item" style="background-color: yellow;">
//     <span class="item-text" style="color: black;">
//       black
//     </span>
//     <button class="delete-button">X</button>
//   </div>
// </div>

// document.querySelector(".item").addEventListener("click", function(event) {
//             if (event.target.ClassName == "delete-button") {
//                 event.target.closest("#div").remove();
//             } не работает!!!

function deleteElementsClicked() {
    let buttons = document.querySelectorAll("button.delete-button");
    let index = Array.from(buttons).indexOf(this);
    items.splice(index, 1);
}