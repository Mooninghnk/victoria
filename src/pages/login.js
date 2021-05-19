import { Container } from "../components/Container.js";
import { DarkModeSwitch } from "../components/DarkModeSwitch.js";
import { FcAddDatabase, FcNext } from "react-icons/fc";
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import img from "../public/icons/background.svg";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  
  return (
    <Container
      style={{ backgroundImage: `url(${img})` }}
      height="100vh"
      aling="center"
      justifyContent="center"
      color="black"
    >
      <Flex
        direction="column"
        bg="white"    
        p={20}
        rounded={6}
      >
        <Heading   mb={6}>Login</Heading>
        <br/>
        <Input
          placeholder="email@gmail.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <br/>
        <InputGroup size="md">
          <Input
            placeholder="**********"
            variant="filled"
            mb={6}
            type={show ? "text" : "password"}
          />
          
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button background="#2A019E" p={5} color="white">
          Log In
        </Button>
      </Flex>

      <DarkModeSwitch />
    </Container>
  );
};

export default Login;
