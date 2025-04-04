// app/cocktail/[name]/page.tsx: route page for showing the cocktials name
import CocktailList from '@/components/CocktailList';

export default async function CocktailPage({ params }: { params: { name: string } }) {
  const { name } = await params; //this gets the name param from route

  return (
    <div className="w-full max-w-5xl mx-auto">
      <CocktailList name={name} />
    </div>
  );
}