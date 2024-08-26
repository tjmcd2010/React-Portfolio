import Github from './assets/github.png'
import LinkedIn from './assets/linkedin.png'
import Twitter from './assets/twitter.png'

function Footer (){
    return(
        <footer>
            <div className="footer-container">
            
        <div className="social-links">
          <a href="https://github.com/tjmcd2010" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn icon" />
          </a>

          <a href="https://x.com/tjmcd2010" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter icon" />
          </a>
        </div>
      </div>
        </footer>
    )
}

export default Footer