import React from 'react'

const AppHeader = ({liked, allPosts} : any) => {
    return (
        <header className="app-header flex justify-between w-full h-24 items-center">
            <h1>Some App</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </header>
    )
}
export default AppHeader