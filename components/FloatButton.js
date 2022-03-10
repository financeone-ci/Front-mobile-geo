import * as React from "react";
import { FAB, Portal, Provider } from "react-native-paper";

const FloatButton = (props) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? "calendar-today" : "phone-in-talk"}
          actions={[
            { icon: "plus", onPress: () => console.log("Pressed add") },
            {
              icon: "cellphone",
              label: "Star",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "cellphone-android",
              label: "Email",
              onPress: () => console.log("Pressed email"),
            },
            {
              icon: "bell",
              label: "Remind",
              onPress: () => console.log("Pressed notifications"),
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default FloatButton;
