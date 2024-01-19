import { Box, Text, Image, Input, VStack } from "@chakra-ui/react";

const MainSection: React.FC = () => {
  return (
    <VStack spacing={6} align="start">
      <Text fontSize="2xl" fontWeight="bold">
        Find the right Doctor Right at your fingertips
      </Text>
      <Box borderRadius="lg" overflow="hidden">
        <Image src="/path-to-your-image.jpg" alt="Doctor Image" />
      </Box>
      <Text fontSize="lg" fontWeight="bold">
        Top rated primary care physicians
      </Text>
      <Input placeholder="Search by Specialist" size="lg" />
    </VStack>
  );
};

export default MainSection;
