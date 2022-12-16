export default defineEventHandler(async (event) => {

  // handle event param
  const { name } = getQuery(event);

  // handle post data
  const { age } = await readBody();

  // api call with private key
  const API_KEY = 'uz0cP5vThfrP75nS7CNQyOHMkDRpodPQxz6sypQR';
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=' + API_KEY);

  return {
    message: `Hello, ${name}! You are ${age} years old.`
  };

});
