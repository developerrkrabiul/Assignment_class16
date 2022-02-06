//  all Selector
const fb_btn = document.querySelector('.fb_btn');
const fb_modal = document.querySelector('.fb_modal_sec');
const fb_alart = document.querySelector('.fb_alar_tsec');
const fb_keep = document.querySelector('.keep');
const save_contain = document.querySelector('#save_contain');
const fb_discard = document.querySelector('.discard');
const fb_ModalClose = document.getElementById('fb_modal_close');
const fb_CloseClose = document.getElementById('fb_alart_close');

fb_btn.addEventListener('click', () =>{

    fb_modal.classList.add('modalonoff');

});

save_contain.addEventListener('click', ()=>{

    fb_ModalClose.classList.add('seve_done');

});

fb_ModalClose.addEventListener('click', () =>{

    if(fb_ModalClose.classList.contains('seve_done')){

        fb_modal.classList.remove('modalonoff');
        fb_ModalClose.classList.remove('seve_done');

    }else{
        fb_alart.style.display = "flex";
    }

});

fb_modal.addEventListener('click', function(e){

    if(e.target == this){
        if(fb_ModalClose.classList.contains('seve_done')){
            fb_modal.classList.remove('modalonoff');
            fb_ModalClose.classList.remove('seve_done');
        }else{
            fb_alart.style.display = "flex";
        }

    }


});

fb_keep.addEventListener('click', () =>{
    fb_alart.style.display = "none";
});

fb_CloseClose.addEventListener('click', () =>{
    fb_alart.style.display = "none";
});


fb_discard.addEventListener('click', () =>{

    fb_alart.style.display = "none";
    fb_modal.classList.remove('modalonoff');

});



