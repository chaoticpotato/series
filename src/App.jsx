/*
import viteLogo from "/vite.svg";
<img src={viteLogo} className="logo" alt="Vite logo" />
*/
import "./reset.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import SeriesDetails from "./components/SeriesDetails";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>
        <Route path="/details/:name">
          {/* detay sayfası */}
          <SeriesDetails />
        </Route>
      </Switch>
    </main>
  );
}

export default App;

{
  /*
<div className="mainpage-container">
  <div className="left-column">
    <h2>Burada dizi listesi olacak</h2>
  </div>
  <div className="center-content">Dizi özeti</div>
  <div className="right-column">
    <h2>İzlemek istediklerim</h2>
  </div>
</div>
*/
}
