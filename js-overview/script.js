// toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

// toggle between hiding and showing the dropdown content
function yourFunction() {
    document.getElementById("dropbell").classList.toggle("show");
}

let arrows = document.querySelectorAll(".iocn-link");

function removeAllClassShowMenu() {
    let class_name = "kk";
    let elements = document.getElementsByClassName(class_name);

    for (element of elements) {
        element.classList.remove(class_name);
    }
}

arrows.forEach((arrow) => {
    arrow.addEventListener("click", (el) => {
        removeAllClassShowMenu();
        arrow.parentElement.classList.toggle("showMenu");
    });
});

// for (var i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", (e) => {
//     let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
//     arrowParent.classList.toggle("showMenu");
//   });
// }
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu-alt-left");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

//chart 01
var options = {
    chart: {
        height: 500,
        type: "area",
    },
    colors: ["#0F52BA", "#FFB740"],
    dataLabels: {
        enabled: false,
    },
    series: [{
            name: "Series 1",
            data: [50, 85, 65, 160, 130, 180, 100],
        },
        {
            name: "Series 2",
            data: [100, 79, 150, 120, 70, 100, 50],
        },
    ],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.0,
            stops: [0, 90, 100],
        },
    },
    xaxis: {
        categories: ["01 Apr", "02 Apr", "03 Apr", "04 Apr", "05 Apr", "06 Apr", "07 Apr"],
        legend: {
            show: false,
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
//.chart 2

var options = {
    chart: {
        height: 300,
        type: "bar",
    },
    colors: ["#0F52BA", "#FFB740"],
    plotOptions: {
        bar: {
            barHeight: "80%",
            barWidth: "10px",
            borderRadius: 8, // Here is the issue ...
        },
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
            name: "Series 1",
            data: [100, 150, 200, 90, 160, 165],
        },
        {
            name: "Series 2",
            data: [50, 110, 70, 50, 140, 100],
        },
    ],
    xaxis: {
        categories: ["01 Apr", "02 Apr", "03 Apr", "04 Apr", "05 Apr", "06 Apr", "07 Apr"],
        labels: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
    },
    legend: {
        show: false,
    },
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);

chart.render();
//chart3
var options = {
    chart: {
        height: 300,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: "Series 1",
        data: [50, 20, 35, 25, 55, 15, 25],
    }, ],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
        },
    },
    xaxis: {
        categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan"],

        labels: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
    },
    legend: {
        show: false,
    },
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);

chart.render();
//chart4
var options = {
    chart: {
        height: 300,
        stacked: true,
        stackType: "100%",
        type: "bar",
    },
    colors: ["#0F52BA", "#C9CCD5"],
    plotOptions: {
        bar: {
            barHeight: "80%",
            barWidth: "10px",
            borderRadius: 10, // Here is the issue ...
        },
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
            name: "Series 1",
            data: [90, 100, 100, 70, 100, 40, 70],
        },
        {
            name: "Series 2",
            data: [100, 70, 50, 100, 30, 100, 100],
        },
    ],
    xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],

        labels: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
    },
    legend: {
        show: false,
    },
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);

chart.render();
//chart5
// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Exclude Antartica
polygonSeries.exclude = ["AQ"];

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#aac6f0");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#1f73c2");

// Add zoom control
chart.zoomControl = new am4maps.ZoomControl();

//chart6

var options = {
    chart: {
        height: 300,
        type: "donut",
    },
    dataLabels: {
        enabled: false,
    },
    series: [50, 55, 41],
    xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],

        labels: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
    },
    legend: {
        show: false,
    },
};

var chart = new ApexCharts(document.querySelector("#chart6"), options);

chart.render();