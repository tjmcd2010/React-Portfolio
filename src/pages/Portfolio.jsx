import SQL from '../assets/sql.png'
import Task from '../assets/task.png'
import TJM from '../assets/TJM.png'
import Payroll from '../assets/payroll.jpeg'
import Readme from '../assets/readme.png'
import Ecomm from '../assets/ecommerce.png'

<assets></assets>
function Portfolio (){
    return (
        <div className = "portfolio">
            <div className="portfolio-cards">
            <h3>Employee Tracker Using SQL</h3>
            <a href="https://github.com/tjmcd2010/SQL-Employee-Tracker">
            <img src = {SQL} alt = "database architecture" className = "portfolio-image"/></a>
            <p>An employee tracking tool that utilized SQL for it's database</p>
            </div>
            <div className="portfolio-cards">
            <h3>Task Board</h3>
            <a href="https://tjmcd2010.github.io/task-board-challenge-05/">
            <img src = {Task} alt = "white board with tasks" className = "portfolio-image"/></a>
            <p>A task board application to track tasks utilizing jquery and day.js</p>
            </div>
            <div className="portfolio-cards">
            <h3>SVG Logo Generator</h3>
            <a href ="https://github.com/tjmcd2010/Logo-Generator">
            <img src = {TJM} alt = "Logo with initials TJM" height = "135px" className = "portfolio-image"/></a>
            <p>A CLI application to create a logo using node.js and Inquirer</p>
            </div>
            <div className="portfolio-cards">
            <h3>E-Commerce Database Manager</h3>
            <a href="https://github.com/tjmcd2010/E-Commerce-Routing">
            <img src = {Ecomm} alt = "mobile phone and shopping cart indicating ecommerce" height = "105px" className = "portfolio-image"/></a>
            <p>An employee tracking tool that utilized SQL for it's database</p>
            </div>
            <div className="portfolio-cards">
            <h3>Payroll Tracker Powered by Javascript</h3>
            <a href="https://tjmcd2010.github.io/payroll-challenge-03">
            <img src = {Payroll} alt = "money on a laptop" className = "portfolio-image" height = "100px"/></a>
            <p>A payroll tracking application powered by JS</p>
            </div>
            <div className="portfolio-cards">
            <h3>README Generator</h3>
            <a href ="https://github.com/tjmcd2010/readme-challenge-09">
            <img src = {Readme} alt = "the word README" height = "135px" className = "portfolio-image"/></a>
            <p>A CLI application to create a README.md for projects</p>
            </div>
        </div>
    );
}

export default Portfolio