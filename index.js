//import { foodItem } from './fooditem.js';

//console.log(foodItem);



function displayItems() {
  var biryani = document.getElementById('biryani');
  var chinese = document.getElementById('chinese');
  var southindian = document.getElementById('southindian');
  var vegetables = document.getElementById('vegetables');

  // const biryaniData = foodItem.filter(item => item.category == 'biryani');
  //console.log(biryaniData);

  //const chineseData = foodItem.filter(item => item.category == 'chinese');
  //console.log(chineseData)

  //const southindianData = foodItem.filter(item => item.category == 'southindian');
  // console.log(southindianData)

  // const vegetablesData = foodItem.filter(item => item.category == 'vegetables');
  //console.log(vegetablesData)

  //biryaniData.map(item => {
  var itemCard = document.createElement('div');
  itemCard.setAttribute('id', 'item-card');

  var cardTop = document.createElement('div')
  cardTop.setAttribute('id', 'card-top')

  var star = document.createElement('i');
  star.setAttribute('class', 'fa fa-star');
  star.setAttribute('id', 'rating');
  //   star.innerText = ' ' + item.rating;

  var heart = document.createElement('i');
  heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
  //  heart.setAttribute('id', item.id)

  cardTop.appendChild(star);
  cardTop.appendChild(heart);

  var img = document.createElement('img')
  //  img.src = item.img;

  var itemName = document.createElement('p');
  itemName.setAttribute('id', 'item-name');
  //  itemName.innerText = itemName.name;
  //  itemName.innerText = foodItem.find(element => element.name == 'Hyderabadi Biryani').name;

  var itemPrice = document.createElement('p');
  itemPrice.setAttribute('id', 'item-price');
  //itemPrice.innerText = 'Price : Rs. ' + item.price;

  itemCard.appendChild(cardTop);
  itemCard.appendChild(img);
  itemCard.appendChild(itemName);
  itemCard.appendChild(itemPrice);

  biryani.appendChild(itemCard);
  //document.getElementById(biryani).innerHTML = itemCard;

  // })




  //chineseData.map(item => {
  var itemCard = document.createElement('div');
  itemCard.setAttribute('id', 'item-card');

  var cardTop = document.createElement('div');
  cardTop.setAttribute('id', 'card-top');

  var star = document.createElement('i');
  star.setAttribute('class', 'fa fa-star');
  star.setAttribute('id', 'rating');
  //   star.innerText = ' ' + item.rating;

  var heart = document.createElement('i');
  heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
  // heart.setAttribute('id', item.id);

  cardTop.appendChild(star);
  cardTop.appendChild(heart);

  var img = document.createElement('img');
  // img.src = item.img;

  var itemName = document.createElement('p');
  itemName.setAttribute('id', 'item-name');
  itemName.innerText = itemName.name;

  var itemPrice = document.createElement('p');
  itemPrice.setAttribute('id', 'item-price');
  // itemPrice.innerText = 'Price : Rs. ' + item.price;

  itemCard.appendChild(cardTop);
  itemCard.appendChild(img);
  itemCard.appendChild(itemName);
  itemCard.appendChild(itemPrice);

  chinese.appendChild(itemCard);
  //document.getElementById(chinese).innerHTML = itemCard;
  // })



  // southindianData.map(item => {
  var itemCard = document.createElement('div');
  itemCard.setAttribute('id', 'item-card');

  var cardTop = document.createElement('div');
  cardTop.setAttribute('id', 'card-top');

  var star = document.createElement('i');
  star.setAttribute('class', 'fa fa-star');
  star.setAttribute('id', 'rating');
  //   star.innerText = ' ' + item.rating;

  var heart = document.createElement('i');
  heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
  //  heart.setAttribute('id', item.id);

  cardTop.appendChild(star);
  cardTop.appendChild(heart);

  var img = document.createElement('img');
  //img.src = item.img;

  var itemName = document.createElement('p');
  itemName.setAttribute('id', 'item-name');
  itemName.innerText = itemName.name;

  var itemPrice = document.createElement('p');
  itemPrice.setAttribute('id', 'item-price');
  // itemPrice.innerText = 'Price : Rs. ' + item.price;

  itemCard.appendChild(cardTop);
  itemCard.appendChild(img);
  itemCard.appendChild(itemName);
  itemCard.appendChild(itemPrice);

  southindian.appendChild(itemCard);
  // document.getElementById(southindian).innerHTML = itemCard;


  // })


  //  vegetablesData.map(item => {
  var itemCard = document.createElement('div');
  itemCard.setAttribute('id', 'item-card');

  var cardTop = document.createElement('div');
  cardTop.setAttribute('id', 'card-top');

  var star = document.createElement('i');
  star.setAttribute('class', 'fa fa-star');
  star.setAttribute('id', 'rating');
  // star.innerText = ' ' + item.rating;

  var heart = document.createElement('i');
  heart.setAttribute('class', 'fa fa-heart-o add-to-cart');
  //heart.setAttribute('id', item.id);

  cardTop.appendChild(star);
  cardTop.appendChild(heart);

  var img = document.createElement('img');
  //img.src = item.img;

  var itemName = document.createElement('p');
  itemName.setAttribute('id', 'item-name');
  itemName.innerText = itemName.name;

  var itemPrice = document.createElement('p');
  itemPrice.setAttribute('id', 'item-price');
  // itemPrice.innerText = 'Price : Rs. ' + item.price;

  itemCard.appendChild(cardTop);
  itemCard.appendChild(img);
  itemCard.appendChild(itemName);
  itemCard.appendChild(itemPrice);

  vegetables.appendChild(itemCard);
  //document.getElementById(vegetables).innerHTML = itemCard;

  //})
}

displayItems();


//const categoryListData = [...new Map(foodItem.map(item => [item['category'], item])).values()];
//console.log(categoryListData);

function categoryLists() {
  var categoryList = document.getElementById('category-list');

  // categoryListData.map(item => {
  var listCard = document.createElement('div');
  listCard.setAttribute('class', 'list-card');

  var listImg = document.createElement('img');
  //  listImg.src = item.img;

  var listName = document.createElement('a');
  listName.setAttribute('class', 'list-name');
  //  listName.innerText = item.category;
  //   listName.setAttribute('href', '#' + item.category);

  listCard.appendChild(listImg);
  listCard.appendChild(listName);

  var cloneListCard = listCard.cloneNode(true);
  categoryList.appendChild(listCard);
  //  })
}

categoryLists();

document.querySelectorAll('.add-to-cart').forEach(item => { item.addEventListener('click', addToCart) });


var cartData = [];

function addToCart() {
  //var itemToAdd =this.

  //console.log(this.id);
  //console.log(foodItem);
  var itemToAdd = this.id.split('-')[1];
  //alert(document.getElementById("name-" + itemToAdd).innerText);
   // alert(document.getElementById("price-" + itemToAdd).innerText);
    
    cartData.push(itemToAdd)


  //    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
  //  var itemObj = foodItem.find(element => element.name == itemToAdd);

  //return;
  //console.log(itemObj);

  /*var index = cartData.indexOf(itemObj);
  if (index === -1) {
    document.getElementById("item-card-" + itemObj.id).classList.add('toggle-heart');
    cartData = [...cartData, itemObj];
    console.log(cartData);
  }

  else if (index > -1) {
    alert("Added to cart");
  }
*/
    
  document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' Items';
  // document.getElementById('m-cart-plus').innerText = ' ' + cartData.length;
  // totalAmount();
  //cartItems();


}


function cartItems() {
  var tableBody = document.getElementById('table-body');
  tableBody.innerHTML = ' ';

  cartData.map(item => {
    var tableRow = document.createElement('tr');

    var rowData1 = document.createElement('td')
    var img = document.createElement('img');
    img.src = item.img;
    rowData1.appendChild(img);

    var rowData2 = document.createElement('td');
    rowData2.innerText = item.name;

    var rowData3 = document.createElement('td');
    var btn1 = document.createElement('button');
    btn1.setAttribute('class', 'decreas-btn');
    btn1.innerHTML = '-';

    var span = document.createElement('span');
    span.innerText = item.quantity;

    var btn2 = document.createElement('button');
    btn1.setAttribute('class', 'increas-item');
    btn1.innerHTML = '+';

    rowData3.appendChild(btn1);
    rowData3.appendChild(span);
    rowData3.appendChild(btn2);

    var rowData4 = document.createElement('td');
    rowData4.innerText = item.price;

    tableRow.appendChild(rowData1);
    tableRow.appendChild(rowData2);
    tableRow.appendChild(rowData3);
    tableRow.appendChild(rowData4);

    tableBody.appendChild(tableRow);
  })
  document.querySelectorAll('.increase-item').forEach(item => {
    item.addEventListener('click', increaseItem);
  })

  document.querySelectorAll('.increase-item').forEach(item => {
    item.addEventListener('click', decrementItem);
  })

  document.querySelectorAll('.increase-item').forEach(item => {
    item.addEventListener('click', decrementItem);
  })
}

var currPrice = 0;

function increaseitem() {
  let itemToInc = this.parentNode.previousSibling.innerText;
  console.log(itemToInc);

  var incObj = cartData.find(element => element.name = itemToInc);
  incObj.quantity += 1;

  currPrice = (incObj.price * incObj.quantity - incObj.price *
    (incObj.quantity - 1)) / (incObj.quantity - 1);

  incObj.price = currPrice * incObj.quantity;
  totalAmount();
  cartItems();
}


function decrementItem() {
  let itemToDec = this.parentNode.previousSibling.innerText;
  let decObj = caertData.find(element => element.name == itemToDec);
  let ind = cartData.indexOf(decObj);
  if(decObj.quantity > 1 ) {
    currPrice = (decObj.price*devicePixelRatio.quantity - decObj*price
      (decObj.quantity-1))/(decObj.quantity);
  }
}