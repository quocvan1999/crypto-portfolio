import { List } from "antd";
import { useSelector } from "react-redux";
import ListItem from "../components/ListItem";

const YourFavorites = () => {
  const { coinFavorites } = useSelector((state) => state.coinFavorites);
  return (
    <div>
      <h1 className="font-bold text-1xl">Your Favorites</h1>
      <List
        itemLayout="horizontal"
        dataSource={coinFavorites}
        renderItem={(item, index) => (
          <ListItem type="2" item={item} key={index} />
        )}
      />
    </div>
  );
};

export default YourFavorites;
