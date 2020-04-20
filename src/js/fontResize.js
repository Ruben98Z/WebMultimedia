/*$(document).ready(function () { 
  var size = new Array('p'); 
  $("#largeFont").click(function(){ 
      $('#container').css('font-size', '30px');
      return false; 
  });
  $("#resetFont").click(function (){ 
      $('#container').css('font-size', size);
      return false; 
  });
  $("#increaseFont").click(function () { 
      var size = $('#container').css('font-size');
      $('#container').css('font-size', parseInt(size)+2); 
      return false;
  });
  $("#decreaseFont").click(function () { 
      var size = $('#container').css('font-size');
      $('#container').css('font-size', parseInt(size)-2); 
      return false;
  }); 
  $("#smallFont").click(function(){ 
      $('#container').css('font-size', '10px');
      return false; 
  });
});*/

$(document).ready(function() {
    var resize = new Array('p', '.resizable');
    resize = resize.join(',');
  
    //resets the font size when "reset" is clicked
    var resetFont = $(resize).css('font-size');
    $(".reset").click(function() {
      $(resize).css('font-size', resetFont);
    });
  
    //increases font size when "+" is clicked
    $(".increase").click(function() {
      var originalFontSize = $(resize).css('font-size');
      var originalFontNumber = parseFloat(originalFontSize, 10);
      var newFontSize = originalFontNumber * 1.2;
      $(resize).css('font-size', newFontSize);
      return false;
    });
  
    //decrease font size when "-" is clicked
  
    $(".decrease").click(function() {
      var originalFontSize = $(resize).css('font-size');
      var originalFontNumber = parseFloat(originalFontSize, 10);
      var newFontSize = originalFontNumber * 0.8;
      $(resize).css('font-size', newFontSize);
      return false;
    });
  
  });
