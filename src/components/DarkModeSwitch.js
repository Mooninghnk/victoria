import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";


export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisp] = useState("none");
  return (
    <Flex >
      <Flex pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={["none", "none", "flex", "flex"]}>
      
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Home
            </Button>
          </NextLink>

          <NextLink href="/shop" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Shop
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </NextLink>
          <NextLink href="/login" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Login
            </Button>
          </NextLink>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => changeDisp("flex")}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>

      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        overflow={true}
        h="100vh"
        pos="fixed"
        flexDir="column"
        top="0"
        left="0"
        display={display}
      >
        <Flex justifyContent="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            color="black"
            size="lg"
            icon={<CloseIcon />}
            display={["flex", "flex", "none", "none"]}
            onClick={() => changeDisp("none")}
          />
        </Flex>
        <Flex flexDirection="column" align="center">
          <NextLink href="/home" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              color="black"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </NextLink>

          <NextLink href="/shop" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              color="black"
              my={5}
              w="100%"
            >
              Shop
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              color="black"
              my={5}
              w="100%"
            >
              About
            </Button>
          </NextLink>
          <NextLink href="/login" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              color="black"
              my={5}
              w="100%"
            >
              Login
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
