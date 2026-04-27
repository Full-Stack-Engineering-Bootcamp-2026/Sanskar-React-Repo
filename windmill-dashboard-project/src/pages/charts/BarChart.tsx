import { Card, CardContent } from '@/components/ui/card/card'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                display: false
            }
        }
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Sekiro: Shadows Die Twice',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: '#0694A2',
        },
        {
            label: 'Ghost of Tsushima',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: '#7E3AF2',
        },
    ],
};
const BarChart = () => {
    return (
        <Card className='col-span-1 py-10'>
            <CardContent className='h-60'>
                Bars
                <Bar options={options} data={data} />
            </CardContent>
        </Card>
    )
}

export default BarChart