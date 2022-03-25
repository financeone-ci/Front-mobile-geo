import * as React from "react";
import { FAB, Portal, Provider } from "react-native-paper";
import colors from "../Couleur";

const FloatButton = (props) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon="plus"
          color={colors.color1}
          fabStyle={{ backgroundColor: colors.color4 }}
          actions={[]}
          onStateChange={onStateChange}
          onPress={props.onPress}
        />
      </Portal>
    </Provider>
  );
};

export default FloatButton;
