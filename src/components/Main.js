import Search from './Search'
import { useContext } from 'react'
import ShowsContext from './showsContext'
import ListItem  from './ListItem'

const Main = () => {
    const showsContext = useContext(ShowsContext)
    const {loading, shows} = showsContext
    return (
        <div className="main">
            <Search />
            {loading ? <h2>loading</h2> :
            <div>
                {shows.map(item => (
                    <ListItem 
                    key={item.show.id}
                    id={item.show.id}
                    image={item.show.image ? item.show.image.medium : "https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg"}
                    name={item.show.name}
                    summary={item.show.summary ? item.show.summary : "No Summary"}
                />))}
            </div>
            }
        </div>
    )
}

export default Main
