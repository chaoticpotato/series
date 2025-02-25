import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import SeriesItem from "./SeriesItem";

export default function Anasayfa() {
  const [series, setSeries] = useState(null);
  const [previewItem, setPreviewItem] = useState({
    id: 23455,
    name: "Game of Thrones",
    permalink: "game-of-thrones",
    start_date: "2011-04-17",
    end_date: null,
    country: "US",
    network: "HBO",
    status: "Ended",
    image_thumbnail_path:
      "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg",
  });

  useEffect(() => {
    axios
      .get("https://www.episodate.com/api/most-popular?page=1")
      .then((response) => {
        // handle success
        setSeries(response.data.tv_shows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function updatePreviewItem(item) {
    console.log("dizi değişti");
    setPreviewItem(item);
  }

  return (
    <div className="mainpage-container">
      <div className="left-column">
        <div className="scroll-helper">
          <h2>Popüler diziler</h2>
          <div className="scroll-area">
            {series
              ? series.map((dizi) => (
                  <SeriesItem
                    key={dizi.id}
                    item={dizi}
                    // handleChange={updatePreviewItem}
                    handleChange={() => updatePreviewItem(dizi)}
                  />
                ))
              : "diziler yükleniyor"}
          </div>
        </div>
      </div>
      <div className="preview-content">
        <img src={previewItem.image_thumbnail_path} alt={previewItem.name} />
        <div className="preview">
          <h1>{previewItem.name}</h1>
          <div className="preview-infos">
            <span className="pill">{previewItem.country}</span>
            <span className="pill">{previewItem.network}</span>
            <span className="pill">{previewItem.status}</span>
          </div>

          <div className="preview-buttons">
            <Link to="/details/game-of-thrones" className="button">
              Dizi detay
            </Link>
            <button className="action-button">Listeme ekle</button>
          </div>
        </div>
      </div>
      <div className="right-column">
        <h2>İzlemek istediklerim</h2>
      </div>
    </div>
  );
}
