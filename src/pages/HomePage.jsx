import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1024px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
