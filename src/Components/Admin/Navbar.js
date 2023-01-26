import { Link } from "react-router-dom";
import './add.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Concert</h1>
      <div className="links">
        <Link to="/admin"  style={{ 
          color: 'black', 
          backgroundColor: '#faee02',
          borderRadius: '8px' 
        }}>Home</Link>
        <Link to="/AdminUsers" style={{ 
          color: 'white', 
           
        }} >Users</Link>
        <Link to="/AdminEvents" style={{ 
          color: 'white', 
           
        }}>Events</Link>
        <Link to="/AdminGallery" style={{ 
          color: 'white', 
           
        }}>Gallery</Link>
       
      </div>
    </nav>
    
  );
}
 
export default Navbar;