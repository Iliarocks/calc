const billInput = document.getElementById('bill')
const qualitySelect = document.getElementById('quality')
const calcBtn = document.getElementById('calc-btn')
const resultDiv = document.getElementById('result')

var calc = () => {
  var bill = billInput.value
  var quality = qualitySelect.value
  switch (quality) {
    case '5':
      return bill * 0.25
      break;
    case '1':
      return bill * 0.10
      break;
    default:
      return bill * 0.15
      break;
  }
}

calcBtn.addEventListener('click', function(){
  if (billInput.value == ''){
    window.alert('Please insert a value in the input box')
    return
  }
  resultDiv.innerText = `You should tip $${Math.round(calc() * 10)/10}`
})
