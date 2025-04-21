import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1); // This will take you back to the previous page
    };
    return (
      <div className="page-container">
        <h1>Contact</h1>
        <p>Email: shanthak34@gmail.com</p>
        <p>Phone: 587-337-2244</p>
    
        <button onClick={goBack}>Go Back</button> 
      </div>
    );
  }
  
  