import Header from "./components/Header";
import Sidebar from "./components/_sidebar/Sidebar";


export default function LayoutDashboard({
    children,
    count,
  }: Readonly<{
    children: React.ReactNode;
    count: React.ReactNode;
  }>) {
    return (
      <div className="w-screen h-screen bg-orange-50">
        <Header />
        <div className="flex flex-row items-center">
          <Sidebar />
          {children}
          {count}
        </div>
      </div>
    );
  }