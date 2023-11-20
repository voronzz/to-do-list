const listItems = document.querySelector('.list__input');
const listItemsNews = document.querySelector('.list__news');
const buttonClick = document.querySelector('.click');



function handleClick() {
    buttonClick.addEventListener('click', function () {
        const listItemsTextInput = listItems.value;

        const newListElement = document.createElement("input");
        newListElement.classList.add('ist__input-news');
        newListElement.value = listItemsTextInput;

        listItems.value = '';

        listItemsNews.append(newListElement);
    });
}

handleClick();