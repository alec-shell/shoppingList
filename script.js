const input = document.querySelector("#item");
input.focus();
const submit = document.querySelector("#submit");
const list = document.querySelector("#list");

function addItem() {
    let item = input.value;
    input.value = "";
    input.focus();
    if (!item.length) {
        alert("PLEASE ENTER AN ITEM")
        exit();
    }
    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");
    button.textContent = "Delete";
    li.textContent = item;
    span.setAttribute("style", "display: flex; gap: 20px;");
    span.appendChild(li);
    span.appendChild(button);
    list.appendChild(span);
    button.addEventListener("click", () => span.remove());
}

    


submit.addEventListener("click", () => addItem());

