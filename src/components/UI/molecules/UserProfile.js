import { Stack, Text, Icon } from '@chakra-ui/react'
import { BsStar } from 'react-icons/bs'
import { AvatarAtom } from '../atoms/AvatarAtom'
import users from "../../../mocks/users.json"

const user = users.find(user => user.id === 1);
let fullName = "";
let role = "";

if (user) {
    fullName = user.firstName + " " + user.lastName;
    role = user.role;
} else {
    console.log("User with id 1 not found");
}

export const UserProfile = () => (
  <Stack direction="row" justify="flex-start" align="center" spacing="12px">
    <AvatarAtom fullName={fullName} />
    <Stack
      direction="column"
      justify="flex-start"
      align="flex-start"
      spacing="0px"
    >
      <Stack direction="row" justify="flex-start" align="center" spacing="8px">
        <Text
          fontFamily="Inter"
          lineHeight="1.5"
          fontWeight="regular"
          fontSize="16px"
          color="#000000"
          textAlign="center"
        >
          {fullName}
        </Text>
        <Icon as={BsStar} />
      </Stack>
      <Text
        fontFamily="Inter"
        lineHeight="1.33"
        fontWeight="regular"
        fontSize="12px"
        color="#414243"
        textAlign="center"
      >
        {role}
      </Text>
    </Stack>
  </Stack>
)
