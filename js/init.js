(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.modal').modal();
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function() {
  $('#user').change(function(){
      $('.change').hide();
      $('#' + $(this).val()).show();
  });
});

