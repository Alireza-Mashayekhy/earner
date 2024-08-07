import { Header } from "./Header";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-10">{children}</div>
    </>
  );
};
