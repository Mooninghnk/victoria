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
            w="100%"
            rounded="lg"
            borderRadius="lg"
            boxShadow={"2xl"}
            rounded={"md"}
            display="fixed"
            background="white"
            align="center"
            p={10}
          >
            <Box p={20} m="200" w="100%" as="a" align="center">
              <Heading m="1" mb="0" as="h2" color="black" size="lg">
                Login
              </Heading>
              <br/>
              <Box>
                <Button
                  leftIcon={<FcAddDatabase />}
                  background="#EFF0F6"
                  color="black"
                  variant="solid"
                >
                  Sign Up
                </Button>
              </Box>
              <br/>
              <Box>
                <Input
                  textAlign="center"
                  type="email"
                  placeholder="email@gmail.com"
                  background="#EFF0F6"
                  variant="filled"
                  color="black"
                />
              </Box>{" "}
              <br/>
              <Box>
                <Input
                  textAlign="center"
                  type="password"
                  placeholder="password"
                  background="#EFF0F6"
                  variant="filled"
                  color="black"
                />
              </Box>
              <br/>
              <Box>
                <Button
                  marginTop="1em"
                  leftIcon={<FcAddDatabase />}
                  background="#5F2EEA"
                  color="white"
                  variant="solid"
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Center>
      <DarkModeSwitch />
    </Container>
  );
};

export default Login;
