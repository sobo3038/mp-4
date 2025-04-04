//app/page.tsx: this is the home page where the user can search

import SearchForm from '@/components/SearchForm';

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <SearchForm />
    </div>
  );
}