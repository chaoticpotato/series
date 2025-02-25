/*
import viteLogo from "/vite.svg";
<img src={viteLogo} className="logo" alt="Vite logo" />
*/
import "./reset.css";
import "./App.css";

import { Switch, Route, Link } from "react-router-dom";

import Anasayfa from "./components/Anasayfa";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>
        <Route path="/details/game-of-thrones">
          {/* detay sayfası */}
          <div className="details-container">
            <div className="details">
              <h2>Dizi detay</h2>
              <Link to="/">Ana sayfaya dön</Link>
            </div>
          </div>
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
