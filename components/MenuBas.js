import React, { useEffect } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Accueil from "../screens/Accueil";
import Profil from "../screens/Profil";
import Param from "../screens/Param";
import colors from "../Couleur";

const accueil = () => <Accueil />;
const profil = () => <Profil />;
const param = () => <Param />;

const MenuBas = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Accueil", title: "Accueil", icon: "home" },
    { key: "Profil", title: "Profil", icon: "shield-account" },
    { key: "Param", title: "Paramètres", icon: "cog" },
  ]);

  useEffect(() => {
    navigation.setOptions({ title: routes[index].title });
  }, [index]);

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
