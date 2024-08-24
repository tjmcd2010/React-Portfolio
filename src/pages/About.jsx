//import profile.jpg from React-Portfolio/src/assets
import profilePic from '../assets/profile.jpg';
function About (){
    return (
        <div className = "about">
            <img src = {profilePic} alt = "profile picture" className = "about-image"/>
            <h2>About Me</h2>
            <p>My name is Travis McDermott. While earning my bachelor's degree in Hotel Restauarant Management at Iowa State University, I also dabbled with html, building my own university website, as well as a geocities free website. After several years in hospitality and sales, I found myself at a tech company, working as a Customer Success Manager. I never lost my desire to code, so I've decidied it's time to finally work to become a web developer. Here are some of the projects I've worked on thus far through my UC Berkeley Extension Full Stack Coding Boot Camp.</p> 
    
        </div>
    );
}

export default About