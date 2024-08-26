import resumePDF from  '../assets/resume.pdf'
function Resume() {
    return (
        <>
      <div className = "resume">
        
        <p>Click the button below to download my resume:</p>
        <a href={resumePDF} download="resume.pdf" className="download-button">
          Download Resume
        </a>
      </div>
      <h3> Here's a list of tech proficiencies I have acquired</h3>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Insomnia</li>
        <li>Render</li>
        <li>Netlify</li>
      </ul>
      
      </>
    );
  }

export default Resume