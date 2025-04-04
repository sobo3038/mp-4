//components/CocktailCard.tsx: the cocktail with the name, photo, and some text

type Drink = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
};
export default function CocktailCard({ drink }: { drink: Drink }) {
    return (
        <div className="bg-white border border-blue-200 p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">{drink.strDrink}</h2>
            
            {/*cocktail image*/}
            <img 
                src={`${drink.strDrinkThumb}/preview`} 
                alt={drink.strDrink}
                className="w-32 h-32 object-cover rounded mb-2"
            />

            {/*cocktail text/info*/}
            <p className="text-sm text-gray-700">{drink.strInstructions}</p> 
        </div>
    );
}
