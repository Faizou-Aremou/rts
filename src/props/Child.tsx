
export interface ChildProps {
  color: string;
  children?: React.ReactNode;
  onClick:()=> void;
}

export const Child = ({ color, onClick, children }: ChildProps) => {
  return <div> {color} 
  {children}
  <button onClick={onClick}></button>
  </div>;
};

export const ChildFC: React.FC<ChildProps> = ({ color, onClick, children }: ChildProps) => {
  return <div> {color} 
  {children}
   <button onClick={onClick}></button>
  </div>;
};