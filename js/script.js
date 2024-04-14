 //js
 
 
 $(document).ready(function (params) {
  // draggable

  $( "#draggable" ).draggable();

  // accordion
  $( "#accordion" ).accordion();

//  tags
  var data=["Full Stack Web Development", "Graphices Design" , 
  "Digutal Markeeting"];


  $( "#c_name" ).autocomplete({
    source: data
  });

});



