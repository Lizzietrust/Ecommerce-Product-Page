const imgs = document.querySelectorAll('.img-thumbnails a');
const imgOpts = [... imgs];
let imgId = 1;

imgOpts.forEach((thumbItem) => {
    thumbItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = thumbItem.dataset.id;
        showclickImg();
    })
});


function showclickImg () {
    const displayWidth = document.querySelector('.showcase-img:first-child').clientWidth;

    document.querySelector('.showcase-img').style.transform = 
    `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', showclickImg);


document.querySelectorAll('.showcase-img img').forEach(image =>{
    image.onclick = () => {
        document.querySelector('.popup').style.display = 'block';
        document.querySelectorAll('.popmain-product').forEach(popImg =>{
            popImg.src = image.getAttribute('src');
        });
    }
});

document.querySelector('.btn-close').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}



/*var indexValue = 1;
showPopImg(indexValue);
function popSlide(e){showPopImg(indexValue = e);}
function sideSlide(e){showPopImg(indexValue += e);}
function showPopImg(e) {
    var i;
    const popSlideImg = document.querySelectorAll('.pop-slide');
    const popSliders = document.querySelectorAll('.pop-thumbnails .pop-item');
    if (e > popSlideImg.length){indexValue = 1}
    if (e < 1){indexValue = popSlideImg.length}
    for (i = 0; i < popSlideImg.length; i++) {
        popSlideImg[i].style.display = "none";
    }
    for (i = 0; i < popSliders.length; i++) {
        popSliders[i].style.opacity = "1";
    }
    popSlideImg[indexValue-1].style.display = "block";
    popSliders[indexValue-1].style.opacity = ".3";

}*/


var counter = 0;

document.querySelector('.add').addEventListener('click', addCart,);

function addCart() {
    counter++;

    document.querySelector('.counter').innerHTML = counter;
}

document.querySelector('.minus').addEventListener('click', removeCart);

function removeCart() {
    counter--;

    document.querySelector('.counter').innerHTML = counter;
}

document.querySelector('.cart-btn').addEventListener('click', displayCartBadge);

function displayCartBadge () {
    document.querySelector('.cart-badge').style.display = 'block';
    document.querySelector('.cart-badge').innerHTML = counter;
}

document.querySelector('.nav-cart').addEventListener('click', displayCart);

function displayCart () {
    document.querySelector('.my-cart').style.display = 'block';
}

document.querySelectorAll('.check-out').forEach(check => {
    check.onclick = () => {
        document.querySelector('.my-cart').style.display = 'none'; 
    }
});

document.querySelector('.my-cart').addEventListener('click', (e) => {
    target = e.target;
    if(target.classList.contains("delete-item")){
        target.parentElement.remove();
    }
});

document.querySelector('.add').addEventListener('click', addNew);

function addNew () {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="cart-item">
        <img src="./ecommerce-product-page-main/images/image-product-1-thumbnail.jpg" alt="" class="cart-product">
        <div class="item-price">$50</div>
        <img src="./ecommerce-product-page-main/images/icon-delete.svg" alt="" class="delete-item">
    </div>
    `;
    document.querySelector('.cart-items').appendChild(newDiv);
}



function toggleMobile (menu) {
    menu.classList.toggle('active');
}


var mobProduct = document.querySelector(".mob-product");
var mobImgs = ['image-product-1.jpg','image-product-2.jpg','image-product-3.jpg','image-product-4.jpg'];
var i = 0;

function prev () {
    if(i <= 0) i = mobImgs.length;
    i--;
    return setmobImg();
}

function next () {
    if(i >= mobImgs.length - 1) i = -1;
    i++;
    return setmobImg();
}

function setmobImg() {
    return mobProduct.setAttribute('src', './ecommerce-product-page-main/images/' + mobImgs[i]);
}


