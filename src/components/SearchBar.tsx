import { FiSearch } from "react-icons/fi";

interface SearchbarI {
  query: string;
  onSearch: (query: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar({ query, onSearch }: SearchbarI) {
  return (
    <div className="flex justify-between items-center border rounded-full overflow-hidden border-orange-950 py-2 px-3 md:px-5">
      <input
        className="outline-none w-full text-orange-950 font-semibold placeholder:text-orange-950 placeholder:font-semibold"
        type="text"
        placeholder="Search"
        value={query}
        onChange={onSearch}
      />
      <FiSearch />
    </div>
  );
}
