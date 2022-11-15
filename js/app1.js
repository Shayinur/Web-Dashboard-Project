const alertBanner = document.getElementById("alert");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const trafficCanvas = document.getElementById("traffic-chart");

// create the html for the banner

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor:'rgba(206, 41, 255, 0.17)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
 scales: { y: {
        beginAtZero: true
      }
 }, plugins: {
 legend: {
        display: false
      }
 } };


 let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });

  const dailyCanvas = document.getElementById("daily-chart");

  //daily traffic bar chart data

const dailyData = {
    labels:["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label:'# of Hits',
        data: [75,114,185,125,225,200,100],
        backgroundColor: '#7477BF',
        borderWidth: 1

    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legends: {
            display: false
        }
    }
};

const dailyChart = new Chart (dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});