import { certificateApi, userApi, skillApi, categoryApi } from "@/services";
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
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { AddCertificate } from "./components/AddCertificate";
import { AddSkill } from "./components/AddSkill";

export const Profile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [certificates, setCertificates] = useState([]);
  const [skills, setSkills] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleGetProfile = useCallback(() => {
    userApi
      .profile()
      .then((res) => {
        setUserData(res?.data || {});
      })
      .catch(() => {
        router.push("/login");
      });
  }, []);

  const handleGetCategories = useCallback(() => {
    categoryApi.getAll().then((res) => {
      console.info({ res });
      setCategories(res?.data || []);
    });
  }, []);

  const handleGetCertificates = useCallback(() => {
    certificateApi.get().then((res) => {
      console.info({ res });
      setCertificates(res?.data || []);
    });
  }, []);

  const handleGetSkills = useCallback(() => {
    skillApi.get().then((res) => {
      setSkills(res?.data || []);
    });
  }, []);

  useEffect(() => {
    handleGetProfile();
  }, [handleGetProfile]);

  useEffect(() => {
    handleGetCertificates();
  }, [handleGetCertificates]);

  useEffect(() => {
    handleGetCategories();
  }, [handleGetCategories]);

  useEffect(() => {
    handleGetSkills();
  }, [handleGetSkills]);

  if (isEmpty(userData)) return <div />;

  return (
    <Card p="1rem" my={{ sm: "24px", xl: "0px" }}>
      <CardHeader
        position="relative"
        left="400px"
        width="600px"
        p="12px 5px"
        mb="12px"
      >
        <Text fontSize="md" color="#63B3ED" fontWeight="bold">
          Profile Information
        </Text>
        <br></br>
        <Flex>
          <Avatar src="" />
          <Box ml="3">
            <Text fontWeight="bold">
              {`${userData.first_name} ${userData.last_name}`}
              <Badge ml="1" colorScheme="green">
                Online
              </Badge>
            </Text>
            <Text fontSize="sm">UI Engineer</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody position="relative" left="400px" width="600px" p="0px 5px">
        <Flex direction="column">
          <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
            Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer
            is no. If two equally difficult paths, choose the one more painful
            in the short term (pain avoidance is creating an illusion of
            equality).
          </Text>
          <Flex alignItems="center" mb="18px">
            <Text fontSize="md" color="#63B3ED" fontWeight="bold" me="10px">
              Full Name:{" "}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {`${userData.first_name} ${userData.last_name}`}
            </Text>
          </Flex>
          <Flex alignItems="center" mb="18px">
            <Text fontSize="md" color="#63B3ED" fontWeight="bold" me="10px">
              Username:{" "}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {userData.username}
            </Text>
          </Flex>
          <Flex alignItems="center" mb="18px">
            <Text fontSize="md" color="#63B3ED" fontWeight="bold" me="10px">
              Email:{" "}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              {userData.email}
            </Text>
          </Flex>
          <Flex alignItems="center" mb="18px">
            <Text fontSize="md" color="#63B3ED" fontWeight="bold" me="10px">
              Location:{" "}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              United States
            </Text>
          </Flex>
          <Button width="70px" colorScheme="pink" variant="solid">
            Edit
          </Button>
          <br></br>
          <Box></Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="lg">
            <Heading fontSize="xl">Skills</Heading>
            {skills.map((skill) => (
              <Text key={skill.category} mt={4}>
                {skill.category}
              </Text>
            ))}
          </Box>
          <br></br>
          <ButtonGroup variant="outline" spacing="6">
            <AddSkill callback={handleGetSkills} categories={categories} />
          </ButtonGroup>
          <br></br>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Certifications</Heading>
            {certificates.map((certificate) => (
              <Link
                display="block"
                target="_blank"
                colorScheme="blue"
                href={certificate.link}
                key={certificate.earned_date + certificate.title}
              >
                {certificate.title}
              </Link>
            ))}
          </Box>
          <br></br>
          <ButtonGroup variant="outline" spacing="6">
            <AddCertificate callback={handleGetCertificates} />
          </ButtonGroup>
        </Flex>
      </CardBody>
    </Card>
  );
};
