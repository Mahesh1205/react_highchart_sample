import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import './barchart.css';
import chartData from '../jsons/data.json'


export default class BarChart extends React.Component {

    componentDidMount() {
    }

    getChartConfig(chartConfig) {
        const config = {
            chart: {
                type: 'column',
                renderTo: `mychart${chartConfig.index}`
            },
            credits: false,
            title: {
                text: chartConfig.title
            },
            yAxis: {               
                labels: {
                    formatter: function () {
                        return this.value + ' %';
                    }
                },

            },
            xAxis: {
                title: {
                    text: 'Duration in years'
                },
                categories: chartConfig.xAxisValues,
            },
            series: chartConfig.yAxisSeries
        };
        return config;
    }

    createSingleChart(chartConfig, index) {
        chartConfig.index = index
        const config = this.getChartConfig(chartConfig);
        return (<div id={ `chart-${index}` }>
              <HighchartsReact options={config} highcharts={Highcharts}></HighchartsReact>
              <hr size="5"></hr>
           </div>)
    }



    render() {
        return <div id='chart_container'>
            {
           chartData && chartData.map((value, index) => {
                return this.createSingleChart(value, index)
            })
            }
        </div>
    }
}