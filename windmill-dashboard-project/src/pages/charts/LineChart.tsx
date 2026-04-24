import { Card, CardContent } from '@/components/ui/card/card'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
const lineLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const lineData = {
    labels: lineLabels,
    datasets: [
        {
            label: 'Yamaha',
            data: lineLabels.map(() =>
                faker.number.int({ min: 1000, max: 100000 })
            ),
            borderColor: '#7E3AF2',
            backgroundColor: '#7E3AF2',
            tension: 0.3
        },
        {
            label: 'Kawasaki',
            data: lineLabels.map(() =>
                faker.number.int({ min: 1000, max: 100000 })
            ),
            borderColor: '#0694A2',
            backgroundColor: '#0694A2',
            tension: 0.3
        }
    ],
}
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Yamaha vs Kawasaki sales',
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

const LineChart = () => {
    return (
        <Card className='col-span-1'>
            <CardContent className='h-80'>
                Lines
                <Line data={lineData} options={options} />
            </CardContent>
        </Card>
    )
}

export default LineChart