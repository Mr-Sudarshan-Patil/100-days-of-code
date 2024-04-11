let input = document.querySelector("input");
let btn = document.querySelector("#btn1");
let ul = document.querySelector(".ul");
let btn2 = document.querySelector("#btn2");

btn.addEventListener('click', function() {
    console.log("Clicked!");
    console.log(input.value);

    if (input.value.trim() !== "") {
        let item = document.createElement('li');
        item.innerText = input.value;

        let btn2 = document.createElement("button"); 
        btn2.innerHTML = '<i for="btn3" class="fa-solid fa-trash"></i>';
        btn2.classList.add('btn3');

        let div3 = document.createElement('div');
        div3.classList.add('div3');

        ul.appendChild(div3);
        div3.appendChild(item);
        div3.appendChild(btn2);
    }

    input.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
