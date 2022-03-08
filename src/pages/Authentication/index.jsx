import {
  Box,
  Container,
  Stack,
  Heading,
  useBreakpointValue,
  SimpleGrid,
  Input,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import {} from "react-icons";
import ProfileAuthentication from "../../component/ProfileAuthentication";

const Authentication = () => {
  return (
    <Box bgGradient="linear(to-r, gray.200, gray.400)" position="flex">
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
            bgGradient="linear(to-r, green.400, blue.400)"
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
            </Text>{" "}
            Find Your Passion
          </Heading>
          <Stack direction="row" spacing={4} align="center">
            <ProfileAuthentication />
            <Text
              fontFamily="heading"
              fontWeight="bold"
              fontSize={{ base: "4xl", md: "6xl" }}
            >
              +
            </Text>
            <Flex
              align="center"
              justify="center"
              fontFamily="heading"
              fontWeight="bold"
              fontSize={{ base: "sm", md: "lg" }}
              bg="gray.800"
              color="white"
              rounded="full"
              width={useBreakpointValue({ base: "44px", md: "60px" })}
              height={useBreakpointValue({ base: "44px", md: "60px" })}
              position="relative"
              _before={{
                content: "''",
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, green.400, blue.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack bg="gray.50" rounded="xl" p={{ base: 4, sm: 6, md: 8 }}>
          <Stack spacing="4" marginBottom={8}>
            <Heading
              color="gray.800"
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              <Text as="span">Sign Up For Free </Text>
              <Text
                as="span"
                bgGradient="linear(to-r, green.400, blue.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color="gray.500" fontSize={{ base: "sm", sm: "md" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, sequi in? Autem, adipisci eos perferendis
              accusantium odit cumque. Autem culpa molestias reiciendis id odit
              quia.
            </Text>
          </Stack>
          <Box as="form" mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="User Name"
                bg="gray.100"
                border={0}
                color="black"
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Email Address"
                bg="gray.100"
                border={0}
                color="black"
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Phone Number"
                bg="gray.100"
                border={0}
                color="black"
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Text as="span" textAlign="center">
                <Text as="span">Already have account ?</Text>
                <Text
                  as="span"
                  color="black"
                  cursor="pointer"
                  _hover={{
                    variant: "underline",
                    color: "blue.400",
                  }}
                >
                  {" "}
                  login here
                </Text>
              </Text>
              <Button
                fontFamily="heading"
                bg="gray.200"
                color="white"
                bgGradient="linear(to-r, green.400, blue.400)"
                _hover={{
                  bgGradient: "linear(to-r, green.400, blue.400)",
                  boxShadow: "md",
                  color: "black",
                }}
              >
                Register
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Authentication;
