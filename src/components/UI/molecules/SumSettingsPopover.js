import FocusLock from "react-focus-lock";
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  ButtonGroup,
  Button,
  Text,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BsGear } from "react-icons/bs";

const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel
        fontFamily="Inter"
        lineHeight="1.33"
        fontSize="12px"
        color="#000000"
        htmlFor={props.id}
      >
        {props.label}
      </FormLabel>
      <Input
        fontFamily="Inter"
        lineHeight="1.33"
        fontSize="12px"
        color="#000000"
        height="32px"
        ref={ref}
        id={props.id}
        {...props}
      />
    </FormControl>
  );
});

const Form = ({ firstFieldRef, onCancel }) => {
  return (
    <Stack spacing={4}>
      <TextInput label="Temperature" id="temperature" ref={firstFieldRef} />
      <TextInput label="Max. tokens" id="max-tokens" />
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button
          size="sm"
          variant="outline"
          colorScheme="blue"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button size="sm" variant="solid" colorScheme="blue">
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export const PopoverForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <>
      <Stack
        direction="row"
        justify="flex-start"
        align="flex-start"
        spacing="8px"
        alignItems="center"
      >
        <Text
          fontFamily="Inter"
          lineHeight="1.33"
          fontSize="12px"
          color="#000000"
        >
          Temperature: 0.7, Max. tokens: 1000
        </Text>
        <Popover
          isOpen={isOpen}
          initialFocusRef={firstFieldRef}
          onOpen={onOpen}
          onClose={onClose}
          placement="right"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <IconButton size="sm" icon={<BsGear />} />
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <PopoverCloseButton />
              <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </Stack>
    </>
  );
};
