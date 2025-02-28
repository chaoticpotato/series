/*
import viteLogo from "/vite.svg";
<img src={viteLogo} className="logo" alt="Vite logo" />
*/
import "./reset.css";
import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import SeriesDetails from "./components/SeriesDetails";
import AddForm from "./components/AddForm";

function App() {
  const [myList, setMyList] = useState([]);

  function addToMyList(item) {
    const newList = [item, ...myList];
    setMyList(newList);
  }

  function removeFromMyList(item) {
    const newList = myList.filter((dizi) => dizi.id !== item.id);
    setMyList(newList);
  }

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Anasayfa
            myList={myList}
            addToMyList={addToMyList}
            removeFromMyList={removeFromMyList}
          />
        </Route>
        <Route path="/details/:name">
          {/* detay sayfası */}
          <SeriesDetails />
        </Route>
        <Route path="/add-series">
          <AddForm addToMyList={addToMyList} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
