import Copyright from "../footer/Footer";
import Footer from "../footer/footer1";

import Navbar from "./Navbar"; 
const Layout = ({ children}) => {
    return (
     
        <><Navbar /><main>{children}</main><Copyright /></>
        
    
    );
  };
  export default Layout;