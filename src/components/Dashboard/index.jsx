import {
  Grid,
  Box,
  VStack,
  Stack,
  Button,
  StackDivider,
  ButtonGroup,
  Wrap,
  WrapItem,
  Center,
  Card,
  CardBody,
  Table,
  BillingRow,
  billingData,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Spacer,
  Text,
  SimpleGrid,
  Square,
  Heading,
  CardFooter,
  CardHeader,
  GridItem,
  HStack,
  Link,
  Icon,
  Badge,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { useState } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const Dashboard = () => {
  const [product, setProduct] = useState([
    {
      name: "T-shirt",
      data: [234, 45, 67, 987, 345, 456, 87, 321, 45, 569, 76, 890],
    },
    {
      name: "Shirt",
      data: [562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706, 20],
    },
    {
      name: "Jeans",
      data: [1012, 345, 117, 697, 845, 56, 287, 1321, 1845, 469, 306, 120],
    },
  ]);

  const [option, setOption] = useState({
    title: { text: "Product sell in 2021" },
    xaxis: {
      title: { text: "Product Sell in Months" },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: { text: "Product in K" },
    },
  });
  return (
    <>
      <Grid
        templateAreas={`
                  " main nav"
                  "main nav"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"1050px 1fr"}
        h="80vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"main"}>
          <Box
            shadow="md"
            left="400px"
            width="1000px"
            borderWidth="1px"
            borderRadius="sm"
          >
            <Link fontSize="xl">User 1</Link>

            <Text mt={4}>
              Hello Freelancers! Hope you are doing well. We just wanted to let
              you know that this month we added these skills into the site:
              Adobe Workfront, Windchill PLM, Cloud Custodian, ChatGPT and
              Firewall If you work with these skills and want to add them you
              can do it from your profile, if you have any issue do not hesitate
              to contact support.
            </Text>
            <Text mt={4}></Text>
          </Box>
          <Box></Box>
          <Box
            shadow="md"
            left="400px"
            width="1000px"
            borderWidth="1px"
            borderRadius="sm"
          >
            <Link fontSize="xl">User 2</Link>

            <Text mt={4}>
              Freelancer blocks executable files in attachments for a reason. Be
              careful of clicking on Google Drive links or zip files as they may
              contain a virus. If you are suspicious of a file you can put the
              link into virustotal.com for scanning.
            </Text>
            <Text mt={4}></Text>
          </Box>
        </GridItem>
        <GridItem pl="2" area={"nav"}>
          <ReactApexChart
            type="line"
            width={490}
            height={350}
            series={product}
            options={option}
          ></ReactApexChart>
        </GridItem>
      </Grid>
    </>
  );
};
