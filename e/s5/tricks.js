// https://stackoverflow.com/questions/2754546/can-i-disable-a-css-hover-effect-via-javascript/44905617#44905617
//inject stylesheet to head with javascript
  <script>
    //creates a new `style` element in the document
var sheet = (function(){
  var style = document.createElement("style");
  // WebKit hack :(
  style.appendChild(document.createTextNode(""));
  // Add the <style> element to the page
  document.head.appendChild(style);
  return style.sheet;
})();

//add the actual rules to it
sheet.insertRule(
 ".rotate { display: none }" , 0
);
  </script>