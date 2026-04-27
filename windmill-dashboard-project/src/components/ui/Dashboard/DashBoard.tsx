import ResponsiveCardsSection from "@/pages/cards/ResponsiveCardsSection"
import StarOnGithub from "../StarOnGithub"
import TableComponent from "@/pages/tables/TableComponent"
import ChartsComponent from "@/pages/charts/ChartsComponent"

const DashBoard = () => {
  return (
    <div className="flex flex-col gap-10 p-4">
        <h1 className='font-inter text-[24px] font-bold'>Dashboard</h1>
        <StarOnGithub/>
        <ResponsiveCardsSection/>
        <TableComponent/>
        <ChartsComponent/>
    </div>
  )
}

export default DashBoard