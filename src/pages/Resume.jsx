import React from 'react';
import { Box, Heading, Link, List, ListItem, ListIcon, SimpleGrid, Center } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import resumePDF from '../assets/resume.pdf';

function Resume() {
  return (
    <Box className="resume" p={5}>
    <Box mb={4} bg="darkblue" p={4} borderRadius="md" border="1px" borderColor="teal.500">
      <Center>
        <Box p={2} bg="darkblue" borderRadius="md">
          <Link href={resumePDF} download="resume.pdf" color="teal.500" fontWeight="bold" display="flex" alignItems="center" justifyContent="center">
            Download Resume
          </Link>
        </Box>
      </Center>
    </Box>
      <Heading as="h3" size="lg" mb={4}>
        Here's a list of tech proficiencies I have acquired
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
  <List spacing={3}>
    {/* Column 1 */}
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Netlify</ListItem>
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> React, including Redux</ListItem>
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Node.js</ListItem>
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Express.js</ListItem>
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> SQL (PostgreSQL)</ListItem>
  </List>
  <List spacing={3}>
    {/* Column 2 */}
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> NOSQL (MongoDB)</ListItem>
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Github</ListItem>
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Git</ListItem>
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Render</ListItem>
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Insomnia</ListItem>
    {/* Add more ListItems as needed */}
  </List>
  <List spacing={3}>
    {/* Column 2 */}
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> HTML</ListItem>
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> Javascript</ListItem>
    <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> CSS</ListItem>

   
  </List>
      
      </SimpleGrid>
    </Box>
  );
}

export default Resume;
     