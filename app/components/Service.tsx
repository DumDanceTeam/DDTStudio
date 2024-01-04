interface ServiceProps{
    title: string;
    description: string
}

export const Service = ({title, description}: ServiceProps) => {
  return (
    <div className="shadow-[0px_0px_8px_1px_rgba(0,0,0,.9)] p-1 rounded-md w-full">
        <p className="font-bold">{title}</p>
        <div className="h-[160px] flex items-center justify-center">
            <p className="text-sm">
                {description}
            </p>
        </div>
    </div>
  )
}

