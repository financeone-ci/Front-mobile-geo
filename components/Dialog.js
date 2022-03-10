import * as React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';

const MyDialog = (props) => {
  const [visible, setVisible] = React.useState(props.visible);

  const hideDialog = () => setVisible(false);
  React.useEffect(() => {
    setVisible(props.visible)
  }, [props])
console.log(props)
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Actions>
          <Button onPress={() => hideDialog}>Cancel</Button>
          <Button onPress={() => console.log('Ok')}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default MyDialog;