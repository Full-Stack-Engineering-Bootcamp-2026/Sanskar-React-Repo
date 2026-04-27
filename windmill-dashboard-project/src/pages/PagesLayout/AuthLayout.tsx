import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card"
import type { AuthLayoutPropTypes } from "@/types/types"

const AuthLayout = ({ img,title, children, footer }:AuthLayoutPropTypes) => {
  return (
    <Card className="mx-auto w-3/4 overflow-hidden pt-0">
      <div className="grid md:grid-cols-2">
        <div className="hidden md:block">
          <img
            src={img}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>

            <CardDescription className="flex flex-col gap-3">
              {children}
            </CardDescription>
          </div>

          <CardFooter className="flex flex-col gap-3 p-0 mt-6">
            {footer}
          </CardFooter>
        </div>

      </div>
    </Card>
  )
}

export default AuthLayout