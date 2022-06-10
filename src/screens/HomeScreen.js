import { Button } from "react-native-paper";
import { View, Text } from "react-native-web";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Tela de Screen</Text>
      <Button mode="outlined" onPress={() => navigation.navigate("News")}>
        Tela de Notícia
      </Button>
    </View>
  );
}
