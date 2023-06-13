document.addEventListener("DOMContentLoaded", function() {
    var buttonIds = ["bk-button", "sj-button", "jm-button", "sg-button", "kg-button"];
    var countIds = ["bk-num", "sj-num", "jm-num", "sg-num", "kg-num"];
  
    for(var i = 0; i < buttonIds.length; i++) {

      var count = localStorage.getItem(countIds[i]);
      if(count) {
        document.getElementById(countIds[i]).innerText = count;
      }
  
      var buttonDisabled = localStorage.getItem(buttonIds[i] + "Disabled");
      var button = document.getElementById(buttonIds[i]);

      if(buttonDisabled === "true") {
        button.disabled = true;
      }
    }
});
  
function increaseCount(buttonId, countId) {
    var button = document.getElementById(buttonId);
    var count = document.getElementById(countId);
    var currentCount = parseInt(count.innerText);
    var newCount = currentCount + 1;
  
    count.innerText = newCount;
    button.disabled = true;
  
    localStorage.setItem(countId, newCount);
    localStorage.setItem(buttonId + "Disabled", true);
}
  
window.addEventListener("beforeunload", function() {
    var buttonIds = ["bk-button", "sj-button", "jm-button", "sg-button", "kg-button"];
  
    for(var i = 0; i < buttonIds.length; i++) {
      localStorage.removeItem(buttonIds[i] + "Disabled");
    }
});

