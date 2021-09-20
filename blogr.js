let product=document.getElementById('product');
let company = document.getElementById('company');
let connect = document.getElementById('connect');
let productDropdown = document.getElementById('product-dropdown');
let companyDropdown = document.getElementById('company-dropdown');
let connectDropdown = document.getElementById('connect-dropdown');
let arrow1 = document.getElementById('arrow-1');
let arrow2 = document.getElementById('arrow-2');
let arrow3 = document.getElementById('arrow-3');
let mobileMenu = document.getElementById('mobile-menu');
let mobileProductDropdown = document.getElementById('mobile-product-dropdown');
let mobileCompanyDropdown = document.getElementById('mobile-company-dropdown');
let mobileConnectDropdown = document.getElementById('mobile-connect-dropdown');
let darkArrow1 = document.getElementById('dark-arrow-1');
let darkArrow2 = document.getElementById('dark-arrow-2');
let darkArrow3 = document.getElementById('dark-arrow-3');
let hamburger = document.getElementById('hamburger');

mobileMenu.style.display = 'none';

function productItems(){
    if(productDropdown.style.display === 'block' || arrow1.style.transform === 'rotate(180deg)'){
        productDropdown.style.display = 'none';
        arrow1.style.transform = 'rotate(0deg)';
    }
    else {
        productDropdown.style.display = 'block';
        arrow1.style.transform = 'rotate(180deg)';
        companyDropdown.style.display = 'none';
        connectDropdown.style.display = 'none';
        arrow2.style.transform = 'rotate(0deg)';
        arrow3.style.transform = 'rotate(0deg)';
    }
}

function companyItems(){
    if(companyDropdown.style.display === 'block' || arrow2.style.transform === 'rotate(180deg)'){
        companyDropdown.style.display = 'none';
        arrow2.style.transform = 'rotate(0deg)';

    }
    else {
        companyDropdown.style.display = 'block';
        arrow2.style.transform = 'rotate(180deg)';
        productDropdown.style.display = 'none';
        connectDropdown.style.display = 'none';
        arrow1.style.transform = 'rotate(0deg)';
        arrow3.style.transform = 'rotate(0deg)';
    }
}

function connectItems(){
    if(connectDropdown.style.display === 'block' || arrow3.style.transform === 'rotate(180deg)'){
        connectDropdown.style.display = 'none';
        arrow3.style.transform = 'rotate(0deg)';
    }
    else {
        connectDropdown.style.display = 'block';
        arrow3.style.transform = 'rotate(180deg)';
        companyDropdown.style.display = 'none';
        productDropdown.style.display = 'none';
        arrow2.style.transform = 'rotate(0deg)';
        arrow1.style.transform = 'rotate(0deg)';
    }
}

function mobileProductItems(){
    if(mobileProductDropdown.style.display === 'block' || darkArrow1.style.transform === 'rotate(180deg)'){
        mobileProductDropdown.style.display = 'none';
        darkArrow1.style.transform = 'rotate(0deg)';
    }
    else {
        mobileProductDropdown.style.display = 'block';
        darkArrow1.style.transform = 'rotate(180deg)';
        mobileCompanyDropdown.style.display = 'none';
        mobileConnectDropdown.style.display = 'none';
        darkArrow2.style.transform = 'rotate(0deg)';
        darkArrow3.style.transform = 'rotate(0deg)';
    }
}

function mobileCompanyItems(){
    if(mobileCompanyDropdown.style.display === 'block' || darkArrow2.style.transform === 'rotate(180deg)'){
        mobileCompanyDropdown.style.display = 'none';
        darkArrow2.style.transform = 'rotate(0deg)';

    }
    else {
        mobileCompanyDropdown.style.display = 'block';
        darkArrow2.style.transform = 'rotate(180deg)';
        mobileProductDropdown.style.display = 'none';
        mobileConnectDropdown.style.display = 'none';
        darkArrow1.style.transform = 'rotate(0deg)';
        darkArrow3.style.transform = 'rotate(0deg)';
    }
}

function mobileConnectItems(){
    if(mobileConnectDropdown.style.display === 'block' || darkArrow3.style.transform === 'rotate(180deg)'){
        mobileConnectDropdown.style.display = 'none';
        darkArrow3.style.transform = 'rotate(0deg)';
    }
    else {
        mobileConnectDropdown.style.display = 'block';
        darkArrow3.style.transform = 'rotate(180deg)';
        mobileCompanyDropdown.style.display = 'none';
        mobileProductDropdown.style.display = 'none';
        darkArrow2.style.transform = 'rotate(0deg)';
        darkArrow1.style.transform = 'rotate(0deg)';
    }
}

hamburger.addEventListener('click', ()=>{
    if(mobileMenu.style.display === 'none'){
        mobileMenu.style.display = 'block';
        hamburger.src = "images/icon-close.svg";
    }
    else{
        mobileMenu.style.display = 'none';
        hamburger.src = "images/icon-hamburger.svg";
    }
})