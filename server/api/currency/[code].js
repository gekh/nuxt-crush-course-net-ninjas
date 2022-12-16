export default defineEventHandler(async (event) => {

  const { code } = event.context.params;

  const BASE_URI = 'https://api.currencyapi.com/v3/latest';
  const { currencyKey } = useRuntimeConfig();
  const uri = `${BASE_URI}?currencies=${ code }&apikey=${currencyKey}`

  const { data } = await $fetch(uri);
  return data;

});
