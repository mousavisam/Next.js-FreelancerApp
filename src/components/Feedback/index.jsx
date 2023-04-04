import { Box,Text,Center } from "@chakra-ui/react"

export const Feedback = () => {
return(
      <Center padding='40px'>
        <Box  w='75%' h='35%' p={4} color='white'
        border='1px' borderColor='black' gap='30px' >
        <Text fontSize='35px' color='black' >
            FeedBack
        </Text>
        </Box>
      </Center>
)
}