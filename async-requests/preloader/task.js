const items = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        let respOject = JSON.parse(xhr.responseText);
        let currencyList = respOject.response.Valute;
        
        for (key in currencyList) {
            loader.classList.remove('loader_active');

            let item = document.createElement('div');
            let itemCode = document.createElement('div');
            let itemValue = document.createElement('div');
            let itemCurrency = document.createElement('div');

            item.classList.add('item');
            itemCode.classList.add('item__code');
            itemValue.classList.add('item__value');
            itemCurrency.classList.add('item__currency');

            items.append(item);
            item.append(itemCode);
            item.append(itemValue);
            item.append(itemCurrency);

            itemCode.textContent = currencyList[key].CharCode;
            itemValue.textContent = currencyList[key].Value;
            itemCurrency.textContent = 'руб.';

        }


    }
}