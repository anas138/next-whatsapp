import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Styles } from "./formStyle";
import { dataTypes } from "../../enums/types";
type propsType = {
  submitForm: (data: dataTypes) => void;
  action: string;
};

function Form(props: propsType) {
  const [data, setData] = useState<dataTypes>({
    username: "",
    email: "",
    password: "",
  });
  const handleInputs = (e: object) => {
    data[e.target.name] = e.target.value;
    setData({ ...data });
  };
  return (
    <Box sx={Styles.form}>
      <TextField
        name="username"
        label="Username"
        variant="outlined"
        className="textInput"
        onChange={handleInputs}
      />
      {props.action === "signup" && (
        <TextField
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          className="textInput"
          onChange={handleInputs}
        />
      )}
      <TextField
        name="password"
        type="password"
        label="Password"
        variant="outlined"
        className="textInput"
        onChange={handleInputs}
      />
      {props.action === "signup" ? (
        <Button
          variant="contained"
          onClick={() => {
            props.submitForm(data);
          }}
        >
          Sign in
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            props.submitForm(data);
          }}
        >
          Login
        </Button>
      )}
    </Box>
  );
}

export default Form;
