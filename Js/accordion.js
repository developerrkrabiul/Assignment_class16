//  all Selector

const acc_header = document.querySelectorAll('.my_accordion_header');
const acc_Body = document.querySelectorAll('.my_accordion_body');


acc_header.forEach(item =>{

    item.addEventListener('click', function(){

        acc_header.forEach(item =>{
            if(item == this){
                item.classList.toggle('active');
            }else{
                item.classList.remove('active');
                item.nextElementSibling.style.height = '0px';
            }

        });



        if(item.classList.contains('active')){
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px';
        }else{
            item.nextElementSibling.style.height = '0px';
        }
    });


});