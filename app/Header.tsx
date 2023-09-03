"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function Header() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <header className='p-4 text-medium bg-teal-500 text-white flex items-center gap-10'>
            <Link className={`hover:underline ${pathname == '/' ? "underline" : ""}`} href="/">Home</Link>
            <Link className={`hover:underline ${pathname.includes('/todos') ? "underline" : ""}`} href="/todos">Todo</Link>
            <Link className={`hover:underline ${pathname.includes('/search') ? "underline" : ""}`} href="/search/">Search</Link>
            {/* <Link className='hover:underline' href="/todos/">Todo </Link>
            <Link className='hover:underline' href="/search/">Search</Link> */}
        </header>
    )
}

export default Header