import React from "react";
import ReactApexCharts from 'react-apexcharts'


export default class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "New Students",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 90, 69, 91, 9]
      }],
      options: {
        chart: {
          height: 300,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Student Enrollment 2020',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexCharts options={this.state.options} series={this.state.series} type="line" height={300} />
      </div>
    );
  }
}


// export default class LineChart extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         series: [{
//           name: 'XYZ MOTORS',
//           series: [{
//             data: [{
//               x: new Date('2018-02-12').getTime(),
//               y: 76
//             }, {
//               x: new Date('2018-02-12').getTime(),
//               y: 76
//             }]
//           }], 
//           xaxis: {
//             type: 'datetime'
//           } 
//         }],
//         options: {
//           chart: {
//             type: 'area',
//             stacked: false,
//             height: 350,
//             zoom: {
//               type: 'x',
//               enabled: true,
//               autoScaleYaxis: true
//             },
//             toolbar: {
//               autoSelected: 'zoom'
//             }
//           },
//           dataLabels: {
//             enabled: false
//           },
//           markers: {
//             size: 0,
//           },
//           title: {
//             text: 'New Students',
//             align: 'center'
//           },
//           fill: {
//             type: 'gradient',
//             gradient: {
//               shadeIntensity: 1,
//               inverseColors: false,
//               opacityFrom: 0.5,
//               opacityTo: 0,
//               stops: [0, 90, 100]
//             },
//           },
//           yaxis: {
//             labels: {
//               formatter: function (val) {
//                 return (val / 1000000).toFixed(0);
//               },
//             },
//             title: {
//               text: 'Price'
//             },
//           },
//           xaxis: {
//             type: 'datetime',
//           },
//           tooltip: {
//             shared: false,
//             y: {
//               formatter: function (val) {
//                 return (val / 1000000).toFixed(0)
//               }
//             }
//           }
//         },
//       };
//     }
//     render() {
//       return (
//   <div id="chart">
// <ReactApexCharts options={this.state.options} series={this.state.series} type="area" height={350} />
// </div>
//       );
//     }
//   }