import { Flex, useColorMode } from '@chakra-ui/react'


export const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: '#FD49A0', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }

  return (
    <Flex  
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    
      {...props}
    />
  )
}
