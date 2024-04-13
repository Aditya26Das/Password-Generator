import React from "react";
import Box from "./Box";
import { useState , useCallback, useEffect, useRef} from "react";
import "./App.css"

function App() {
  let [length,setLength] = useState(6);
  let [characters,setCharacters] = useState(false);
  let [num,setNum] = useState(false);
  let [password,setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst";
      if(characters)
      {
        str += "!@#%&~`";
      }
      if (num) {
        str += "1234567890";
      }

      for (let index = 0; index < length; index++){
        const x = Math.floor(Math.random()*str.length);
        pass += str.charAt(x);
      }

      setPassword(pass);
    }
    ,[length,characters,num,setPassword])

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
      passwordGenerator()
    }, [characters,num,length,passwordGenerator])

  return (
    <>
      < Box length = {length} setLength = {setLength}
          characters = {characters} setCharacters = {setCharacters}
          num = {num} setNum = {setNum}
          password = {password} setPassword = {setPassword}
          copyPasswordToClipboard = {copyPasswordToClipboard}
          passwordRef = {passwordRef}
      />
    </>
  );
}

export default App;
