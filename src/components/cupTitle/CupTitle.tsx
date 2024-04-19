interface CupTitleProps {
  title: string;
}

const CupTitle = ({ title }: CupTitleProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-2xl font-bold">{title}</div>
    </div>
  );
};

export default CupTitle;
