import SQL from '../assets/sql.png'
import Task from '../assets/task.png'
import TJM from '../assets/TJM.png'
import google from '../assets/google.png'
import Payroll from '../assets/payroll.jpeg'
import Readme from '../assets/readme1.png'
import PWA from '../assets/service-workers.png'
import Ecomm from '../assets/ecommerce.png'
import Weather from '../assets/weather.png'
import Notes from '../assets/notes.jpg'
import { Box, Text, Link, Image } from '@chakra-ui/react';


<assets></assets>
function Portfolio (){
    return (
        <Box className="portfolio">
          <Box className="portfolio-cards" p="5" boxShadow="md" borderRadius="lg">
            <Text fontSize="xl" fontWeight="bold">Employee Tracker Using SQL</Text>
            <Link href="https://github.com/tjmcd2010/SQL-Employee-Tracker" isExternal>
              <Image src={SQL} alt="database architecture" boxSize="100px" objectFit="cover"/>
            </Link>
            <Text>An employee tracking tool that utilized SQL for its database</Text>
          </Box>
          <Box className="portfolio-cards" p="5" boxShadow="md" borderRadius="lg">
            <Text fontSize="xl" fontWeight="bold">Task Board</Text>
            <Link href="https://tjmcd2010.github.io/task-board-challenge-05/" isExternal>
              <Image src={Task} alt="white board with tasks" boxSize="100px" objectFit="cover"/>
            </Link>
            <Text>A task board application to track tasks utilizing jquery and day.js</Text>
          </Box>
            <Box className="portfolio-cards" p="5" boxShadow="md" borderRadius="lg">
                <Text fontSize="xl" fontWeight="bold">SVG Logo Generator</Text>
                <Link href="https://github.com/tjmcd2010/Logo-Generator" isExternal>
                    <Image src={TJM} alt="Logo with initials TJM" boxSize="100px" objectFit="cover"/>
                </Link>
                <Text>A CLI application to create a logo using node.js and Inquirer</Text>
            </Box>
            <Box className="portfolio-cards" p="5" boxShadow="md" borderRadius="lg">
                <Text fontSize="xl" fontWeight="bold">E-Commerce Database Manager</Text>
                <Link href="https://github.com/tjmcd2010/E-Commerce-Routing" isExternal>
                    <Image src={Ecomm} alt="mobile phone and shopping cart indicating ecommerce" boxSize="100px" objectFit="cover"/>
                </Link>
                <Text>An employee tracking tool that utilizes SQL for it's database</Text>
            </Box>
            <Box className="portfolio-cards" p="5" boxShadow="md" borderRadius="lg">
                <Text fontSize="xl" fontWeight="bold">Payroll Tracker Powered by Javascript</Text>
                <Link href="https://tjmcd2010.github.io/payroll-challenge-03" isExternal>
                    <Image src={Payroll} alt="money on a laptop" boxSize="100px" objectFit="cover"/>
                </Link>
                <Text>A payroll tracker application built with Javascript</Text>
            </Box>
            <Box className="portfolio-cards" p="5" boxShadow="md" borderRadius="lg">
                <Text fontSize="xl" fontWeight="bold">README Generator</Text>
                <Link href="https://github.com/tjmcd2010/readme-challenge-09" isExternal>
                    <Image src={Readme} alt="sreenshot of Command Line interface of application" boxSize="100px" objectFit="cover"/>
                </Link>
                <Text>A README generator application built with Node.js</Text>
            </Box>
            <Box className="portfolio-cards" p="5" boxShadow="md" borderRadius="lg">
                <Text fontSize="xl" fontWeight="bold">Google Books Search Engine</Text>
                <Link href="https://google-book-search-engine-rikv.onrender.com" isExternal>
                    <Image src={google} alt="screenshot of saved books from the app" boxSize="100px" objectFit="cover"/>
                </Link>
                <Text>A GraphQL API app built with Apollo Server, using a full MERN stack with React and MongoDB</Text>
            </Box>
            <Box className="portfolio-cards" p="5" boxShadow="md" borderRadius="lg">
                <Text fontSize="xl" fontWeight="bold">PWA Text Editor</Text>
                <Link href="PWA Text Editor deployed to Render" isExternal>
                    <Image src={PWA} alt="screenshot of the text editor app" boxSize="100px" objectFit="cover"/>
                </Link>
                <Text>A text editor app that is built to also meet PWA "Progressive Web Application" criteria</Text>
            </Box>
            <Box className="portfolio-cards" p="5" boxShadow="md" borderRadius="lg">
                <Text fontSize="xl" fontWeight="bold">Weather App</Text>
                <Link href="https://tjmcd2010.github.io/weather-api-06/" isExternal>
                    <Image src={Weather} alt="screenshot of the weather application" boxSize="100px" objectFit="cover"/>
                </Link>
                <Text>A  weather 5 day forecast appplication utilizing server side API to fetch data from the Open Weather API. </Text>
            </Box>
            <Box className="portfolio-cards" p="5" boxShadow="md" borderRadius="lg">
                <Text fontSize="xl" fontWeight="bold">Note Taker Application</Text>
                <Link href="https://note-taker-application-h12b.onrender.com" isExternal>
                    <Image src={Notes} alt="person hand writing notes on a notepad" boxSize="100px" objectFit="cover"/>
                </Link>
                <Text>This is an application that uses an Express.js back end and will save and retrieve note data from a JSON file </Text>
            </Box>
            
        </Box>
      );
    }
    
    export default Portfolio;
   