import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useStae(fales);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
function handlePexelsResponse(response) {
  console.log(response.data);
  setPhotos(response.data.photos);
}

  function search(){

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);
    
    let pexelsApiKey = "c7bc0ta3bd1b1ab473o02ceeefd78e44";
    let pexelAPIUrl="https://api.shecodes.io/images/v1/search?query={query}&key={key}";
    axios.get(pexelsApiUrl).then(handlePexelsResponse);
  
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded){

    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} 
          defaultValue={props.defaultKeyword}/>
        </form>
        <div className="Hint">
          Suggested words: sunset, yoga, plants;
          </div>
        </section>
        {results ? <Results results={results} /> : null}
      <photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }

 
}