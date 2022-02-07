$(document).ready(function() {
    /* the list of buttons is not dynamic, so rather than fetching the list of
     * buttons every time `next` or `prev` gets executed, we can just fetch it
     * once and store it globally. */
    var buttons = $('input[name="slider"]');
    var timer;
    
    function start() {
      timer = setInterval(next, 4000);
    }
    
    function next() {
      for (let i = 0; i < buttons.length; i++) {
        if (!buttons[i].checked) {
          continue;
        }
        buttons[i].checked = false;
        if (i == buttons.length - 1) {
          buttons[0].checked = true;
        } else {
          buttons[i + 1].checked = true;
        }
        break;
      }
    } 
    start();

  });