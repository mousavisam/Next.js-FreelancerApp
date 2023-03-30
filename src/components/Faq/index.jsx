import { faqApi } from "@/services";
import {
  Grid,
  GridItem,
  Flex,
  Box,
  ListItem,
  OrderedList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import { useCallback, useEffect, useState } from "react";

export const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  const handleGetFaqs = useCallback(() => {
    faqApi
      .get()
      .then((res) => {
        setFaqs(res?.data || []);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  useEffect(() => {
    handleGetFaqs();
  }, [handleGetFaqs]);

  if (isEmpty(faqs)) return <div />;

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"Top"}
        justify={"Center"}
        color="blue.400"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Grid
          templateAreas={`
                        "main main"`}
          gridTemplateColumns={"150px 1fr"}
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" area={"main"}>
            <Text as="b" fontSize="50px" color="black">
              {"FAQ'S"}
            </Text>

            <Box
              maxW="1200px"
              p={5}
              shadow="md"
              borderWidth="1px"
              flex="1"
              borderRadius="lg"
              border="1px"
              borderColor="Black"
            >
              <OrderedList>
                {faqs.map((faq) => (
                  <ListItem key={faq.question} mb="10px">
                    {faq.question}<br></br>{faq.answer}
                  </ListItem>
                ))}
              </OrderedList>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};
