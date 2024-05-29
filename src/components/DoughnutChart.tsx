'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1275, 2552, 6701],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Bank1', 'Bank2', 'Bank3']
    }
    return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 14220eb (add functionality in sidebar)
        <Doughnut data={data}
            options={{
                cutout: "60%",
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
        />
<<<<<<< HEAD
=======
        <Doughnut data={data} />
>>>>>>> 21f27ef (add bank chart)
=======
>>>>>>> 14220eb (add functionality in sidebar)
    )

}

export default DoughnutChart