import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { rateApi } from "@/services";

const EMPTY_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Rating = ({ username }) => {
  const [selectedRate, setSelectedRate] = useState(0);

  const handleRate = (rate) => {
    setSelectedRate((prev) => {
      if (prev === rate && rate === 1) {
        return 0;
      } else return rate;
    });

    rateApi
      .post({ username, rate })
      .then((res) => {
        console.info({ res });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box>
      <Flex>
        {EMPTY_ARR.map((item) => (
          <Box
            key={item}
            cursor="pointer"
            color="yellow.500"
            onClick={() => handleRate(item)}
            as={selectedRate >= item ? AiFillStar : AiOutlineStar}
          />
        ))}
      </Flex>
    </Box>
  );
};
