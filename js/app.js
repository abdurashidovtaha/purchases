const rootEl = document.getElementById('root');

rootEl.innerHTML = `
<form data-id="add-data">
    <label for="price-input">Введите сумму</label>
    <input id="price-input" data-id="price" placeholder="Сумма" type="number">
    <label for="category-input">Введите категорию</label>
    <input id="category-input" data-id="category" placeholder="Категория"1gi>
    <button data-action="add">Добавить</button>
</form>
<div data-id="show-sum">
    <br> 
    <b><label for="total-sum">Общяя сумма:</label></b>
    <span id="total-sum" data-id="sum">0</span>
</div>
`;

let totalSum = 0;

const formEl = rootEl.querySelector('[data-id=add-data');

const showSumEl = rootEl.querySelector('[data-id=show-sum]')

const sumEl = showSumEl.querySelector('[data-id=sum]');

const priceEl = formEl.querySelector('[data-id=price]');

const addInputCategoryEl = formEl.querySelector('[data-id=category]');

const buttonEl = formEl.querySelector('[data-action=add]');

buttonEl.onclick = evt => {
    evt.preventDefault();
    console.log(totalSum);
    const value = priceEl.value;
    totalSum += parseInt(value, 10);
    sumEl.textContent = `${totalSum}`;

    priceEl.value = 'Сумма';
    addInputCategoryEl.value = 'Категория';
}


