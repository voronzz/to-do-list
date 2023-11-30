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
                <span>${listTextInput}</span>
<!--                <input type="text">-->
              <span>
                <span class="material-symbols-outlined done" data-typr="edit">
                    done
                </span>
                <span class="material-symbols-outlined remove" data-type="remove">
                close
                </span>
             </span>
            </li>`
    )

    listItems.value = '';

    window.removeEventListener('click', handleClick);
}

    // const removeBtns = document.querySelectorAll('.remove');
    //
    // buttonClick.addEventListener('click', handleClick);
    //
    // removeBtns.forEach((button) => {
    // button.addEventListener('click', removeButton);
    // });
    // function removeButton() {
    //     const listItem = document.querySelector('.list__page-note');
    //
    //     listItem.remove();
    // }

function removeButton(e) {
    const listItem = e.target.closest('.list__page-note');
    listItem.remove();
}

function addRemoveListeners() {
    const removeBtns = document.querySelectorAll('.remove');
    removeBtns.forEach((button) => {
        button.addEventListener('click', removeButton);
    });
}

buttonClick.addEventListener('click', () => {
    handleClick();
    addRemoveListeners();
});



