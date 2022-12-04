function onChange() {
  document.getElementById("name").innerText = document.getElementById("name-input").value;
  document.getElementById("job").innerText = document.getElementById("job-input").value;
  const url = document.getElementById("url").value;
  html2canvas(document.getElementById("name-section"),{
    onrendered: function(canvas){
      var imgData = canvas.toDataURL();
      document.getElementById("download").href = imgData;
    }
  });
  html2canvas(document.getElementById("qr-section"),{
    onrendered: function(canvas){
      var imgData = canvas.toDataURL();
      document.getElementById("download-ura").href = imgData;
    }
  });
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 240,
    height: 240,
    colorLight: "#f8f8f8",
  });
}

window.onload = function() {
  onChange();
}
