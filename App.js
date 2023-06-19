import React from 'react';
import {Home } from './Components/Home';
import {Loading} from './Components/Loading';

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

  if (fetchingData) {
    return <Loading />
  } else {
    return <Home data={items} />
  }
}


