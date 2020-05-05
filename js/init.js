(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    introjs().start(); 
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function() {
  $('#user').change(function(){
      $('.change').hide();
      $('#' + $(this).val()).show();
  });
});