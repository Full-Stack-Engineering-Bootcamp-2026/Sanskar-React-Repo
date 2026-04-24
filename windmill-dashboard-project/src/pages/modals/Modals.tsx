import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import StarOnGithub from '@/components/ui/StarOnGithub';
{/* <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card> */}

const Modals = () => {
  return (
    <div className='flex flex-col gap-6 p-4  md:gap-6 md:p-4'>
      <h1 className='font-inter text-[24px] font-bold'>Modals</h1>
      <StarOnGithub />
      <Card className='w-full md:w-1/2'>
        <CardContent>
          <p className='text-[#7F8082]'> This is possibly <b>the most accessible a modal can get</b>  , using JavaScript. When opened, it uses assets/js/focus-trap.js to create a focus trap , which means that if you use your keyboard to navigate around, focus won't leak to the elements behind, staying inside the modal in a loop, until you take any action.

            Also, on small screens it is placed at the bottom of the screen, to account for larger devices and make it easier to click the larger buttons. </p>
        </CardContent>
      </Card>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className='w-25' variant={"purple"} size={"lg"}>
            Open Modal
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel  variant={"outline"}>Cancel</AlertDialogCancel>
            <AlertDialogAction variant={"purple"}>Accept</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Modals