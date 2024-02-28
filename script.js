var rangeslider = document.getElementById("price-slider");
var yearly = document.getElementById("billing");
var output = document.getElementById("price");
var views = document.getElementById("views")
var pageViews = ["10K", "50K", "100K", "500K", "1M"]
var monthlyRate = [8, 12, 16, 24, 36]

var isYearly = false;

output.innerHTML = monthlyRate[rangeslider.value]
views.innerHTML = pageViews[rangeslider.value]

rangeslider.oninput = function(){
  updateCost()
}

yearly.onchange = function() {
  if (isYearly === false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  updateCost();
}

function updateCost(){
  views.innerHTML = pageViews[rangeslider.value]
  if (isYearly){
    output.innerHTML = monthlyRate[rangeslider.value] * 0.75
  } else {
    output.innerHTML = monthlyRate[rangeslider.value]
  }
}

