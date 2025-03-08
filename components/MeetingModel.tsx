import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"


interface meetingModelProps {
    isOpen: boolean,
    onClose: () => void,
    title: string,
    className?: string,
    handleClick?: () => void,
    buttonText?: string,
    image?: string,
    buttonIcon?: React.ReactNode,
    children?: React.ReactNode
}

const MeetingModel = ({ isOpen, onClose, title, className, handleClick, buttonText, image, buttonIcon, children }: meetingModelProps) => {

    return (
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="flex flex-col w-full max-w-[520px] gap-6 border-none bg-black text-white px-6 py-9">
                    <DialogTitle>
                        <div className="flex items-center flex-col gap-6">
                                <Image
                                    src={image || "/icons/logo.svg"}
                                    alt="image"
                                    width={72}
                                    height={72}
                                />
                            <h1 className={cn("text-3xl font-bold", className)}>{title}</h1>
                            {children}
                            <Button className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700" onClick={handleClick}>
                                {typeof buttonIcon === 'string' && (
                                    <Image
                                        src={buttonIcon}
                                        alt="button icon"
                                        width={24}
                                        height={24}
                                    />
                                )} &nbsp;
                                {buttonText || "Schedule Meeting"}
                            </Button>
                        </div>
                    </DialogTitle>
                </DialogContent>
            </Dialog>

        )
    }

    export default MeetingModel