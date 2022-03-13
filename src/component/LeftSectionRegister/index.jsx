import {
    Stack,
    Heading,
    useBreakpointValue,
    Text,
    Flex,
  } from "@chakra-ui/react";
  import ProfileRegister from "../ProfileRegister";


  const LeftSectionRegister = () => {
      return (
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
            <ProfileRegister />
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
      )
  }


  export default LeftSectionRegister