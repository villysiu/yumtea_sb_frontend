import React, {useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {useDispatch, useSelector} from "react-redux";
import {fetchMilkBySales} from "../adminSlice";




const MilkChart = () => {
    const dispatch = useDispatch()
    const {milkBySales, fetchMilkBySalesStatus} = useSelector(state=>state.admin)
    useEffect(() => {
        if(fetchMilkBySalesStatus === 'idle')
            dispatch(fetchMilkBySales())
    }, []);


    ChartJS.register(ArcElement, Tooltip, Legend);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Popular Milk Choice',
            },
        },
    };
    const data = {


        labels: milkBySales.map(mk=>mk[1]),
        datasets: [
            {
                label: '# of Votes',
                data: milkBySales.map(mk=>mk[2]),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
    <div style={{"width": "50%"}}>
    <Pie data={data} options={options} />;
        </div>)
}

export default MilkChart