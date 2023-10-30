import camelize from "camelize";
import { mocks } from "./mock";

const transformRequest = (result) => {
  const mappedResult = result.results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpen: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResult);
};

export const requestRestaurant = (requestId = "51.219448,4.402464") => {
  console.log({ requestId });
  return new Promise((resolve, reject) => {
    const mock = mocks[requestId];
    mock ? resolve(transformRequest(mock)) : reject("not found");
  });
};
