import resumePDF from  '../assets/resume.pdf'
function Resume() {
    return (
      <div className = "resume">
        
        <p>Click the button below to download my resume:</p>
        <a href={resumePDF} download="resume.pdf" className="download-button">
          Download Resume
        </a>
      </div>
    );
  }

export default Resume