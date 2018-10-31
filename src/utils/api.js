
const appId = '5b8f82b2a67ff6355d47964d444671b6';
const baseUrl = 'http://api.openweathermap.org/data/2.5/';


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

export const getForcast = (city) => {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('forecast.json', queryStringData);

  return fetch(url)
    .then(res => res.json())
    .then(res => console.log(res));
}