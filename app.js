$(document).ready(function(){
  
  var userName = prompt("Please enter your name:");
  alert("Welcome to the site " + userName + ". Do what ever you want here, you sexy thing. ;) :*");
  
  $('#bgForm').submit(function(event){
    event.preventDefault();
    var color = $('#bgColor').val();
    $('body').css('background-color', color);
  });

  $('#btn-show').click(function(event){
    event.preventDefault();
    $('#hidden').toggle();
  }); 

  $('#removeDiv').submit(function(event){
    event.preventDefault();
    $('#removeThis').remove();
  });

  
});