// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    let newParagraph = document.getElementById("text");
    newParagraph.innerHTML = "This is really cool!"
  });



  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  //HTML5 option
  //<script src="index.js" defer></script>
  //the JavaScript code stored in index.js will be 
  //loaded up but won't execute until the HTML page completely loads.