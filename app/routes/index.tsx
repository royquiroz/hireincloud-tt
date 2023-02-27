import { useContext, useState, useEffect } from "react";
import { ActionArgs } from "@remix-run/node";
import {
  Form,
  useActionData,
  useNavigate,
  useTransition,
} from "@remix-run/react";
import { Button, Container, Flex, Heading, useToast } from "@chakra-ui/react";
import { Context } from "~/context/ProfileContext";

// Components
import InputEmail from "~/components/InputEmail";
import { getCandidate } from "../services/candidate";

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const email = body.get("email");

  const data = await getCandidate(email);

  return data;
};

export default function Index() {
  const data = useActionData();
  const transition = useTransition();
  const navigate = useNavigate();
  const toast = useToast();
  const [input, setInput] = useState("");
  const { setProfile } = useContext(Context);

  const isLoading = () => {
    if (transition.state === "submitting" || transition.state === "loading")
      return true;

    return false;
  };

  useEffect(() => {
    if (data?.length <= 0 && transition.state === "idle") {
      toast({
        description: "You don't have an account, sign up please",
        status: "error",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [data, transition]);

  useEffect(() => {
    if (data?.length > 0) {
      setProfile(data[0]);
      navigate("/candidates/profile");
    }
  }, [data]);

  return (
    <Container maxW="2xl" p="14">
      <Heading as="h1" size="xl" marginBottom="12">
        Log In
      </Heading>
      <Form method="post">
        <Flex alignItems="flex-start" gap="2">
          <InputEmail name="email" input={input} setInput={setInput} />
          <Button
            width="56"
            colorScheme="green"
            loadingText="Loading"
            isLoading={isLoading()}
            isDisabled={input === ""}
            type="submit"
          >
            Verify
          </Button>
        </Flex>
      </Form>
    </Container>
  );
}
