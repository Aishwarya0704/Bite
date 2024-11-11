type CardI = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Card({ children, onClick }: CardI) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer shadow-lg border border-slate-200 rounded-lg md:hover:scale-105 duration-200"
    >
      {children}
    </div>
  );
}
