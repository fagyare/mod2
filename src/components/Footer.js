import { Link } from "react-router-dom";

function Footer (){
    return (
        <footer className="footer"> 

        {/* <div>Contacts || Forum || Privacy Policy || Terms of Use </div> */}
        <Link to="Contacts">Contacts || </Link> <Link to="/Blog">Blog || </Link><Link to="/Forum">Forum || </Link> <Link to="/Privacy Policy">Privacy Policy || </Link> <Link to="/Terms of Use">Terms of Use</Link>
        <p> © Copyright FA Production and Technology EST. 2023</p>
        {/* <a href="#contact">Contact</a> */}
       
        </footer>
    );

}

export default Footer; 
