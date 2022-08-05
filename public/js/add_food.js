function getSelectValue() {
    var selectedValue = document.querySelector(".select").value;
    let type = document.querySelector(".type");
    type.value = selectedValue
}
getSelectValue();

const list = document.querySelector('#ol-list');
list.addEventListener("click", (evt) => {
    let res_id;
    evt.target.dataset.id ? res_id = evt.target.dataset.id : '';
    console.log(res_id);
    fetch("http://localhost:8080/deletefood", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ res_id }),
    })

    alert('food deleted! Refresh the page to see changes')
});