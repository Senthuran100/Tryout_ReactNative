import { Text, View, Image, Button } from 'react-native';
import { styles } from '../styles';

const readFullArticle = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

export const Item = ({ data }) => {
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