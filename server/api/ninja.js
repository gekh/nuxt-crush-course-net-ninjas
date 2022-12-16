export default defineEventHandler(async (event) => {

  // api call with private key
  const API_KEY = 'uz0cP5vThfrP75nS7CNQyOHMkDRpodPQxz6sypQR';
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=' + API_KEY);

  return data;

});
