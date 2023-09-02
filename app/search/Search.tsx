"use client";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from 'react';

function Search() {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();


    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search/${search}`)
        setSearch('');
    }
    return (
        <form onSubmit={handleSearch} className="flex gap-2">
            <input className="focus:outline-none border border-gray-300 focus:border-teal-500 py-2 px-4 rounded-sm" type="text" placeholder="Enter your search term" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="bg-teal-500 py-2 px-4 rounded-sm text-white transition ease-in-out duration-300 hover:bg-teal-300">Submit</button>
        </form>
    )
}

export default Search