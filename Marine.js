const lat = 35.300289;
const lng = 139.481155;
const api_json_data = [];
const label = [];
const wave_data = [];
const water_data = [];
const wind_data = [];
const wind_dir = [];

fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}`, {
  headers: {
    Authorization:
      "fa3595f6-3a9a-11ea-acb4-0242ac130002-fa3597a4-3a9a-11ea-acb4-0242ac130002"
  }
})
  .then(response => response.json())
  .then(jsonData => {
    // Do something with response data.
    console.log(jsonData);

    for (i = 0; i < 160; i++) {
      api_json_data.push(parseFloat(jsonData.hours[i].airTemperature[0].value));
      if (i % 24 == 0) {
        label.push(parseFloat(new Date(jsonData.hours[i].time).getDate()));
      } else {
        label.push("");
      }
      water_data.push(parseFloat(jsonData.hours[i].waterTemperature[0].value));
      wave_data.push(parseFloat(jsonData.hours[i].waveHeight[0].value));
      wind_data.push(parseFloat(jsonData.hours[i].windSpeed[0].value));
      wind_dir.push(parseFloat(jsonData.hours[i].windDirection[0].value));
    }

    for (i = 0; i < 90; i++) {
      $("#chart4").append(
        `<img src="./navigator.svg" width="12.85rem" style="transform: rotate(` +
          (wind_dir[i] - 45) +
          `deg);"/>`
      );
    }

    $("#current").append(
      `<div id="temp">
          <p id="temp2">
            気温
          </p>
          <p>
            ` +
        parseInt(api_json_data[0]) +
        `℃
          </p>
        </div>
        
        <div id="temp">
          <p id="temp2">
            水温
          </p>
          <p>
          ` +
        parseInt(water_data[0]) +
        `℃
          </p>
        </div>
        <div id="temp">
          <p id="temp2">波の高さ</p>
          <p>
          ` +
        wave_data[0] +
        `m
          </p>
        </div>
        <div id="temp">
          <p id="temp2">風速</p>
          <p>
          ` +
        parseInt(wind_data[0]) +
        `m/s
          </p>
        </div>
        <p id="temp3">
          風向き
        </p>
        <div id="arrow">
          <img src="./navigator.svg" width="50rem"style="transform: rotate(` +
        (wind_dir[0] - 45) +
        `deg);"/>
        </div>`
    );

    console.log(api_json_data);
    console.log(wave_data);
    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          // {
          //   label: "波の高さ(m)",
          //   backgroundColor: "pink",
          //   borderColor: "pink",
          //   data: wave_data
          // },
          {
            label: "気温(℃)",
            backgroundColor: "rgb(73, 72, 72)",
            borderColor: "rgb(73, 72, 72)",
            data: api_json_data
          },
          {
            label: "水温(℃)",
            backgroundColor: "rgb(73, 72, 72)",
            borderColor: "rgb(73, 72, 72)",
            data: water_data
          }
          // {
          //   label: "風速(m)",
          //   backgroundColor: "yellow",
          //   borderColor: "yellow",
          //   data: wind_data
          // }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              display: true,
              stacked: false,
              gridLines: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false
              }
            }
          ]
        }
      }
    });

    var ctx2 = document.getElementById("myChart2").getContext("2d");
    var chart2 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "波の高さ(m)",
            backgroundColor: "rgb(73, 72, 72)",
            borderColor: "rgb(73, 72, 72)",
            data: wave_data
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              display: true,
              stacked: false,
              gridLines: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false
              }
            }
          ]
        }
      }
    });

    var ctx3 = document.getElementById("myChart3").getContext("2d");
    var chart3 = new Chart(ctx3, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "風速(m)",
            backgroundColor: "rgb(73, 72, 72)",
            borderColor: "rgb(73, 72, 72)",
            data: wind_data
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              display: true,
              stacked: false,
              gridLines: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false
              }
            }
          ]
        }
      }
    });

    chart.update();
    chart2.update();
    chart3.update();
  });

//https://docs.stormglass.io/?language=JavaScript#authentication 波の情報のAPI

//https://wood-roots.com/web/javascript/891
//グラフの描画
//https://www.windguru.cz/208567
//参考はこれです。ここでもAPIを配布してるみたいですが管理者しか取得できないみたいなのでやめました。

//練習できるかどうかもjsonデータを参照して、自動的に算出するようにする。selectboxの廃止
//https://hacknote.jp/archives/27955/
