let element_text = document.querySelector("#new_element")
let element_btn  = document.querySelector("#add_element")
let elements_list = document.querySelector("#list")
let i = 1

element_btn.addEventListener('click', () => {
  elements_list.innerHTML = elements_list.innerHTML + `<div class="element element_${i}"><div class="element_cont">${element_text.value}</div><input type="button" value="Delete" class="element_${i}"></div>`
})
