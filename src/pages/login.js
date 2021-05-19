import { Container } from "../components/Container.js";
import { DarkModeSwitch } from "../components/DarkModeSwitch.js";
import { FcAddDatabase, FcNext } from "react-icons/fc";
import { Flex, Heading } from "@chakra-ui/react";

import img from "../public/icons/background.svg";
const Login = () => {
  return (
    <Container
      style={{ backgroundImage: `url(${img})` }}
      height="100vh"
      aling="center"
      justifyContent="center"
    >
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Login</Heading>
      </Flex>

      <DarkModeSwitch />
    </Container>
  );
};

export default Login;
