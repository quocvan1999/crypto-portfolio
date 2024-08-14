/* eslint-disable react/prop-types */
import { Avatar, Button, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteAction,
  removeFavoriteAction,
} from "../redux/reducer/coinFavorites";

const ListItem = ({ item, type }) => {
  const { image, name, current_price, id } = item;
  const dispatch = useDispatch();
  const { coinFavorites } = useSelector((state) => state.coinFavorites);

  const deleteCoin = (id) => {
    const action = removeFavoriteAction(id);
    dispatch(action);
  };

  const addCoinFavorites = (coin) => {
    const action = addFavoriteAction(coin);
    dispatch(action);
  };

  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={image} />}
        title={
          <a href="#" className="font-bold">
            {name}
          </a>
        }
        description={`USD ${current_price}`}
      />
      <Button
        type="primary"
        onClick={() => {
          type === "1" ? addCoinFavorites(item) : deleteCoin(id);
        }}
        danger={type !== "1"}
        disabled={type === "1" && coinFavorites.some((coin) => coin.id === id)}
      >
        {type === "1" ? "Add to Favorites" : "Remove"}
      </Button>
    </List.Item>
  );
};

export default ListItem;
