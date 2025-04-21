
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); // This will take you back to the previous page
      };
    return (
      <div className="about-container">
        <h1>About Me</h1>
        <p>
        I am an IT professional with a passion for both IT support and software development. With a strong foundation in troubleshooting and supporting technology, I am equally enthusiastic about building software solutions to solve real-world problems.
      </p>
      <p>
        My journey in IT has been guided by my belief in **constant learning and upgrading**. I am always looking to enhance my skills, stay up-to-date with the latest technologies, and adapt to the evolving IT landscape.
      </p>
      <p>
        Whether it's providing technical support to end-users or developing robust software applications, I am committed to making technology more accessible, efficient, and user-friendly.
      </p>
      <p>
        If you'd like to connect or discuss potential opportunities, feel free to <a className="link" href="/contact">contact me</a>!
      </p>
        <button onClick={goBack}>Go Back</button>
      
      </div>
      
    );
  }
  