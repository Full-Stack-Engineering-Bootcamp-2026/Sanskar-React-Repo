import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card"
import {
  Field,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <Card className="relative mx-auto w-full  max-w-lg pt-0">
      <img
        src="https://windmill-dashboard.vercel.app/assets/img/forgot-password-office-dark.jpeg"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle className="">Forgot Password</CardTitle>
        <CardDescription>
          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Email</FieldLabel>
            <Input  id="input-demo-api-key" type="password" placeholder="Simon Riley" />
          </Field>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={() => navigate("/login")} variant={"purple"} size={"lg"}>Recover Password</Button>
      </CardFooter>
    </Card>
  )
}
export default ForgotPassword