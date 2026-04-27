import AuthLayout from '../PagesLayout/AuthLayout'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the privacy policy"
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})

const CreateAccount = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      terms: false
    }
  })

  const onSubmit = () => {
    navigate("/login")
  }

  return (
    <AuthLayout
      img="https://windmill-dashboard.vercel.app/assets/img/forgot-password-office-dark.jpeg"
      title="Signup"
      footer={
        <>
          <Button className="w-full" variant="outline">Github</Button>
          <Button className="w-full" variant="outline">Twitter</Button>
          <Button onClick={() => navigate("/login")} variant="link">
            Already have an account? Login
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" {...register("email")} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </Field>

        <Field>
          <FieldLabel>Password</FieldLabel>
          <Input type="password" {...register("password")} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </Field>

        <Field>
          <FieldLabel>Confirm Password</FieldLabel>
          <Input type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </Field>

        <Field orientation="horizontal" className="items-center gap-2">
          <Checkbox
            
            onCheckedChange={(val) => setValue("terms", !!val)}
          />
          <Label>I agree to the privacy policy</Label>
        </Field>
        {errors.terms && (
          <p className="text-red-500 text-sm">{errors.terms.message}</p>
        )}

        <Button type="submit" variant="purple" size="lg">
          Create Account
        </Button>

      </form>
    </AuthLayout>
  )
}

export default CreateAccount