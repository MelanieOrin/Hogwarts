import React from "react";
import ReactApexCharts from 'react-apexcharts'


export default class MyPieChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [44, 55, 13, 43, 22],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Skill A', 'Skill B', 'Skill C', 'Skill D', 'Skill E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexCharts options={this.state.options} series={this.state.series} type="pie" width={380} />
            </div>);
    }
}