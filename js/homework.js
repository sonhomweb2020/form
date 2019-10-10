$(document).ready(function(){
    let subjects = "";
    $('.subject').on('click',function(){
      
       $('.subject:checked').each(function(){
           subjects += $(this).val();
           $('.alert-primary').html(subjects);
       });
    });
});