import AuthLayout from '../PagesLayout/AuthLayout'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  email: z.string().email("Invalid email"),
})

const ForgotPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = () => {
    navigate("/login")
  }

  return (
    <AuthLayout
      img="https://windmill-dashboard.vercel.app/assets/img/forgot-password-office-dark.jpeg"
      title="Forgot Password"
      footer={
        <Button onClick={() => navigate("/login")} variant="ghost">
          Back to Login
        </Button>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </Field>

        <Button type="submit" variant="purple" size="lg">
          Recover Password
        </Button>

      </form>
    </AuthLayout>
  )
}

export default ForgotPassword