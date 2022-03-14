import React from "react";
import { Button } from "react-native-elements";

function ButtonValide(props) {
  return (
    <>
      <Button
        title={props.title}
        containerStyle={
          props.container || {
            width: 170,
            margin: 10,
          }
        }
        titleStyle={props.titleStyle || { color: "#fff", fontSize: 20 }}
        {...props}
      />
    </>
  );
}

export default ButtonValide;
