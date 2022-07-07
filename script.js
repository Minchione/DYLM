
    function yesClick() {
    alert("zUwUz");
  }
  
  function noHover()
  
  {
    console.log('Hello');
    console.log('width', window.innerWidth, window.innerHeight);
    var x = Math.floor(Math.random() * window.innerWidth);
    
    var y = Math.floor(Math.random() * window.innerHeight);
    console.log('xy', x, y);
    if (x < 400) {
        document.getElementById("btnNo").style.left = x + "px";
    } else {
        document.getElementById("btnNo").style.left = (x- 400) + "px";
    }
    if (y > (window.innerHeight - 150)) {
        document.getElementById("btnNo").style.top = (y - 600) + "px";
    } else {
        document.getElementById("btnNo").style.top = y + "px";
    }
    document.getElementById("btnNo").style.position ="absolute";
  }
