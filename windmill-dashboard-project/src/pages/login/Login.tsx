import AuthLayout from '../PagesLayout/AuthLayout'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string()
        .min(6, "Password must be at least 6 characters")
        .max(100, "Password too long"),
})

const Login = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = () => {
        navigate("/")
    }

    return (
        <AuthLayout
            img="https://windmill-dashboard.vercel.app/assets/img/forgot-password-office-dark.jpeg"
            title="Login"
            footer={
                <>
                    <Button className="w-full" variant="outline">Github</Button>
                    <Button className="w-full" variant="outline">Twitter</Button>
                    <Button onClick={() => navigate("/forgot-password")} variant="link">
                        Forgot Your Password?
                    </Button>
                    <Button onClick={() => navigate("/create-account")} variant="link">
                        Create Account
                    </Button>
                </>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input type="email" placeholder="Simon Riley"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </Field>

                <Field>
                    <FieldLabel>Password</FieldLabel>
                    <Input
                        type="password"
                        placeholder="********"
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </Field>

                <Button type="submit" variant="purple" size="lg">
                    Login
                </Button>

            </form>
        </AuthLayout>
    )
}

export default Login