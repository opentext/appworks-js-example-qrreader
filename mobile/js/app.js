function scanQr() {
  var reader = new Appworks.QRReader(
    function(result){
      out(result);
    },
    function(error){
      out(error);
    });

  reader.scan();
}

function scanBarcode(multiple, timeout, finishTitle, cancelTitle) {
  var reader = new Appworks.QRReader(
    function(result){
      out(result);
    },
    function(error){
      out(error);
    });

  reader.barcode(multiple, timeout, finishTitle, cancelTitle);
}

function out(message) {
  console.log(message);
  if(typeof(message) == "object") {
    getObject("result").innerHTML = JSON.stringify(message);
  } else {
    getObject("result").innerHTML = message;
  }
}

function getObject(name) {
  return document.getElementById(name);
}
