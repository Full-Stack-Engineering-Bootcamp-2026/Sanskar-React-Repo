import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card"
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"


const Login =()=> {
    const navigate = useNavigate();
    return (
        <Card className="relative grid mx-auto w-full max-w-lg  pt-0">
            <img
                src="https://windmill-dashboard.vercel.app/assets/img/forgot-password-office-dark.jpeg"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader className="flex flex-col gap-4">
                <CardTitle>Login</CardTitle>
                <CardDescription className="w-full flex flex-col gap-3">
                    <Field>
                        <FieldLabel htmlFor="input-demo-api-key">Email</FieldLabel>
                        <Input id="email" type="password" placeholder="Simon Riley" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="input-demo-api-key">Password</FieldLabel>
                        <Input id="password" type="password" placeholder="********" />
                    </Field>
                <Button onClick={()=>navigate("/")} variant={"purple"} size={"lg"}>Login</Button>
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col gap-3">
                <Button className="w-full" variant={"outline"}>Github</Button>
                <Button className="w-full" variant={"outline"}>Twitter</Button>
                <Button onClick={()=>navigate("/forgot-password")} variant={"link"}>Forgot Your Password?</Button>
                <Button onClick={()=>navigate("/create-account")} variant={"link"}>Create Account</Button>
            </CardFooter>
        </Card>


    )
}

export default Login
