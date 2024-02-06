let navtab=document.getElementById("nav-tab")

navtab.addEventListener('click',tabclick);

function tabclick(event){

    //get all the active tabs
    const activetabs=document.querySelectorAll('.active')
    activetabs.forEach((tab)=>{
        tab.classList.remove('active')
    })

    const pages=document.querySelectorAll('.page');

    pages.forEach((page)=>{
        page.classList.remove('page-active')
    })

   event.target.parentElement.classList.add('active');
   let id=event.target.href.split('#')[1];
   const page=document.getElementById(id)
   page.classList.add('page-active');
}