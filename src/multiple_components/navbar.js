import { Link } from 'react-router-dom';

//Arrow Functional Components
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Z Fighters</h1>
            <div className="links">
                {/* Link Component - Allows the React Router to intercept requests to the server, 
                    Checks path property of the Route Component in the Root Component ie. App.js
                    for its value and returns the page with same endpoint as the 'to' attribute
                    */}
                <Link to="/">Home</Link>
                {/* Inline Styling */}
                <Link to="/create" style={{color: "white",
                 backgroundColor: "lightseagreen",
                 borderRadius: "8px"
                }}>Add New Fighter</Link>
            </div>
        </nav>
    )
} 

export default Navbar;