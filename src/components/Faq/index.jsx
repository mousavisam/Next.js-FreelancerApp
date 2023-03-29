import { Grid, GridItem, Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,

  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Select,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,} from "@chakra-ui/react";

export const Faq = () => {
  return (
    <> <Flex
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

          <Box h="1300px" w="1200px"p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="lg" border="1px" borderColor="Black">
          <OrderedList width={2000}>
  <ListItem width="1100px">What is a Skill Tree website?<br></br>
A Skill Tree website is an online platform that connects Skill Trees with clients who need their services. It allows Skill Trees to create profiles, showcase their skills, and find clients who are willing to hire them for short-term or long-term projects.
</ListItem><br></br>
<ListItem width="1100px">How do I sign up as a freelancer on a Skill Tree website?<br></br>
To sign up as a freelancer on a Skill Tree website, you will need to create an account, fill out your profile information, and verify your email address. You may also need to provide samples of your work or take skills tests to demonstrate your abilities.

</ListItem><br></br>
<ListItem width="1100px">How do I find work on a Skill Tree website?<br></br>
To find work on a Skill Tree website, you can browse available jobs and apply to those that match your skills and experience. You can also create a profile that showcases your skills and wait for clients to contact you with job offers.

</ListItem><br></br>
<ListItem width="1100px">How much does it cost to use a Skill Tree website?<br></br>
Most freelancing websites are free to use for freelancer, but they may charge fees for certain services such as upgrading your profile or applying to jobs. Some websites also take a percentage of your earnings as a commission.

</ListItem><br></br>
<ListItem width="1100px">How do I get paid for work done through a Skill Tree website?<br></br>
Payments for work done through a Skill Tree website are typically handled through the website's payment system. Clients may deposit funds into an online account, which is released to the Skill Tree upon completion of the project. Some websites also offer direct payment options such as PayPal or bank transfer.

</ListItem><br></br>
<ListItem width="1100px">How do I ensure payment for work done through a Skill Tree website?<br></br>
To ensure payment for work done through a Skill Tree website, it's important to establish clear terms with the client before starting the project. This may include agreeing on a payment schedule, setting milestones, and outlining the scope of the work.

</ListItem><br></br>


<ListItem width="1100px">What types of projects are available on Skill Tree websites?<br></br>
Skill Tree websites offer a wide range of projects across various industries, including writing, graphic design, web development, marketing, and more. Some websites also offer specialized projects, such as transcription or translation services.
</ListItem><br></br>
<ListItem width="1100px">How do I build my reputation on a Skill Tree websi<br></br>
To build your reputation on a Skill Tree website, it's important to complete projects on time and to a high standard. You should also communicate clearly with clients, provide regular updates, and be responsive to feedback. A strong portfolio of work and positive reviews from past clients can also help to build your reputation.
</ListItem><br></br>
<ListItem width="1100px">How do I communicate with clients on a skill tree website?<br></br>
Most freelancer websites have built-in messaging systems that allow you to communicate with clients directly. You can use this system to ask questions, clarify project details, and provide updates on your progress.
</ListItem><br></br>
<ListItem width="1100px">What should I do if I encounter a problem with a client on a Skill Tree website?<br></br>
If you encounter a problem with a client on a Skill Tree website, you should try to resolve the issue directly with the client first. If this is not possible, you can contact the website's support team for assistance. Some websites also have dispute resolution processes in place to help resolve conflicts between freelancers and clients.
</ListItem><br></br>
<ListItem width="1100px">How do I set my rates as a freelancer on a Skill Tree website?<br></br>
Setting your rates as a freelancer on a Skill Tree website can be challenging, but it's important to ensure that you are charging a fair price for your services. You can research industry standards and compare rates with other freelancers on the website to get an idea of what is reasonable. You should also take into account your level of experience, the complexity of the project, and any additional costs (such as software or equipment) when setting your rates.
</ListItem><br></br>
<ListItem width="1100px"> How do I protect my intellectual property as a freelancer on a Skill Tree website?<br></br>
It's important to protect your intellectual property as a freelancer on a Skill Tree website. This may include copyrighting your work, using watermarks or other protective measures, and including terms in your contract that specify how your work can be used. You should also be wary of scams or clients who may try to take advantage of your work without paying for it.
</ListItem><br></br>


  
</OrderedList>
          </Box>
        </GridItem>
      </Grid>
      </Flex>
    </>
  );
};
