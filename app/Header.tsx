import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='p-4 text-medium bg-teal-500 text-white flex items-center gap-10'>
            <Link className='hover:underline' href="/">Home</Link>
            <Link className='hover:underline' href="/todos/">Todo </Link>
            <Link className='hover:underline' href="/search/">Search</Link>
        </header>
    )
}

export default Header