function onChange() {
  document.getElementById("name").innerText = document.getElementById("name-input").value;
  document.getElementById("job").innerText = document.getElementById("job-input").value;
  html2canvas(document.getElementById("name-section"),{
    onrendered: function(canvas){
      var imgData = canvas.toDataURL();
      document.getElementById("download").href = imgData;
    }
  });
}

window.onload = function() {
}
