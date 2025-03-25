import React, {useEffect} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {useDispatch, useSelector} from "react-redux";
import {fetchSalesByMenuitem} from "../adminSlice"

const ChartComponent = ()=> {
    const dispatch = useDispatch()
    const {salesByMenuitem, fetchSalesByMenuitemStatus} = useSelector(state=>state.admin)
    useEffect(() => {
        if(fetchSalesByMenuitemStatus === 'idle')
            dispatch(fetchSalesByMenuitem(0))
    }, []);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Sales by Menuitem',
            },
        },
    };
    const labels = salesByMenuitem.map(m=>m.menuitemTitle)
    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Sales in 2025',
                // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                data: salesByMenuitem.map(m=>m.count),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Bar options={options} data={data} />;
}
export default ChartComponent
