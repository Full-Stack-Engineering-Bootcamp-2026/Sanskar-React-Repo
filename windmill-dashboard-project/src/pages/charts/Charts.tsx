import StarOnGithub from '@/components/ui/StarOnGithub';
import ChartsComponent from './ChartsComponent';

const Charts = () => {

  return (
    <div className='w-full flex flex-col gap-6 p-5'>
      <h1 className='font-inter text-[24px] font-bold'>Charts</h1>
      <StarOnGithub />
      <h1 className='font-inter text-[16px]'> Charts are provided by <a className='text-[#AC94FA]' href="https://react-chartjs-2.js.org/">Chart.js</a> . Note that the default legends are disabled and you should provide a description for your charts in HTML. See source code for examples. </h1>
      <ChartsComponent/>
    </div>
  )
}

export default Charts