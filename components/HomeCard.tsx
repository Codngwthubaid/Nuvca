import Image from "next/image"


interface homeCardProps {
    className: string;
    title: string;
    img: string;
    desc: string;
    handleClick?: () => void
}

export const HomeCard = ({ className, img, title, desc, handleClick }: homeCardProps) => {
    return (
        <div className={`${className} flex flex-col justify-between w-full px-4 py-6 rounded-lg sm:min-h-[150px] min-h-[250px] xl:max-w-[270px] cursor-pointer`} onClick={handleClick}>
            <div className='flex justify-center items-center size-12 rounded-xl'>
                <Image
                    src={img || 'undefined logo'}
                    alt='add-meeting'
                    width={24}
                    height={24}
                />
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-xl'>{title}</h1>
                <p className=' text-md font-normal'>{desc}</p>
            </div>
        </div>
    )
}
