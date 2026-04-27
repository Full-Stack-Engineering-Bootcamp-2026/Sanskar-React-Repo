import { Button } from "@/components/ui/button";
import { TbCancel } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Blank = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen">
            <div className='flex flex-col items-center justify-center gap-3 font-bold font-inter'>
                <TbCancel className="text-6xl" />
                <h1 className="text-[64px]">Blank Page</h1>
                <h1 className="text-[16px]">Page found!!! But a blank Page . You cant do anything here pls go back to dashboard</h1>
                <Button className="text-[16px]" onClick={() => navigate("/")} variant={"purple"}>Go to Dashboard</Button>
            </div>
        </div>

    )
}

export default Blank