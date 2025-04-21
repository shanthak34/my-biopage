import { useNavigate } from 'react-router-dom';
import { Link, Links } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This will take you back to the previous page
  };

  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <ul>
        <li>Project 1: Portfolio Website</li>

        <li><Link to="/Posts">Project 2: Fetch API data</Link></li>

        <li>
          Project 3: calculator
        </li>
        <li>
          project 4: SQL
        </li>
        <li>
          project 5:Contact form using formik and yup 
        </li>






        

      
      
      </ul>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

