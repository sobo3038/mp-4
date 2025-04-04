//lib/fetchCocktails.ts: this gets the cocktail data from the api

export default async function fetchCocktails(name: string) {
    const apiKey = process.env.COCKTAIL_API_KEY;
    const url = `https://www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?s=${name}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('error: coult not fetch data');
    }
    const data = await res.json();
    return data;
  }
  
  