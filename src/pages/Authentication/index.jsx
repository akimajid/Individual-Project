import {
  Box,
  Container,
  Stack,
  Heading,
  AvatarGroup,
  useBreakpointValue,
  SimpleGrid,
  Input,
  Avatar,
  Image,
  Text,
  Icon,
  IconProps,
  Flex,
  Button,
} from "@chakra-ui/react";
import {} from "react-icons";
import ProfileAuthentication from "../../component/ProfileAuthentication";

const Authentication = () => {
  return (
    <Box position="re">
      <Container
        as={SimpleGrid}
        maxW="7xl"
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, md: 20 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight="1"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            as="span"
            bgGradient="linear(to-r, red.400, pink.400)"
            bgClip="text"
          >
            {" "}
            Sign Up To Our Social Media{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, teal.500, green.500)"
              bgClip="text"
            >
              &
            </Text>{" "} Find Your Passion
          </Heading>
          <Stack direction="row" spacing={4} align="center">
            <ProfileAuthentication />
            <Text fontFamily="heading" fontSize={{ base:"4xl", md:"6xl" }}>
            +
            </Text>
            <Flex
            align="center"
            justify="center"
            fontFamily="heading"
            fontSize={{ base:"sm", md:"lg" }}
            bg="gray.800"
            color="white"
            rounded="full"
            width={useBreakpointValue({ base:"44px", md:"60px" })}
            height={useBreakpointValue({ base:"44px", md:"60px" })}
            position="relative"
            _before={{
                content: "''",
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400, yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
            }}
            >YOU
            </Flex>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Authentication;
