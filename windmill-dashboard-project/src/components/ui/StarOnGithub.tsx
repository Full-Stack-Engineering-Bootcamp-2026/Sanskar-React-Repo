import { FaStar } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'

const StarOnGithub = () => {
    return (
        <Button className="flex w-full justify-between h-12" size="lg" variant={'purple'}>

            <p className='flex gap-2 items-center'><FaStar /> Star this project on github</p>
            <p className='flex gap-2 items-center'>View More <FaArrowRight /></p>
        </Button>
    )
}

export default StarOnGithub