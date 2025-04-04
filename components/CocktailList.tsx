//components/CocktailList.tsx: list of the cocktail cards by name

import fetchCocktails from '@/lib/fetchCocktails'; //this gets the data from the API on the server
import CocktailCard from './CocktailCard';
import Link from 'next/Link';

export default async function CocktailList({ name }: { name: string }) { //this function takes the name and shows the drink
    let cocktails = []; //store cocktail list
    let error = '';     //store any error messages

    try {
        const data = await fetchCocktails(name); //get cocktail data from the API (server-side)
        if (data.drinks) {
            cocktails = data.drinks;
        } else {
            error = 'no cocktails found';
        }
    } catch {
        error = 'error with fetching data';
    }

    return (
        <>
            {/*a simple back link to go back to the search*/}
            <Link
                href="/"
                className="text-blue-700 underline mb-6 inline-block"
            >
            Back to Search
            </Link>

            {/*error message*/}    
            {error && <p className="text-red-500 text-center mb-4">{error}</p>} 

            {/*the cocktails with their information displayed on a grid*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cocktails.map((drink: any) => (
                    <CocktailCard key={drink.idDrink} drink={drink} />
                ))}
            </div>
        </>
    );
}

