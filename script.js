function appendSymbol(symbol) {
    var result = document.getElementById("result");
    result.value += symbol;
  }
  
  function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
  }
  
  function deleteDigit() {
    var result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
  }
  
  function calculate() {
    var result = document.getElementById("result");
    var expression = result.value;
  
    try {
      result.value = eval(expression);
    } catch (error) {
      result.value = "Error";
      setTimeout(function(){
        result.value="";
      },500)
    }
  }
