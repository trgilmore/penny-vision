import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
            <h3> 
             <Link to="/">
                Penny-Vision Show Finder
             </Link>
             </h3>
            </div>
        </div>
    )
}

export default Header
