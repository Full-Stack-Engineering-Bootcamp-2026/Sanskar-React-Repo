
import { Card, CardHeader, CardDescription, CardContent } from '@/components/ui/card/card'
import Countup from 'react-countup'

const ResponsiveCardsSection = () => {
    const stats = [
        { title: "Total Clients", value: 6389 },
        { title: "Account Balance", value: 46760.89, prefix: "$" },
        { title: "New sales", value: 376 },
        { title: "Pending contacts", value: 35 },
    ]
    const renderedResponsiveCards = stats.map(stat =>
        <Card className='flex-1 hover:scale-110 duration-300' key={stat.title}>
            <CardHeader>
                <CardDescription>{stat.title}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className='font-inter font-bold'>{stat.prefix}{<Countup end={stat.value} duration={2} />}</p>
            </CardContent>
        </Card>
    )
    return (
        <div className='flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-4'>
            {renderedResponsiveCards}
        </div>
    )
}

export default ResponsiveCardsSection