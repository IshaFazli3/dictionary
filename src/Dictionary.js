import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});


  function handleResponse(response){
    console.log(response.data);
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    
    let apiUrl = 
    "https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}";
    console.log(response.data[0]);
    setResults(response.data[0]);
    
    axios.get(apiUrl).then(handleResponse);
  }


  function handleKeywordChange(event){
    setKeyword(event.target.value);

  }
  return (
    <div classNme="Dictionary">
     <form onSubmit={search}> 
      <input type="search" 
      onChange={handleKeywordChange} />
     </form>
     <Results results={results}/>
    </div>
  ) 
}