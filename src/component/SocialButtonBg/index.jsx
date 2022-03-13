import { useColorModeValue, chakra, VisuallyHidden } from "@chakra-ui/react"
import { FaInstagram, FaTwitter, FaYo } from "react-icons/fa"

const SocialButtonBg = () => {
    return (
        <chakra.button
        bg={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
        rounded="full"
        w="8"
        h="8"
        cursor="pointer"
        as="a"
        href="href"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        transition="background 0.3s ease"
        _hover={{
            bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
        }}>
            <VisuallyHidden></VisuallyHidden>       
        </chakra.button>
    )
} 

export default SocialButtonBg