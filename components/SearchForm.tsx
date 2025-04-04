//components/SearchForm.tsx: this is the search  

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
    const [query, setQuery] = useState(''); //user input 
    const router = useRouter(); //for navigating between pages 
    const handleSearch = () => { //this is for when the search button is clicked
        if (query) {
            router.push(`/cocktail/${query}`);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            
            {/*search bar: input to write the name*/}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ex. Margarita"
                className="border border-blue-300 p-2 rounded w-full sm:w-80"
            />
            
            {/*button that handles the search*/}
            <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
            Search
            </button>
        </div>
    );
}

//this source helped with useRouter(): https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating