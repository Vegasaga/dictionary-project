import React, { useState } from "react";
import axios from "axios";
import Words from "./Words";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search() {
    // API docu https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  function handlePexelsResponds(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();

    let pexelsApiKey =
      "LyysUDd3sqqKS6wyw0j80s9Z80PoFXzXUZXIRgaBVUWgNMIJ00ufxpGj";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponds);
  }

  function handelKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function loadWord() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <div className="search-row">
              <input
                type="search"
                autoFocus={true}
                onChange={handelKeywordChange}
                placeholder="Example: Serendipity"
                className="search-bar"
              />

              <input type="submit" value="Search" className="search-button" />
            </div>
          </form>
        </section>
        <Words results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    loadWord();
    return "Loading...";
  }
}
