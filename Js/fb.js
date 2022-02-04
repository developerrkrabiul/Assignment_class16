//  all Selector
const fb_btn = document.querySelector('.fb_btn');
const fb_modal = document.querySelector('.fb_modal_sec');
const fb_alart = document.querySelector('.fb_alar_tsec');
const fb_keep = document.querySelector('.keep');
const fb_keep = document.querySelector('#keep');
const fb_discard = document.querySelector('.discard');
const fb_ModalClose = document.getElementById('fb_modal_close');
const fb_CloseClose = document.getElementById('fb_alart_close');

fb_btn.addEventListener('click', () =>{

    fb_modal.style.display = "flex";
    fb_keep.id = 'keep';



});
fb_ModalClose.addEventListener('click', () =>{

    fb_alart.style.display = "flex";

});
fb_keep.addEventListener('click', () =>{
    fb_alart.style.display = "none";
});
fb_CloseClose.addEventListener('click', () =>{
    fb_alart.style.display = "none";
});

fb_discard.addEventListener('click', () =>{

    fb_alart.style.display = "none";
    fb_modal.style.display = "none";


});