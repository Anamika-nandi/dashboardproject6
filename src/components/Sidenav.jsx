import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RiGlobalLine } from "react-icons/ri";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { HiShieldExclamation } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { BsActivity } from "react-icons/bs";
import { BiStation } from "react-icons/bi";
// import { HiMiniBarsArrowDown } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
const Sidenav = () => {
  const location = useLocation();

  console.log(location);

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    {
      icon: RiGlobalLine,
      text: "Monitors",
      link: "/",
    },
    {
      icon: BsActivity,
      text: "Heartbeats",
      link: "/transactions",
    },
    {
      icon: MdCall,
      text: "Who's on-call?",
      link: "/transactions",
    },
    {
      icon: HiShieldExclamation,
      text: "Incidents",
      link: "/transactions",
    },
    {
      icon: HiUser,
      text: "Team members",
      link: "/transactions",
    },
    {
      icon: BiStation,
      text: "Status pages",
      link: "/transactions",
    },
    // {
    //   icon: HiMiniBarsArrowDown,
    //   text: "Escalation polices",
    //   link: "/transactions",
    // },
    {
      icon: BsArrowDownUp,
      text: "Integrations",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          @DOSOMECODING
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
