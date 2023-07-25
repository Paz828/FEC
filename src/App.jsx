import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TestComponent from "./components/TestComponent";
import Header from "./components/HeaderFolder/Header"
import Footer from "./components/FooterFolder/Footer"

function App() {
  const [testArr, setTestArr] = useState([]);

  const url = "https://steam-clone-zf6a.onrender.com";

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(url + "/game_info");
        const data = response.data;
        setTestArr(data);
      };

      getData();
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <>
      <div>
        <Header />
      </div>
      <h1>ドキドキ</h1>
      {testArr.map((elem) => (
        <TestComponent elem={elem} key={elem.game_id} />
      ))}
      <Footer />
    </>
  );
}

export default App;
