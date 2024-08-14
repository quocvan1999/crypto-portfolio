import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getCoinsAsync } from "../apis/coins.api";
import { useEffect } from "react";
import ListItem from "../components/ListItem";

const AllCrypto = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.coinsReducer);

  const getApi = async () => {
    const action = getCoinsAsync;
    dispatch(action);
  };

  useEffect(() => {
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="font-bold text-1xl">All Cryptocurrencies</h1>
      <List
        itemLayout="horizontal"
        dataSource={coins}
        renderItem={(item, index) => (
          <ListItem type="1" item={item} key={index} />
        )}
      />
    </div>
  );
};

export default AllCrypto;
