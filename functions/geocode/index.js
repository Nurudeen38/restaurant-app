const url = require("url");
const { locations: locationsMock } = require("./geocode.mock");

module.exports.geocodeRequest = (request, response) => {
  const query = url.parse(request.url, true).query;
  const city = query.city;
  response.json(locationsMock[city.toLowerCase()]);
};
