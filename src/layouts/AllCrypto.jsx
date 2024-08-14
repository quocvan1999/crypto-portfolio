/* eslint-disable no-unused-vars */
import { List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getCoinsAsync } from "../apis/coins.api";
import { useEffect } from "react";
import { searchCoinAction } from "../redux/reducer/coinsReducer";

import ListItem from "../components/ListItem";

const AllCrypto = () => {
  const dispatch = useDispatch();
  const { coins, coinsSearch } = useSelector((state) => state.coinsReducer);
  const [searchParam, setSearchParam] = useSearchParams();

  const handleSearch = (value) => {
    const action = searchCoinAction(value);
    dispatch(action);
  };

  const getApi = async () => {
    const action = getCoinsAsync;
    dispatch(action);
  };

  useEffect(() => {
    const valueSearch = searchParam.get("search");
    handleSearch(valueSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam]);

  useEffect(() => {
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="font-bold text-1xl">All Cryptocurrencies</h1>
      <List
        itemLayout="horizontal"
        dataSource={searchParam.get("search") ? coinsSearch : coins}
        renderItem={(item, index) => (
          <ListItem type="1" item={item} key={index} />
        )}
      />
    </div>
  );
};

export default AllCrypto;
