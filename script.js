var years = ["Tons of CO2", "Bulbs Saved", "Gallons of Gas", "Vehicles", "Home Electricty"];
// For drawing the lines

let mMetals = [0, 0, 0, 0, 0],
  mConcrete = [0, 0, 0, 0, 0],
  mPlastic = [0, 0, 0, 0, 0],
  mDrywall = [0, 0, 0, 0, 0],
  mOcc = [0, 0, 0, 0, 0],
  mWood = [0, 0, 0, 0, 0];

var ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [{
      data: mMetals,
      label: "Metal",
      borderColor: "#3e95cd",
      fill: false,
      responsive: true,
      maintainAspectRatio: false

    },
    {
      data: mConcrete,
      label: "Concrete",
      borderColor: "#8e5ea2",
      fill: false,
      responsive: true,
      maintainAspectRatio: false

    },
    {
      data: mPlastic,
      label: "Plastic",
      borderColor: "#3cba9f",
      fill: false,
      responsive: true,
      maintainAspectRatio: false

    },
    {
      data: mDrywall,
      label: "Drywall",
      borderColor: "#e8c3b9",
      fill: false,
      responsive: true,
      maintainAspectRatio: false

    },
    {
      data: mOcc,
      label: "OCC",
      borderColor: "#c45850",
      fill: false,
      responsive: true,
      maintainAspectRatio: false

    },
    {
      data: mWood,
      label: "Wood",
      borderColor: "black",
      fill: false,
      responsive: true,
      maintainAspectRatio: false

    }

    ]
  },
  options: {
    animation: {
      duration: 2000,
      easing: "easeInCubic"
    }
  }
});


function Calculate() {
  var metalRate = 4.34;
  var concreteRate = 0.01;
  var plasticRate = 1.02;
  var drywallRate = 0.00;
  var occRate = 3.12;
  var woodRate = 2.46;
  var bulbRateMetal = 114.8451971;
  var bulbRateConcrete = 0.26462027;
  var bulbRatePlastic = 1.02;
  var bulbRateDrywall = 0;
  var bulbRateOcc = 3.12;
  var bulbRateWood = 2.46;
  var gasRateMetal = 488.3537752;
  var gasRateConcrete = 1.125239113;
  var gasRatePlastic = 114.7743896;
  var gasRateDrywall = 0;
  var gasRateOcc = 351.074603;
  var gasRateWood = 276.8088219;
  var vicRateMetal = .929336188;
  var vicRateConcrete = 0.002141328;
  var vicRatePlastic = 0.218415418;
  var vicRateDrywall = 0;
  var vicRateOcc = 0.668094218;
  var vicRateWood = 0.526766595;
  var homeRateMetal = 0.468682505;
  var homeRateConcrete = 0.001079914;
  var homeRatePlastic = 0.110151188;
  var homeRateDrywall = 0;
  var homeRateOcc = 0.336933045;
  var homeRateWood = 0.265658747;


  num = document.getElementById("Metal").value;
  mMetals[0] = document.getElementById("result").innerHTML = (num * metalRate).toFixed(2);

  num1 = document.getElementById("Concrete").value;
  mConcrete[0] = document.getElementById("result1").innerHTML = (num1 * concreteRate).toFixed(2);

  num2 = document.getElementById("Plastic").value;
  mPlastic[0] = document.getElementById("result2").innerHTML = (num2 * plasticRate).toFixed(2);

  num3 = document.getElementById("Drywall").value;
  mDrywall[0] = document.getElementById("result3").innerHTML = (num3 * drywallRate).toFixed(2);

  num4 = document.getElementById("OCC").value;
  mOcc[0] = document.getElementById("result4").innerHTML = (num4 * occRate).toFixed(2);

  num5 = document.getElementById("Wood").value;
  mWood[0] = document.getElementById("result5").innerHTML = (num5 * woodRate).toFixed(2);

  num6 = document.getElementById("result").innerHTML;
  mMetals[1] = document.getElementById("bulb").innerHTML = (num6 * bulbRateMetal).toFixed(2);

  num7 = document.getElementById("result1").innerHTML;
  mConcrete[1] = document.getElementById("bulb1").innerHTML = (num7 * bulbRateConcrete).toFixed(2);

  num8 = document.getElementById("result2").innerHTML;
  mPlastic[1] = document.getElementById("bulb2").innerHTML = (num8 * bulbRatePlastic).toFixed(2);

  num9 = document.getElementById("result3").innerHTML;
  mDrywall[1] = document.getElementById("bulb3").innerHTML = (num9 * bulbRateDrywall).toFixed(2);

  num10 = document.getElementById("result4").innerHTML;
  mOcc[1] = document.getElementById("bulb4").innerHTML = (num10 * bulbRateOcc).toFixed(2);

  num11 = document.getElementById("result5").innerHTML;
  mWood[1] = document.getElementById("bulb5").innerHTML = (num11 * bulbRateWood).toFixed(2);

  num12 = document.getElementById("result").innerHTML;
  mMetals[2] = document.getElementById("gas").innerHTML = (num12 * gasRateMetal).toFixed(2);

  num13 = document.getElementById("result1").innerHTML;
  mConcrete[2] = document.getElementById("gas1").innerHTML = (num13 * gasRateConcrete).toFixed(2);

  num14 = document.getElementById("result2").innerHTML;
  mPlastic[2] = document.getElementById("gas2").innerHTML = (num14 * gasRatePlastic).toFixed(2);

  num15 = document.getElementById("result3").innerHTML;
  mDrywall[2] = document.getElementById("gas3").innerHTML = (num15 * gasRateDrywall).toFixed(2);

  num16 = document.getElementById("result4").innerHTML;
  mOcc[2] = document.getElementById("gas4").innerHTML = (num16 * gasRateOcc).toFixed(2);

  num17 = document.getElementById("result5").innerHTML;
  mWood[2] = document.getElementById("gas5").innerHTML = (num17 * gasRateWood).toFixed(2);

  num18 = document.getElementById("result").innerHTML;
  mMetals[3] = document.getElementById("vic").innerHTML = (num18 * vicRateMetal).toFixed(2);

  num19 = document.getElementById("result1").innerHTML;
  mConcrete[3] = document.getElementById("vic1").innerHTML = (num19 * vicRateConcrete).toFixed(2);

  num20 = document.getElementById("result2").innerHTML;
  mPlastic[3] = document.getElementById("vic2").innerHTML = (num20 * vicRatePlastic).toFixed(2);

  num21 = document.getElementById("result3").innerHTML;
  mDrywall[3] = document.getElementById("vic3").innerHTML = (num21 * vicRateDrywall).toFixed(2);

  num22 = document.getElementById("result4").innerHTML;
  mOcc[3] = document.getElementById("vic4").innerHTML = (num22 * vicRateOcc).toFixed(2);

  num23 = document.getElementById("result5").innerHTML;
  mWood[3] = document.getElementById("vic5").innerHTML = (num23 * vicRateWood).toFixed(2);

  num24 = document.getElementById("result").innerHTML;
  mMetals[4] = document.getElementById("home").innerHTML = (num24 * homeRateMetal).toFixed(2);

  num25 = document.getElementById("result1").innerHTML;
  mConcrete[4] = document.getElementById("home1").innerHTML = (num25 * homeRateConcrete).toFixed(2);

  num26 = document.getElementById("result2").innerHTML;
  mPlastic[4] = document.getElementById("home2").innerHTML = (num26 * homeRatePlastic).toFixed(2);

  num27 = document.getElementById("result3").innerHTML;
  mDrywall[4] = document.getElementById("home3").innerHTML = (num27 * homeRateDrywall).toFixed(2);

  num28 = document.getElementById("result4").innerHTML;
  mOcc[4] = document.getElementById("home4").innerHTML = (num28 * homeRateOcc).toFixed(2);

  num29 = document.getElementById("result5").innerHTML;
  mWood[4] = document.getElementById("home5").innerHTML = (num29 * homeRateWood).toFixed(2);

  myChart.update();
}


var table = document.getElementById("myTable");
window.addEventListener("resize", function () {
  if (window.innerWidth < 1024) {
    table.classList.add("table-responsive");
  } else {
    table.classList.remove("table-responsive");
  }
});
window.addEventListener("load", function () {
  if (window.innerWidth < 1024) {
    table.classList.add("table-responsive");
  } else {
    table.classList.remove("table-responsive");
  }
});