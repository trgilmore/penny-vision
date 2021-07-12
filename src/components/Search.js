import { useState, useContext } from 'react'
import ShowsContext from './showsContext'


const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const {searchShows} = useContext(ShowsContext)
    const onSearchHandler = (e) => {
        e.preventDefault()
        searchShows(searchTerm)
        console.log("Searching for term " +searchTerm)
    }
    return (
        <div className="searchbar">

        <form className="searchbar__form">
            <input type="text" placeholder="Search" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn" onClick={onSearchHandler}>
                Search
            </button>
        </form>
        </div>
    )
}

export default Search
