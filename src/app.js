let element_text = document.querySelector("#new_element")
let element_btn  = document.querySelector("#add_element")
let elements_list = document.querySelector("#list")
let del_btns = document.querySelectorAll(".del_btn")
let i = 1

element_btn.addEventListener('click', () => {

elements_list.innerHTML = elements_list.innerHTML + `<hr id="hr_${i}"><div class="element" id="element_${i}"><div class="element_cont">${element_text.value}</div><div class="btn_container"><input type="button" value="Edit" class="edit_btn"><input type="button" value="Delete" class="del_btn ms-1" onclick="del_element('${i}')"></div>
  </div>`
  i++
})

function del_element(element) {
  const elmt = document.getElementById(`element_${element}`)
  if (elmt) {
    elmt.remove()
  }
  const hr= document.getElementById(`hr_${element}`)
  if (hr) {
    hr.remove()
  }
}
