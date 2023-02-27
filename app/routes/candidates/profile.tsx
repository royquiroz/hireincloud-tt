import { useContext } from "react";
import { Container, Text, Icon, Flex } from "@chakra-ui/react";
import { Context } from "~/context/ProfileContext";

// Icons
import { TbError404 } from "react-icons/tb";

// Components
import CardProfile from "~/components/CardProfile";

export default function Index() {
  const { profile } = useContext(Context);

  const isProfileEmpty = () => {
    const entries = Object.entries(profile);
    return entries.length < 1;
  };

  return (
    <Container maxW="7xl" p="14">
      {!isProfileEmpty() ? (
        <CardProfile profile={profile} />
      ) : (
        <Flex alignItems="center" gap="6">
          <Icon boxSize="16" as={TbError404} />
          <Text fontSize="4xl">Sorry there are no results for your search</Text>
        </Flex>
      )}
    </Container>
  );
}
