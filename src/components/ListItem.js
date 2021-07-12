import {Link}from 'react-router-dom'

const ListItem = ({image, name, summary, id}) => {
    return (
        <Link to={`/episodes/${id}`} className="listitem">
            <div className='card'>
                <img className="img" src={image} alt={name}/>
                <div className="inner-container">
                <h2 className="info__name">{name}</h2>
                <div classname="info__summary" dangerouslySetInnerHTML={{ __html: summary }} />
                </div>
            </div>
        </Link>
    )
}

export default ListItem
