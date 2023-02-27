import { useState } from "react";
import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react";

interface InputEmailProps {
  name: string;
  input: string;
  setInput: (value: string) => void;
}

function InputEmail({ name, input, setInput }: InputEmailProps) {
  const [isError, setError] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (value === "") {
      setError(true);
    } else {
      setError(false);
    }
    setInput(value);
  };

  return (
    <FormControl isInvalid={isError}>
      <Input
        name={name}
        type="email"
        placeholder="email"
        value={input}
        onChange={handleInputChange}
      />
      {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
    </FormControl>
  );
}

export default InputEmail;
