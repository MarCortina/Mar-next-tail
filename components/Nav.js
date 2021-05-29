import requests from '../utils/requests';
import { useRouter } from 'next/router'

function Nav() {
    return <nav>
        <div className='flex px-10 sm:px-20 whitespace-nowrap 
        space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
            {Object.entries(requests).map(([key, { title, url }]) => (
                <h2 key={key} 
                onClick={()=>Router.push(`/?genre=${key}`)}
                className='last:pr-24 cursor-pointer transition
                 duration-100 transform hover:scale-125 hover:text-white
                active:text-black'>{title}</h2>

            ))}
        </div>
        <div className='absolute top-0 rigth-0 bg-gradient-to-l from-
        [#06202A] h-10 w-1/12'>

        </div>
    </nav>

}

export default Nav
