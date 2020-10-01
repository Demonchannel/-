let htmlElements;
let divs = [];
let spb = document.querySelector("div.hello-world");
let buttons = document.querySelectorAll("button.delete-button");
let itemsArray = [{
        color: "white",
        bgColor: "blue",
    },
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

    render1();
}

init();

function render() {
    let element = document.querySelector(".items");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let inp = document.querySelector("input.bg-color-input").value;
    const button = document.createElement("button");
    div.appendChild(span);
    div.classList.add("item");
    span.setAttribute("class", "item-text");
    div.setAttribute("background-color", inp);
    div.appendChild(button);
    button.innerText = "X";
    button.classList.add("delete-button");
    div.style.backgroundColor = document.querySelector(
        "input.bg-color-input"
    ).value;
    span.innerText = document.querySelector("input.text-color-input").value;
    span.style.color = document.querySelector("input.text-color-input").value;
    console.log(element);
    element.appendChild(div);
    console.log(divs);
    div.addEventListener("click", foo1, true);

    function foo1() {
        document.body.style.backgroundColor = div.style.backgroundColor;
        spb.style.color = span.style.color;
    }
    divs.push(div);
}

function render1() {
    let element = document.querySelector(".items");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let inp = document.querySelector("input.bg-color-input").value;
    const button = document.createElement("button");
    div.appendChild(span);
    div.classList.add("item");
    span.setAttribute("class", "item-text");
    div.setAttribute("background-color", inp);
    div.appendChild(button);
    button.innerText = "X";
    button.classList.add("delete-button");
    div.style.backgroundColor = "blue";
    span.innerText = "white";
    span.style.color = "white";
    element.appendChild(div);
    divs.push(div);
    render2();
    div.addEventListener("click", foo1, true);

    function foo1() {
        document.body.style.backgroundColor = div.style.backgroundColor;
        spb.style.color = span.style.color;
    }
}

function render2() {
    let element = document.querySelector(".items");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let inp = document.querySelector("input.bg-color-input").value;
    const button = document.createElement("button");
    div.appendChild(span);
    div.classList.add("item");
    span.setAttribute("class", "item-text");
    div.setAttribute("background-color", inp);
    div.appendChild(button);
    button.innerText = "X";
    button.classList.add("delete-button");
    div.style.backgroundColor = "yellow";
    span.innerText = "black";
    span.style.color = "black";
    console.log(element);
    element.appendChild(div);
    divs.push(div);
    render3();
    div.addEventListener("click", foo1, true);

    function foo1() {
        document.body.style.backgroundColor = div.style.backgroundColor;
        spb.style.color = span.style.color;
    }
}

function render3() {
    let element = document.querySelector(".items");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let inp = document.querySelector("input.bg-color-input").value;
    const button = document.createElement("button");
    div.appendChild(span);
    div.classList.add("item");
    span.setAttribute("class", "item-text");
    div.setAttribute("background-color", inp);
    div.appendChild(button);
    button.innerText = "X";
    button.classList.add("delete-button");
    div.style.backgroundColor = "whitesmoke";
    span.innerText = "green";
    span.style.color = "green";
    element.appendChild(div);
    div.addEventListener("click", foo1, true);

    function foo1() {
        document.body.style.backgroundColor = div.style.backgroundColor;
        spb.style.color = span.style.color;
    }
    divs.push(div);
}

// < div class = "
// item " > <
// div class = "item"
// style = "background-color: blue;" >
//     <
//     span class = "item-text"
// style = "color: white;" >
//     white <
//     /span> <
// button class = "delete-button" > X < /button> < /
// div > <
//     div class = "item"
// style = "background-color: yellow;" >
//     <
//     span class = "item-text"
// style = "color: black;" >
//     black <
//     /span> <
// button class = "delete-button" > X < /button> < /
// div > <
//     /div>" ;

// document.querySelector(".item").addEventListener("click", function(event) {
//             if (event.target.ClassName == "delete-button") {
//                 event.target.closest("#div").remove();
//             }
//         }

function deleteElementsClicked() {
    let buttons = document.querySelectorAll("button.delete-button");
    let index = Array.from(buttons).indexOf(this);
    items.splice(index, 1);
}

// function deletediv(event) {
//     if (event.target.ClassName == "delete-button") {
//         event.target.closest("#div").remove();
//     }
// }
buttons.onclick = function(event) {
    if (event.target.ClassName == "delete-button") {
        let index = Array.from(buttons).indexOf(this);
        items.splice(index, 1);
    }
};