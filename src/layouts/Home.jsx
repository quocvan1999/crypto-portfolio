import AllCrypto from "./AllCrypto";
import YourFavorites from "./YourFavorites";

const Home = () => {
  return (
    <div className="w-full flex py-5 gap-3">
      <div className="w-[50%]">
        <AllCrypto />
      </div>
      <div className="w-[50%]">
        <YourFavorites />
      </div>
    </div>
  );
};

export default Home;
