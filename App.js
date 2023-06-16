import { Text, View, FlatList, Image, Button, Linking } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Home = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({ item }) => <Item data={item} />}
      />
    </View>
  );
}

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>
        Loading...
      </Text>
    </View>
  );
}

const readFullArticle = (url) => {
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
}

export default function App() {

  const API_KEY = "2d3679109a164426ad5ec566567ac4f7"
  const apiUrl = `https://newsapi.org/v2/everything?q=comics&sortBy=publishedAt&apiKey=${API_KEY}`;

  const [fetchingData, setFetchingDataState] = React.useState(true);
  const [items, setItems] = React.useState([]);

  setTimeout(() => {
    setFetchingDataState(false);
  }, 10000);

  React.useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        return data.articles;
      })
      .then(articles => {
        setItems(articles);
        setFetchingDataState(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])
  console.log('items');

  if (fetchingData) {
    return <Loading />
  } else {
    return <Home data={items} />
  }
}

const Item = ({ data }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{ uri: data.urlToImage }} />
      <Text style={styles.itemTitle}>
        {data.title}
      </Text>
      <Text style={styles.itemDescription}>
        {data.description}
      </Text>
      <View style={styles.itemBtn}>
        <Button onPress={() => { readFullArticle(data.url); }} title="Read" />
      </View>
    </View>
  )
}


