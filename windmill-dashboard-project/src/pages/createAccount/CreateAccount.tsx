import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"


const Login = () => {
  const navigate = useNavigate();
  return (
    <Card className="relative mx-auto w-full max-w-lg  pt-0">
      <img
        src="https://windmill-dashboard.vercel.app/assets/img/forgot-password-office-dark.jpeg"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 h-50"
      />
      <CardHeader className="flex flex-col gap-4">
        <CardTitle>Signup</CardTitle>
        <CardDescription className="w-full flex flex-col gap-3">
          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Email</FieldLabel>
            <Input id="email" type="password" placeholder="Simon Riley" />
          </Field>
          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Password</FieldLabel>
            <Input id="password" type="password" placeholder="********" />
          </Field>
          <Field>
            <FieldLabel htmlFor="input-demo-api-key">Confirm Password</FieldLabel>
            <Input id="password" type="password" placeholder="********" />
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="terms-checkbox" name="terms-checkbox" />
            <Label htmlFor="terms-checkbox">I agree to the privacy policy</Label>
          </Field>
          <Button onClick={() => navigate("/login")} variant={"purple"} size={"lg"}>Create Account</Button>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full" variant={"outline"}>Github</Button>
        <Button className="w-full" variant={"outline"}>Twitter</Button>
        <Button onClick={()=>navigate("/login")} variant={"link"} className="text-violet-500">Already have an account? Login</Button>
      </CardFooter>
    </Card>


  )
}

export default Login
