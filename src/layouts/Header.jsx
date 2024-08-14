/* eslint-disable no-unused-vars */
import { SearchOutlined } from "@ant-design/icons";
import { Flex, Input } from "antd";
import { useSearchParams } from "react-router-dom";

const Header = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const handleChangeInput = (value) => {
    setSearchParam({ search: value });
  };
  return (
    <div className="w-full bg-white shadow-sm">
      <Flex
        align="center"
        justify="space-between"
        className="py-2 max-w-[1024px] mx-auto"
      >
        <h1 className="font-bold text-3xl">Crypto Portfolio</h1>
        <Input
          size="large"
          className="w-[30%]"
          placeholder="Search enter"
          prefix={<SearchOutlined />}
          onChange={(e) => {
            handleChangeInput(e.target.value);
          }}
        />
      </Flex>
    </div>
  );
};

export default Header;
