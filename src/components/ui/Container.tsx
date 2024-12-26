import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[1200px] p-4">{children}</div>
    </div>
  );
};

export default Container;
