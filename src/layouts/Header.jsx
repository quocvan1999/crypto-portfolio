import { SearchOutlined } from "@ant-design/icons";
import { Flex, Input } from "antd";

const Header = () => {
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
        />
      </Flex>
    </div>
  );
};

export default Header;
