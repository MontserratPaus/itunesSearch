import * as React from 'react';
import {SearchInput, ListOfResults, HeaderBar, Footer} from "./components";

import './App.css';

function App() {
  const [data, setData] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  async function itunesApiRequest(term) {
    const url = new URL('https://itunes.apple.com/search');
    const params = {
      term,
      limit: 20,
      offset: 0
    };
    try {
      url.search = new URLSearchParams(params);
      const response = await fetch(url);
      const dataBackEnd = await response.json();
      setData(dataBackEnd.results);
      setErrorMessage("")
    } catch (error) {
      setErrorMessage("No Search results")
      setData([]);
    }
  }

  return (
      <div className="app">
        <HeaderBar />
        <SearchInput onClickSearch={itunesApiRequest}/>
        <ListOfResults data={data} errorMessage={errorMessage} />
        <Footer />
      </div>
  );
}

export default App;
