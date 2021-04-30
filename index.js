function _class(name){
    return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

let tabBillPanes = _class("bill-tabs-header")[0].getElementsByTagName("div");

for(let i=0; i< tabPanes.length; i++)
{
    tabPanes[i].addEventListener("click", function(){
        _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");

        _class("tab-header")[0].style.top = `calc(180px + ${i*95}px)`;
        //console.log( _class("tab-header")[0].style.top = `calc(180px + ${i*95}px)`);

        _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
    })
}


for(let i=0; i< tabBillPanes.length; i++)
{
    tabBillPanes[i].addEventListener("click", function(){
        _class("bill-tabs-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabBillPanes[i].classList.add("active");

       // _class("tab-header")[0].style.top = `calc(180px + ${i*95}px)`;
        //console.log( _class("bill-tabs-header")[0].style.top = `calc(180px + ${i*95}px)`);

        _class("bill-tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        _class("bill-tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
    })
}


const wine = ['Beaux Freres', 'Chateau Climens', 'Carernet Sauvignon', 'Domiane Serene', 'Lewis Alecs', 'Federalist'];
const wine_price = [7.50, 3.00, 9.25, 6.00, 4.00, 8.80];
const images = ["wine.jpg", "wine.jpg", "wine.jpg", "wine.jpg", "wine.jpg", "wine.jpg"];

for(let i=1; i<=6;i++){
    let cards = document.getElementById("id_"+i);
    cards.innerHTML = `<img id=${i} src="./Images/${images[i-1]}" />`;
    //console.log(cards);
    let image = document.getElementById(i);
    image.style.width = '80px';
    image.style.float = 'left';
    image.style.height = '80px';
    cards.innerHTML+= `${wine[i-1]} <br> $${wine_price[i-1]} <br> 
                        <button class="dec-button">-</button>
                        <p class="qty">0</p>
                        <button class="inc-button">+</button>`;
    let inc_button = document.getElementsByClassName("inc-button");
    let dec_button = document.getElementsByClassName("inc-button");
    console.log(dec_button, inc_button); 

    //console.log(image);
}