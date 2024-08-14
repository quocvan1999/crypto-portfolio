import { setCoinsAction } from "../redux/reducer/coinsReducer";

export const getCoinsAsync = async (dispatch) => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    const data = await response.json();
    const action = setCoinsAction(data);
    dispatch(action);
  } catch (error) {
    console.error("Error fetching coins:", error);
  }
};
