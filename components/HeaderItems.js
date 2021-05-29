
function HeaderItems({ Icon, title }) {
    return (
        <div className='flex flex-col items-center cursor-pointer group w-12 
        sm:w-20 hover:text-white '>
            <Icon className='h-8 m-b-1 group-hover:animate-bounce '/>
            <p className='opacity-100 group-hover:opacity-0 tracking-widest'>{title}</p>
        </div>
    )
}

export default HeaderItems
