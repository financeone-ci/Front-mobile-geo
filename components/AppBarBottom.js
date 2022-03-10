import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Style from '../Style';
 const style = Style;
const MusicRoute = () => <Text style={style.appbar}>Music</Text>;

const AlbumsRoute = () => <Text style={style.appbar}>Albums</Text>;

const RecentsRoute = () => <Text style={style.appbar}>Recents</Text>;

const AppBarBottom = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
   
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);
 

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation style={style.appbar}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default AppBarBottom;