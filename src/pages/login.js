import { Container } from "../components/Container.js";
import { DarkModeSwitch } from "../components/DarkModeSwitch.js";
import reg from "../public/icons/verify.svg";
import {
  Heading,
  Box,
  Flex,
  Text,
  useColorMode,
  Center,
  Input,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import img from "../public/icons/background.svg";
import { useState } from "react";
import { FcAddDatabase, FcNext } from "react-icons/fc";
const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [set, setSet] = useState("none");

  return (
    <Container
      style={{ backgroundImage: `url(${img})` }}
      py={300}
      height="100vh"
    >
      <Center display="flex" h="100px">
        <Flex align="center" display="flex" color="black">
          <Box
            rounded="lg"
            borderRadius="lg"
            boxShadow={"2xl"}
            rounded={"md"}
            display="fixed"
            background="white"
            align="center"
            p={8}
          >
            <Box m="300" as="a" align="center">
              <Heading m="1" mb="0" as="h2" color="black" size="lg">
                Login
              </Heading>
              <br />
              <br />
              <Button
                leftIcon={<FcAddDatabase />}
                background="#EFF0F6"
                color="black"
                variant="solid"
              >
                Sign Up
              </Button>
              <br />
              <br />
              <Input
                textAlign="center"
                type="email"
                placeholder="email@gmail.com"
                background="#EFF0F6"
                variant="filled"
                color="black"
              />
              <br />
              <br />
              <Input
                textAlign="center"
                type="password"
                placeholder="password"
                background="#EFF0F6"
                variant="filled"
                color="black"
              />
              <br />
              <br />
              <Center>
                <Button
                  textAlign="center"
                  leftIcon={<FcNext />}
                  background="#EFF0F6"
                  color="black"
                  variant="solid"
                >
                  Login
                </Button>
              </Center>
            </Box>
          </Box>
        </Flex>
      </Center>
      <DarkModeSwitch />
    </Container>
  );
};

export default Login;
