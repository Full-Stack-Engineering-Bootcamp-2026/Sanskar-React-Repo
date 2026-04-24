import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent } from '@/components/ui/card/card';

ChartJS.register(ArcElement, Tooltip, Legend);
const doughNutdata = {
  labels: ['Shirts', 'Shoes', 'Bags'],
  datasets: [
    {
      data: [1, 1, 1],
      backgroundColor: [
        "#1C64F2", "#7E3AF2", "#0694A2"
      ]
    },
  ],
};
const options: ChartOptions<"doughnut"> = { //type warning solve krne ke liye
  cutout: "80%",
  maintainAspectRatio:false,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
}
const DoughNutChart = () => {
  return (
    <Card className='col-span-1'>
      <CardContent className='h-80 flex flex-col items-center'>
        Doughnut/Pie
        <Doughnut data={doughNutdata} options={options} />
      </CardContent>
    </Card>
  )
}

export default DoughNutChart