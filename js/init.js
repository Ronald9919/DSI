(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.timepicker').timepicker({
      autoClose:true
    });
    $('.datepicker').datepicker({
      autoClose:true
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function() {
  $('#user').change(function(){
      $('.change').hide();
      $('#' + $(this).val()).show();
  });
});

