import {
  Box,
  Center,
  Container,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SiConfluence } from "react-icons/si";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Center margin="4" justifyContent="space-between">
        <Flex>
          <Icon boxSize="6" as={SiConfluence} />
          <Text fontSize="large" fontWeight="bold" marginX="2">
            logoipsum
          </Text>
        </Flex>
        <Text color="gray.500">
          2022. Lorem ipsum dolor sit amet consectetur.
        </Text>
        <Box marginTop="4">
          <Stack direction="row" spacing="6">
            <Icon boxSize="8">
              <FaInstagram />
            </Icon>
            <Icon boxSize="8">
              <FaTwitter />
            </Icon>
            <Icon boxSize="8">
              <FaYoutube />
            </Icon>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default Footer;
