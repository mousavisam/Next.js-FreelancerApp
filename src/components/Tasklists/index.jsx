import { Box,Text,Center,Button } from "@chakra-ui/react"

export const Tasklists = () => {
return(
      <Center padding='40px'>
        <Box  w='75%' h='35%' p={4} color='white'
        border='1px' borderColor='black' display='flex' gap='70%' >
        <Text fontSize='35px' color='black' >
            List of Task
        </Text>
        <Button  
         color= "black"
         borderColor= "black"
         border="1px">
            Add Task
        </Button>
        </Box>
      </Center>
)
}