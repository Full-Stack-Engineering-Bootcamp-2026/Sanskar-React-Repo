import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

import { Label } from "@/components/ui/label"
import StarOnGithub from "@/components/ui/StarOnGithub"
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from "@/components/ui/field"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card"
import { Switch } from "@/components/ui/switch"
const schema = z.object({
  name: z.string().min(3, "Your name doesnt exist"),
  accountType: z.enum(["current", "savings"]),
  limit: z.string().min(1, "Select limit"),
  message: z.string().min(5, "Enter a long message"),

  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept terms and conditions",
  }),
})
type FormData = z.infer<typeof schema>
export default function FormsPage() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [limit, setLimit] = useState("")
  const handleSelect = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const formSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
  })


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })
  const plans = [
    {
      id: "starter",
      title: "Starter (100K tokens/month)",
      description: "For everyday use with basic features.",
    },
    {
      id: "pro",
      title: "Pro (1M tokens/month)",
      description: "For advanced AI usage with more features.",
    },
    {
      id: "enterprise",
      title: "Enterprise (Unlimited tokens)",
      description: "For large teams and heavy usage.",
    },
  ] as const

  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="font-inter text-[24px] font-bold">Forms</h1>
      <StarOnGithub />
      <h2 className="text-[18px] font-bold font-inter">Elements</h2>
      <div className="bg-white dark:bg-sidebar rounded-lg shadow p-6 space-y-6">


        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <div className="flex flex-col gap-2">
            <Label>Name</Label>

            <div className="relative">

              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />

              <Input
                placeholder="Ezio Auditore"
                {...register("name")}
                className="pl-10"
              />

            </div>


            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label>Account Type</Label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  className="accent-purple-600"
                  type="radio"
                  value="current"
                  {...register("accountType")}
                />
                Current
              </label>

              <label className="flex items-center gap-2">
                <input
                  className="accent-purple-600"
                  type="radio"
                  value="savings"
                  {...register("accountType")}
                />
                Savings
              </label>
            </div>
            {errors.accountType && (
              <p className="text-red-500 text-sm">
                {errors.accountType.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label>Requested Limit</Label>

            <Accordion type="single" collapsible className="mt-2">

              <AccordionItem value="limit" className="border rounded-md">


                <AccordionTrigger className="px-3 py-2 text-sm">
                  {limit ? `$${limit}` : "Select limit"}
                </AccordionTrigger>


                <AccordionContent className="p-3 space-y-2">

                  {["1000", "5000", "10000"].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer">

                      <input
                        type="radio"
                        name="limit"
                        value={item}
                        checked={limit === item}
                        onChange={() => setLimit(item)}
                      />

                      <span>${item}</span>

                    </label>
                  ))}

                </AccordionContent>

              </AccordionItem>

            </Accordion>
          </div>


          <div className="flex flex-col gap-2">
            <Label>Multiselect</Label>

            <Accordion type="single" collapsible className="mt-2">

              <AccordionItem value="multi" className="border rounded-md">

                <AccordionTrigger className="px-3 py-2 text-sm">
                  {selectedOptions.length > 0
                    ? selectedOptions.join(", ")
                    : "Select options"}
                </AccordionTrigger>


                <AccordionContent className="p-3 space-y-2">

                  {["Option 1", "Option 2", "Option 3", "Option 4"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">

                      <input
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleSelect(option)}
                      />

                      <span>{option}</span>

                    </label>
                  ))}

                </AccordionContent>

              </AccordionItem>

            </Accordion>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Message</Label>
            <textarea
              {...register("message")}
              placeholder="Enter some content for no reason at all :)"
              className="w-full border rounded-lg p-2 bg-transparent"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-start gap-2">

            <input
              type="checkbox"
              {...register("terms")}
              className="mt-1 accent-purple-600"
            />

            <label className="text-sm text-gray-700 dark:text-gray-300">
              I agree to the Terms & Conditions

            </label>

          </div>

          {errors.terms && (
            <p className="text-red-500 text-sm">
              {errors.terms.message}
            </p>
          )}
          <Button type="submit" className="w-25" variant={'purple'}>
            Submit
          </Button>

        </form>
      </div>
      <h2 className="text-[18px] font-inter font-bold">Radio Groups</h2>
      <div className="bg-white dark:bg-sidebar rounded-lg shadow p-6 space-y-6">
        <Card className="bg-white dark:bg-sidebar w-full ">
          <CardHeader>
            <CardTitle>Subscription Plan</CardTitle>
            <CardDescription>
              See pricing and features for each plan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="form-rhf-radiogroup" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="plan"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FieldSet data-invalid={fieldState.invalid}>
                      <FieldLegend>Plan</FieldLegend>
                      <FieldDescription>
                        You can upgrade or downgrade your plan at any time.
                      </FieldDescription>
                      <RadioGroup
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                        aria-invalid={fieldState.invalid}
                      >
                        {plans.map((plan) => (
                          <FieldLabel
                            key={plan.id}
                            htmlFor={`form-rhf-radiogroup-${plan.id}`}
                          >
                            <Field
                              orientation="horizontal"
                              data-invalid={fieldState.invalid}
                            >
                              <FieldContent>
                                <FieldTitle>{plan.title}</FieldTitle>
                                <FieldDescription>
                                  {plan.description}
                                </FieldDescription>
                              </FieldContent>
                              <RadioGroupItem
                                value={plan.id}
                                id={`form-rhf-radiogroup-${plan.id}`}
                                aria-invalid={fieldState.invalid}
                              />
                            </Field>
                          </FieldLabel>
                        ))}
                      </RadioGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldSet>
                  )}
                />
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Field orientation="horizontal">
              <Button type="button" variant="outline" onClick={() => form.reset()}>
                Reset
              </Button>
              <Button type="submit" form="form-rhf-radiogroup" variant={"purple"}>
                Save
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </div>
      <h2 className="text-[18px] font-inter font-bold">Switch</h2>
      <div className="bg-white dark:bg-sidebar rounded-lg shadow p-6 space-y-6">
        <Card className="bg-white dark:bg-sidebar w-full">
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>
              Manage your account security preferences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="form-rhf-switch" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="twoFactor"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      orientation="horizontal"
                      data-invalid={fieldState.invalid}
                    >
                      <FieldContent>
                        <FieldLabel htmlFor="form-rhf-switch-twoFactor">
                          Multi-factor authentication
                        </FieldLabel>
                        <FieldDescription>
                          Enable multi-factor authentication to secure your account.
                        </FieldDescription>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </FieldContent>
                      <Switch
                        id="form-rhf-switch-twoFactor"
                        name={field.name}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-invalid={fieldState.invalid}
                      />
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Field orientation="horizontal">
              <Button type="button" variant="outline" onClick={() => form.reset()}>
                Reset
              </Button>
              <Button type="submit" form="form-rhf-switch" variant={"purple"}>
                Save
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}