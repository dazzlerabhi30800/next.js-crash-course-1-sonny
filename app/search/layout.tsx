import Search from './Search';
import type { Metadata } from 'next'


type Node = {
    children: React.ReactNode,
}

export const metadata: Metadata = {
    title: "The Search Page",
    description: "This is the Search Page You can Search and get results",
}

const layout = ({ children }: Node) => {
    return (
        <main className='flex space-x-4 divide-x-2 p-5'>
            <div>
                <h1>Search</h1>
            </div>
            <div className="flex-1 pl-5">
                <Search />
                <div>{children}</div>
            </div>
        </main>
    )
}

export default layout