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
                <span class="page-input">${listTextInput}</span>
                <input type="text" class="text-field__input field-input" placeholder="Ввод">
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

listItems.oninput = function () {
    this.value = this.value.substring(0, 20);
}

function removeButton(e) {
    const listItem = e.target.closest('.list__page-note');
    listItem.remove();
}
function changeButton(e) {
    const filed = document.querySelector('.field-input');
    const input = document.querySelector('.page-input');
    filed.classList.add('active');
    input.classList.add('no-active');
    console.log('оно живое');
}
function addRemoveListeners() {
    const removeBtns = document.querySelectorAll('.remove-btn');
    const changeBtns = document.querySelectorAll('.change-btn');

    removeBtns.forEach((button) => {
        button.addEventListener('click', removeButton);
    });

    changeBtns.forEach((button) => {
        button.addEventListener('click',changeButton );
    })
}

buttonClick.addEventListener('click', () => {
    handleClick();
    addRemoveListeners();
});



