const listItems = document.querySelector('.list__input');
const listItemsNews = document.querySelector('.list__note-pages');
const buttonClick = document.querySelector('.list__btn');



function handleClick() {


    if(listItems.value.length === 0) {
        return
    }

    const listItemsTextInput = listItems.value;

    listItemsNews.insertAdjacentHTML("beforebegin", `
             <li class="list__page-note">
             <span>${listItemsTextInput}</span>
             <span>
            <span class="material-symbols-outlined done">
                    done
            </span>
            <span class="material-symbols-outlined closes">
                close
            </span>
            </span>
            </li>
            `)

    listItems.value = '';

    const removeBtns = document.querySelectorAll('.closes');

    removeBtns.forEach(button => {
        button.addEventListener('click', function (eventTarget) {
             const removeItemList = document.querySelector('.list__page-note');

             removeItemList.remove(eventTarget.currentTarget);
        })
    })
}

buttonClick.addEventListener('click', handleClick);

//buttonClick.removeEventListener('click', handleClick);
//handleClick();
