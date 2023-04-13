import { Box, Flex } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const EMPTY_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Rating = ({ rate }) => {
  return (
    <Box>
      <Flex>
        {EMPTY_ARR.map((item) => (
          <Box
            key={item}
            cursor="pointer"
            color="yellow.500"
            as={rate >= item ? AiFillStar : AiOutlineStar}
          />
        ))}
      </Flex>
    </Box>
  );
};
