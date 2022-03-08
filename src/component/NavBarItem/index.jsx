import {
    Link,
    useColorModeValue,
    Box,
    Flex,
    useDisclosure,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    Button,
    Avatar,
    MenuList,
    MenuItem,
    Icon,
    Input,
    background,
  } from "@chakra-ui/react";
  import { SiConfluence } from 'react-icons/si'

  const NavBarItem = () => {
      return (
        <Box 
        bgGradient="linear(to-r, gray.400, gray.200)" 
        px={5}
        position="-webkit-sticky"
        >
        <Flex h={16} alignItems="center" justifyContent="space-between">
            <HStack spacing={6} alignItems="center">
            <Icon boxSize={6} as={SiConfluence}></Icon>
            </HStack>
            <HStack  spacing={6} alignItems="center">
                <Box
                color="black"
                as={Button}
                variant="string"
                cursor="pointer"
                minW={0}
                fontWeight="bold"
                _hover={{
                    background: "gray.100",
                }}
                >Home</Box>
                <Box
                color="black"  
                as={Button}
                variant="flex"
                cursor="pointer"
                minW={0}
                fontWeight="bold"
                _hover={{
                    background: "gray.100",
                }}
                >Explore</Box>
                <Box
                color="black"
                as={Button}
                variant="subtle"
                cursor="pointer"
                minW={0}
                fontWeight="bold"
                _hover={{
                    background: "gray.100",
                }}
                >Menu 3</Box>
            </HStack>
            <Flex alignItems="center">
                <Menu>
                    <MenuButton
                    as={Button}
                    variant="flex"
                    cursor="pointer"
                    minW={0}
                    >
                    <Avatar 
                    size="md"
                    src="https://pbs.twimg.com/profile_images/998482729892069377/Ls1MMr3q_400x400.jpg"
                    />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Link 2</MenuItem>
                        <MenuItem>Link 3</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    </Box>
      )


  }

  export default NavBarItem