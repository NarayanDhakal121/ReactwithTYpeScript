import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { Box, Flex, Button, Icon, Input } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="#D9D9D9" minHeight="50vh" mt="20" p="8">
      <Flex justifyContent="flex-end" alignItems="center" gap={4} color='#D9D9D9'>
        <Flex gap={4}>
          <Button mr={4} color='black' variant='link'>Home</Button>
          <Button mr={4} color='black' variant='link'>Doctors</Button>
          <Button mr={4} color='black' variant='link'>FAQ</Button>
          <Button mr={4} color='black' variant='link'>About</Button>
          <Button mr={4} color='black' variant='link'>Contact</Button>
        </Flex>
        <Flex gap={4}>
          <Button style={{ backgroundColor: "#000000" }} mr={4} color="white">Login</Button>
          <Button style={{ backgroundColor: "#004F95" }} color="white">SignUp</Button>
        </Flex>
      </Flex>

      <Box p="10" boxShadow="md" bg="#6E9CC7" borderRadius="10" w="70%" m="10">

       <Flex align="center" mb={6} gap={30}>
          <Flex align="center" mr={9}>
            <Icon as={FaSearch} boxSize={6} mr={2} />
            <Input type="text" placeholder='Search by doctor' bg="#ffffff" />
          </Flex>
          <Flex align="center" ml={6}>
            <Icon as={FaMapMarkerAlt} boxSize={6} mr={2} />
            <Input type="text" placeholder='Search by location' bg="#ffffff" />
          </Flex>
          <Flex align="center" mr={9} ml='auto'>
            <Icon as={FaSearch} boxSize={9} p={2} bg='#014ED5' color='#ffffff' />
          </Flex>
        </Flex>

        <h2 style={{ paddingBottom: '20px', fontSize: '15px', fontWeight: 'bold' }}>You may be looking for</h2>

        <Flex flexWrap="wrap" gap='20'>
          <Button style={{ backgroundColor: "#ffffff" }} padding="5" variant='outline' size='md'>Dentist</Button>
          <Button style={{ backgroundColor: "#ffffff" }} padding="5" variant='outline' size='md'>Cardiologist</Button>
          <Button style={{ backgroundColor: "#ffffff" }} padding="5" variant='outline' size='md'>Dermatologist</Button>
          <Button style={{ backgroundColor: "#ffffff" }} padding="5" variant='outline' size='md'>Family Physician</Button>
          <Button style={{ backgroundColor: "#004F95" }} padding="3" size='xl'>more</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
