import { Grid, GridItem, Box, Text } from "@chakra-ui/react";

export const Faq = () => {
  return (
    <>
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

          <Box h="450px" w="900px" border="1px" borderColor="black"></Box>
        </GridItem>
      </Grid>
    </>
  );
};
