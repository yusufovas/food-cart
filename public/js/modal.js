const name_inp = document.querySelector('.name_inp')
const contact_inp = document.querySelector('.contact_inp')
const adress_inp = document.querySelector('.adress_inp')
const count_inp = document.querySelector('.count_inp')
const form = document.querySelector('.form')

const title = document.querySelector('#title')
const value = document.cookie.split('=')[1]
const new_value = value.split(';')[0]
// console.log(new_value);
if (new_value === 'milliy') {
    title.innerHTML = 'Milliy food menu'
}

if (new_value === 'fastfood') {
    title.innerHTML = 'fast food menu'
}

const list = document.querySelector("#ol-list");
list.addEventListener("click", (evt) => {
    const p = document.createElement("p");
    const image = document.createElement("img");
    const img = evt.target.dataset.img
    image.setAttribute('src', img)
    image.style.width = '50px'
    image.style.height = '50px'
    evt.target.dataset.id ? (p.innerHTML = evt.target.dataset.id) : "";
    const modalContent = document.querySelector(".modal-content");
    const food_name = document.querySelector(".food_name");
    alert('added to cart')
    const del = document.createElement('button')
    del.innerHTML = 'delete'
    del.addEventListener('click', evt => {
        modalContent.removeChild(p)
        modalContent.removeChild(image)
        food_name.setAttribute("value", '');
    })
    p.append(del)
    modalContent.append(image)
    modalContent.append(p);

    form.addEventListener('submit', evt => {
        let data = {
            name: name_inp.value,
            contact: contact_inp.value,
            adress: adress_inp.value,
            food: p.innerHTML.split(' ')[0],
            count: count_inp.value
        };
        
        fetch("http://localhost:8080/orders", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => {
            res.json()
        }).then(data => {
            console.log(data);
        })
    
    })
});



var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};