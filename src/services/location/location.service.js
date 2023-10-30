import { locations } from "./location.mock";

const transformRequest = (result) => {
  const mappedResult = result.results[0];
  const { lng, lat } = mappedResult.geometry.location;
  return { lng, lat };
};

export const requestLocation = (searchTerm = "antwerp") => {
  return new Promise((resolve, reject) => {
    const mock = locations[searchTerm.toLocaleLowerCase()];
    mock ? resolve(transformRequest(mock)) : reject("not found");
  });
};
