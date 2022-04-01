import React, { useEffect } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Accueil from "../screens/Accueil";
import Profil from "../screens/Profil";
import Param from "../screens/Param";
import colors from "../Couleur";
import * as Location from "expo-location";

const MenuBas = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Accueil", title: "Accueil", icon: "home" },
    { key: "Profil", title: "Profil", icon: "shield-account" },
    { key: "Param", title: "Paramètres", icon: "cog" },
  ]);

  // Vérifier l'activation du GPS
  useEffect(() => {
    // const [location, setLocation] = useState(null);
    const getCoordonnees = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
    };
    getCoordonnees();
  }, []);

  useEffect(() => {
    props.navigation.setOptions({ title: routes[index].title });
  }, [index]);

  const accueil = () => (
    <Accueil
      userId={props.route.params.userId}
      jeton={props.route.params.jeton}
    />
  );
  const profil = () => (
    <Profil
      userId={props.route.params.userId}
      jeton={props.route.params.jeton}
    />
  );
  const param = () => (
    <Param
      userId={props.route.params.userId}
      jeton={props.route.params.jeton}
    />
  );

  const renderScene = BottomNavigation.SceneMap({
    Accueil: accueil,
    Profil: profil,
    Param: param,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={colors.color1}
      inactiveColor={colors.color3}
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colors.color4 }}
    />
  );
};

export default MenuBas;
