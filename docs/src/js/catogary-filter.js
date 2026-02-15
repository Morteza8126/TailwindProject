let acc=document.querySelector(".container-accordion");
let accMobile=document.querySelector(".container-accordion-mobile");
let closeBtn=document.querySelector(".close-btn");
let filterBtn=document.querySelector(".filter-button");
let mobileFilter=document.querySelector(".mobile-filter");
let drawer= document.querySelector(".drawer");
let sortBtn=document.querySelector(".sort-btn");
let sortDropdown=document.querySelector(".sort-dropdown");

acc.addEventListener("click",(e)=>{
    let target=e.target.closest("button");
     let plus=target.querySelector(".plus");
    let minuse=target.querySelector(".minuse");
    let panel= target.nextElementSibling;
    panel.classList.toggle("hidden");
    panel.classList.toggle("flex");    
    plus.classList.toggle("hidden");
    minuse.classList.toggle("hidden");

});
accMobile.addEventListener("click",(e)=>{
    let target=e.target.closest("button");
    let plus=target.querySelector(".plus");
    let minuse=target.querySelector(".minuse");
    let panel= target.nextElementSibling;
    panel.classList.toggle("hidden");
    panel.classList.toggle("flex");    
    plus.classList.toggle("hidden");
    minuse.classList.toggle("hidden");

});
closeBtn.addEventListener("click",()=>{
    mobileFilter.classList.toggle("hidden");
});
filterBtn.addEventListener("click",()=>{
    mobileFilter.classList.toggle("hidden");  

});
mobileFilter.addEventListener("click",(e)=>{
        if(!drawer.contains(e.target)){
        mobileFilter.classList.add("hidden");
    } 
});
sortBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    sortDropdown.classList.toggle("hidden");
})
document.addEventListener("click",(e)=>{
        if(!sortDropdown.contains(e.target)&& !sortBtn.contains(e.target)){
            sortDropdown.classList.add("hidden");
        }
});