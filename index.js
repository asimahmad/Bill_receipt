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
        console.log( _class("tab-header")[0].style.top = `calc(180px + ${i*95}px)`);

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