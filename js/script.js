// let cart = {
//     'shs824': 2,
//     'sisls23': 2,
// };


// // Уменьшение количества товара
// // Удаление количества товара

// document.onclick = Event => {
//     // console.log(Event.target.classList);
//     if (Event.target.classList.contains('to-cart')) {
//         plusFunction(Event.target.dataSet.id);
//     }
// }

// // Увеличение количества товара
// const plusFunction = id => {
//     cart[id]++;
//     renderCart();
// }

// const renderCart = () => {
//     console.log(cart);
// }

// renderCart();
function init() {
    // Вычитуем файл goods.json
    $.getJSON("goods.json", goodsOut);

}

function goodsOut(data) {
    // Вывод товара на главную страницу
    console.log(data);
    var out = '';
    for (var key in data) {
        // out += '<div class="img img_cart">' +cart[key].img;
        // out += '<div class="product product_cart">';
        // out += '<a href="" class="title title_cart">' + data[key].name + '</a>';
        // out += '</div>';

        // ------------

        out += '<div class="products-wrapper goods-out">';
        out += `<div class="img"><img src="img/${data[key].img}" alt=""></div>`;
        out += `<a href="" class="title">${data[key].name}</a>`;
        out += `<p class="description">${data[key].description}</p>`;
        out += `<div class="rating">
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
        <span class="active"></span>
        <span></span>
        </div>`;
        out += `<div class="price"><b>${data[key].cost} ${data[key].cost2}</b></div>`;
        out += `<a href="" class="to-cart" data-id="shs824">В корзину</a>`;
        out += '</div>';

    }
    $('.goods-out').html(out);
}

$(document).ready(function () {
    init();
});