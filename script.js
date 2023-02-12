const input_text = document.getElementById("input_text");
const text_list = document.getElementById("text_list");

buttonClick = (text) => {
  if (text != ""){
    const list_item = document.createElement("li");
    const show_text = text_list.appendChild(list_item);
    show_text.innerHTML = text;
  }
}



const add_button = document.getElementById("add_button");

add_button.addEventListener('click', evt => {
  evt.preventDefault();
  const text = input_text.value;
  buttonClick(text);
})
