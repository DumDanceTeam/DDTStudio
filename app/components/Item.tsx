interface ItemProps {
  title: string;
  description: string;
}

export const Item = ({ title, description }: ItemProps) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="w-[10px] h-[10px] bg-black rounded-full" />
        <p className="font-bold">{title}</p>
      </div>

      <p className="text-sm text-start pl-1.5">{description}</p>
    </div>
  );
};
