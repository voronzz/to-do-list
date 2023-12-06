// Получаем элементы списка
const listItems = document.querySelector('.text-field__input');
const listItemsNews = document.querySelector('.lists__note');
const buttonClick = document.querySelector('.list__btn');

// Функция для обработки клика на кнопке
function handleClick() {
    // Если значение input пустое, то ничего не делаем
    if(listItems.value.length === 0) {
        return
    }

    // Получаем значение из input
    const listTextInput = listItems.value;

    // Вставляем новый элемент списка
    listItemsNews.insertAdjacentHTML(
        "afterbegin",
        `<li class="list__page-note">
                <span class="list__note-value">${listTextInput}</span>
                <div class="list__note-container">
                    <input type="text" class="text-field__input list__note-text" placeholder="Ввод">
                    <span class="material-symbols-outlined verified">verified</span>
                </div>
              <span>
                <span class="material-symbols-outlined change-btn" data-typr="edit">
                    done
                </span>
                <span class="material-symbols-outlined remove-btn" data-type="remove">
                close
                </span>
             </span>
            </li>`
    )

    listItems.value = '';

    window.removeEventListener('click', handleClick);
}
//Ограничение на ввоод 20 символов в строке
listItems.oninput = function () {
    this.value = this.value.substring(0, 20);
}

function removeButton(e) {
    const listItem = e.target.closest('.list__page-note');
    listItem.remove();
}
function changeButton(e) {
    const changeField = document.querySelector('.list__note-container');
    const input = document.querySelector('.list__note-value');

        changeField.classList.add('active');
        input.classList.add('no-active');
}
function fieldButton() {
    const changeField = document.querySelector('.list__note-container');
    const input = document.querySelector('.list__note-value');
    const textFieldInput = document.querySelector('.list__note-text');

    if(textFieldInput.value.length === 0) {
        return
    }

    const textValueField = textFieldInput.value;

    changeField.classList.remove('active');
    input.classList.remove('no-active');


    input.textContent = textValueField;
}

function addRemoveListeners() {
    const removeBtns = document.querySelectorAll('.remove-btn');
    const changeBtns = document.querySelectorAll('.change-btn');
    const buttonVerified = document.querySelector('.verified');

    removeBtns.forEach((button) => {
        button.addEventListener('click', removeButton);
    });

    changeBtns.forEach((button) => {
        button.addEventListener('click',changeButton );
    });

    buttonVerified.addEventListener('click', fieldButton);
}

buttonClick.addEventListener('click', () => {
    handleClick();
    addRemoveListeners();
    // changeButton();
    // fieldButton();
});



