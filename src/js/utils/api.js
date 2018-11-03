
const appId = '26df31deaf1c433292f92242183110';
const baseUrl = 'https://api.apixu.com/v1/';


const prepRouteParams = (queryStringData) => {
  return Object.keys(queryStringData)
    .map((key) => {
      return `${key}=${encodeURIComponent(queryStringData[key])}`;
    }).join('&');
};

const prepUrl = (type, queryStringData) => {
  return `${baseUrl}${type}?${prepRouteParams(queryStringData)}`;
};

const getQueryStringData = (city) => {
  return {
    key: appId,
    q: city,
    days: 5,
    lang: 'ru',
  };
};

export const getForecast = (city) => {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('forecast.json', queryStringData);

  return fetch(url)
    .then(res => res.json());
}