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
//esta onda es para que el menu sea desplazable
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});
