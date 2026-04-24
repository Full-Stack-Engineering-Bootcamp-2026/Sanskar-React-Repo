import React from 'react'
import { Button} from '@/components/ui/button'
import { FaHeart, FaPen } from "react-icons/fa";
import StarOnGithub from '@/components/ui/StarOnGithub';

const Buttons = () => {
  type ButtonSize = React.ComponentProps<typeof Button>["size"]
  const buttons: {
    label: string,
    size: ButtonSize
    disabled?: boolean,
    hover?: string,
    variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "purple" | "link" | null | undefined
  }[] = [
      { label: "Large", size: "lg" },
      { label: "Destructive", size: "lg", variant: "destructive" },
      { label: "Ghost", size: "lg", variant: "ghost" },
      { label: "Outline", size: "lg", variant: "outline" },
      { label: "Small", size: "sm" },
      { label: "Extra Small", size: "xs" },
      { label: "Disabled", size: "xs", disabled: true, hover: "hover:cursor-not-allowed" }
    ]
  const renderedButtons = buttons.map(button =>
    <Button className={`hover:cursor-pointer`} size={button.size} variant={!button.variant ? 'purple' : button.variant} disabled={button.disabled}>
      {button.label}
    </Button>
  )

  return (
    <div className='p-4 flex flex-col gap-6'>
      <h1 className='font-inter text-[24px] font-bold'>Buttons</h1>
      <StarOnGithub />
      <h1>Sizes</h1>
      <div className="flex flex-col items-center  gap-8 sm:flex-row sm:items-end">
        {renderedButtons}
      </div>
      <h1 className='font-inter text-[16px]'>Apply w-full to any button to create a block level button.</h1>
      <h1>Icons</h1>
      <div className="flex items-center  gap-8 sm:flex-row">
        <Button className="w-1/4 flex hover:cursor-pointer" size="lg" variant={'purple'}>
          <h1>Icon Right</h1> <FaHeart />
        </Button>
        <Button className="w-1/4 flex hover:cursor-pointer" size="lg" variant={'purple'}>
          <FaHeart /> <h1>Icon Left</h1>
        </Button>
        <Button className='hover:cursor-pointer' size="lg" variant={'purple'}>
          <FaHeart />
        </Button>
        <Button className='hover:cursor-pointer' size="lg" variant={'purple'}>
          <FaPen />
        </Button>
      </div>
    </div>
  )
}

export default Buttons