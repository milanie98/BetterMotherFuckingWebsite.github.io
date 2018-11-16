//la fonction trigger
$(function(){
$("#BtAnnonce").hide();
setTimeout(function () {
   $('#BtAnnonce').trigger('click');
}, 10000);

});



