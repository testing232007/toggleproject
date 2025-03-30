function changeMode() {
    let body = document.body;
    let modeText = document.getElementById("mode-text");
    
    if (body.className === "dark-mode") {
      body.className = "";
      modeText.innerHTML = "☀️ LIGHT MODE";
    } else {
      body.className = "dark-mode";
      modeText.innerHTML = "🌙 DARK MODE";
    }
  }