// npm install apexcharts --save
// https://apexcharts.com
import React from "react";
import './Dashboard.css';
import LineChart from '../LineChart';
import MyPieChart from '../MyPieChart';


export default function Dashboard() {
  return (
    <div className='dashboard'>
      <LineChart />
      <MyPieChart />
    </div>
  )
}



