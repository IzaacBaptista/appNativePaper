import { useEffect, useState } from "react";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import { View, Text, FlatList } from "react-native-web";

export default function News() {
  const [data, setData] = useState();
  const [subject, setSubject] = useState("Android");

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://newsapi.org/v2/everything?q=${subject}&from=2022-06-09&sortBy=popularity&apiKey=18e4d5aee2074603b4281db34843e37d`
      )
        .then((response) => response.json())
        .then((json) => setData(json.articles))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [subject]);

  return (
    <View>
      <Text>Mudar para outras Buscas</Text>
      <Button onPress={() => setSubject("Horses")} mode="contained">
        Mudar para Horses
      </Button>
      <Button onPress={() => setSubject("Horses")} mode="contained">
        Mudar para Horses
      </Button>

      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={(item) => (
          <CardNews
            title={item.item.title}
            description={item.item.description}
            image={item.item.urlToImage}
          />
        )}
      />
    </View>
  );
}

const CardNews = (props) => {
  return (
    <Card>
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.description}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: props.image }} />
    </Card>
  );
};
