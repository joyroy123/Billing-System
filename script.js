let items = [];
function addItems(){
    let itemName = document.getElementById('item-name').value;
    let itemPrice = document.getElementById('item-price').value;
    let itemQuantity = document.getElementById('item-quantity').value;

    if(itemName && itemQuantity && itemPrice){
        items.push(
            {
            name:itemName,
            price:parseInt(itemPrice),
            quantity:itemQuantity
            }
        )
        console.log(items);
        showItems();
        calculatingTotalPrice();
        clearItem();
    }
}

function showItems(){
    const tbody = document.querySelector('#billing-table tbody');
    tbody.innerHTML="";
    items.forEach(item => {
        const tr = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.innerText = item.name;

        const quantityTd = document.createElement('td');
        quantityTd.innerText = item.quantity;

        const priceTd = document.createElement('td');
        priceTd.innerText = item.price;

        tr.appendChild(nameTd);
        tr.appendChild(quantityTd);
        tr.appendChild(priceTd);
        tbody.appendChild(tr);
    })
}

function calculatingTotalPrice(){
    let totalPrice = 0;
    for(let i=0;i<items.length;i++){
        const item = items[i];
        totalPrice += item.price * item.quantity;
        console.log(totalPrice);
    }
    document.getElementById('total-price').innerText= 'Billing Amount:' + '$' + totalPrice +  '.00';
}

function clearItem(){
    document.getElementById('item-name').value="";
    document.getElementById('item-price').value="";
    document.getElementById('item-quantity').value="";
}