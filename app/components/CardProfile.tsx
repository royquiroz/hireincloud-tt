import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  Icon,
  Flex,
  CardFooter,
} from "@chakra-ui/react";

// Icons
import { MdLocationPin, MdPhone, MdEmail, MdFlag } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

// Utils
import { capitalize, deleteProtocol, transformDate } from "~/utils";

interface ProfileProps {
  profile: Profile;
}

interface Profile {
  _id: string;
  name: string;
  email: string;
  phone: Phone;
  nationality: string;
  country: string;
  city: string;
  linkedin: string;
  resume: string;
  photo: string;
  validated_by: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
}

interface Phone {
  areaCode: string;
  number: string;
}

export default function CardProfile({ profile }: ProfileProps) {
  const buildPhone = () => {
    return `${profile?.phone?.areaCode} ${profile?.phone?.number}`;
  };

  return (
    <Card
      direction={{ base: "row", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        src={profile?.photo}
        alt={profile?.name}
        boxSize="60"
        objectFit="cover"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{profile?.name}</Heading>

          <Stack gap="4" isInline>
            <Flex alignItems="center" gap="2">
              <Icon as={MdFlag} />
              <Text py="2">{profile?.nationality}</Text>
            </Flex>
            <Flex alignItems="center" gap="2">
              <Icon as={MdLocationPin} />
              <Text py="2">
                {profile?.city}, {capitalize(profile?.country)}
              </Text>
            </Flex>
          </Stack>
          <Stack gap="8" isInline>
            <Flex alignItems="center" gap="2">
              <Icon as={MdEmail} />
              <Text py="2">{profile?.email}</Text>
            </Flex>
            <Flex alignItems="center" gap="2">
              <Icon as={MdPhone} />
              <Text py="2">{buildPhone()}</Text>
            </Flex>
            <Flex alignItems="center" gap="2">
              <Icon as={FaLinkedin} />
              <Text py="2">
                <Link href={profile?.linkedin} isExternal>
                  {deleteProtocol(profile?.linkedin)}
                </Link>
              </Text>
            </Flex>
          </Stack>
        </CardBody>
        <CardFooter display="block">
          <Stack m="1" isInline>
            <Flex alignItems="center" gap="1">
              <Text fontSize="xs" fontWeight="bold">
                Created by
              </Text>
              <Text fontSize="xs">{profile?.created_by}</Text>
            </Flex>
            <Flex alignItems="center" gap="1">
              <Text fontSize="xs" fontWeight="bold">
                Updated by
              </Text>
              <Text fontSize="xs">{profile?.updated_by}</Text>
            </Flex>
            <Flex alignItems="center" gap="1">
              <Text fontSize="xs" fontWeight="bold">
                Validated by
              </Text>
              <Text fontSize="xs">{profile?.validated_by}</Text>
            </Flex>
          </Stack>
          <Stack m="1" isInline>
            <Flex alignItems="center" gap="1">
              <Text fontSize="xs" fontWeight="bold">
                Created at
              </Text>
              <Text fontSize="xs">{transformDate(profile?.created_at)}</Text>
            </Flex>
            <Flex alignItems="center" gap="1">
              <Text fontSize="xs" fontWeight="bold">
                Updated at
              </Text>
              <Text fontSize="xs">{transformDate(profile?.updated_at)}</Text>
            </Flex>
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  );
}
