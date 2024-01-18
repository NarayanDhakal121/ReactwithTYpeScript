import React from 'react';
import { FaSearch , FaMapMarkerAlt } from 'react-icons/fa';
import { Box, Stack, Flex, Button, Icon, Input } from '@chakra-ui/react';

 

const Header = () => {
  return (
    <div className="header-section">
      <Box bg="#D9D9D9" minHeight="60vh">
        <Flex justifyContent="flex-end" alignItems="center" p={4}>
          <Flex>
            <Button mr={4} color='black' variant='link'>Home</Button>
            <Button mr={4} color='black' variant='link'>Doctors</Button>
            <Button mr={4} color='black' variant='link'>FAQ</Button>
            <Button mr={4} color='black' variant='link'>About</Button>
            <Button mr={4} color='black' variant='link'>Contact</Button>
          </Flex>
          <Flex>
            <Button style={{ backgroundColor: "#000000" }} mr={4} color="white">Login</Button>
            <Button style={{ backgroundColor: "#004F95" }} color="white">SignUp</Button>
          </Flex>
        </Flex>

          <div  style={{padding:"15px"}} className='search-Card'>
      <Box p={5} boxShadow="md" bg="#6E9CC7" borderRadius="md" w="60%" h="60%" m='5'>
        <Flex align="center" mb={4}>
          <Flex align="center" mr="{9}">
            <Icon as={FaSearch} boxSize={6} mr={2} />
            <Input type="text" placeholder='Search by doctor' />
          </Flex>
          <Flex align="center" ml={6}>
            <Icon as={FaMapMarkerAlt} boxSize={6} mr={2} />
            <Input type="text" placeholder='Search by location' />
          </Flex>
          <Flex  align="center"  mr={9} ml='auto'>
            <Icon as={FaSearch} boxSize={6}  />
            
          </Flex>
        </Flex>
        <h1 style={{paddingBottom:'20px',fontSize:'15px',  fontWeight:'bold'}}>You may be looking for</h1>

        <Flex flexWrap="wrap">
          <Stack spacing={20} direction='row' align='center'>
            <Button  style={{ backgroundColor: "#ffffff" }} variant='outline' size='xs'>Dentist</Button>
            <Button  style={{ backgroundColor: "#ffffff" }} variant='outline' size='xs'>Cardiologist</Button>
            <Button  style={{ backgroundColor: "#ffffff" }} variant='outline' size='xs'>Dermatologist</Button>
            <Button  style={{ backgroundColor: "#ffffff" }} variant='outline' size='xs'>Family Physician</Button>
            <Button  style={{ backgroundColor: "#004F95" }}>more</Button>
          </Stack>
        </Flex>
      </Box>
    </div>
      </Box>
    </div>
  );
};

export default Header;
