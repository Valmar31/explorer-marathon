import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'

import CrystalBall from "./Assets/crystal-ball.svg"
import { questionMaker } from "./Components/Answers/index.js"

function App() {

  return (
    <Box
      backgroundColor="#000000"
    >
      <Flex
        // Center
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"

        flexDirection="column"
        color="white"
        gap={5}
      >
        <Image src={CrystalBall} alt="Crystal Ball" />

        <Text
          fontSize="calc(10px + 4vmin)"
          fontWeight="bold"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          I'll reveal your destiny!
        </Text>
        <Text
          mt="-15px"
          fontFamily="sans-serif"
          opacity="0.7"
        >
          Click "Ask Question", so that your destiny is revealed.
        </Text>

        <Input
          id="questionInput"
          bg="white"
          w="400px"
          h="60px"
          fontFamily="sans-serif"
          fontSize="20px"
          textAlign="center"
          placeholder="Type your question, MORTAL!"
          color="black"
          _hover={{
            opacity: 0.9,
            border: "2px solid blue"
          }}
        />

        <Button
          id="answerBtn"
          bgColor="#8a2be2"
          w="400px"
          h="60px"
          fontFamily="sans-serif"
          fontSize="20px"
          _hover={{
            bgColor: "#a25ee1"
          }}
          onClick={questionMaker}
        >
          Ask Question
        </Button>

        <Text
          id="answer"
          transition="opacity 2s"
          textAlign="center"
          fontSize="40px"
          fontWeight="extrabold"
          fontFamily="Caveat"
          color="#5338ed"
        >

        </Text>

      </Flex>
    </Box>
  )
}

export default App
