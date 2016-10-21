//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});

//When "New Color" is pressed

  //Show color select or hide the color select

//When color sliders change
  //update the new color span

//When "Add Color" is pressed
  //Append the color to the controls ul
  //Select the new color

//On mouse events on the canvas
  //Draw lines
