import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card/card'
import StarOnGithub from '@/components/ui/StarOnGithub'
import ResponsiveCardsSection from './ResponsiveCardsSection'


const Cards = () => {
  const infoCards = [
    {
      title: "Revenue",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.",
    },
    {
      title: "Colored card",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.",
      className: "bg-[#7E3AF2] text-white",
    },
  ]

  

  const renderedInfoCards = infoCards.map(infoCard =>
    <Card key={infoCard.title} className={`flex-1 ${infoCard.className ?? ""} hover:scale-105 duration-300`}>
      <CardHeader>
        <CardTitle>{infoCard.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{infoCard.content}</p>
      </CardContent>
    </Card>
  )
  return (
    <div className='w-full flex flex-col gap-6 p-5'>
      <div className='flex flex-col gap-4 w-full'>
        <h1 className='font-inter font-bold text-[24px]'>Cards</h1>
       <StarOnGithub/>
        <h1 className='font-inter font-bold text-[18px]'>Big Section Cards</h1>
        <Card className='hover:scale-110 duration-300' >
          <CardContent>
            <p> Large, full width sections goes here </p>
          </CardContent>
        </Card>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-inter font-bold text-[18px]'>Responsive Cards</h1>
        <ResponsiveCardsSection/>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-inter font-bold text-[18px]'>Cards with title</h1>
        <div className='flex flex-col gap-4 md:flex-row md:gap-4 md:flex-wrap'>
          {renderedInfoCards}

        </div>

      </div>
    </div>
  )
}

export default Cards