import { useEffect, useState } from "react";
import axios from "axios";
import SeriesItem from "./SeriesItem";
import PreviewItem from "./PreviewItem";

export default function Anasayfa() {
  const [series, setSeries] = useState(null);
  const [myList, setMyList] = useState([]);

  const [previewItem, setPreviewItem] = useState(null);

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

  function addToMyList(item) {
    const newList = [item, ...myList];
    setMyList(newList);
  }

  function removeFromMyList(item) {
    const newList = myList.filter((dizi) => dizi.id !== item.id);
    setMyList(newList);
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
                    handlePreview={() => updatePreviewItem(dizi)}
                  />
                ))
              : "diziler yükleniyor"}
          </div>
        </div>
      </div>

      {previewItem ? (
        <PreviewItem selected={previewItem}>
          {myList.find((dizi) => dizi.id === previewItem.id) ? (
            <button
              className="action-button"
              onClick={() => removeFromMyList(previewItem)}
            >
              Listemden çıkar
            </button>
          ) : (
            <button
              className="action-button"
              onClick={() => addToMyList(previewItem)}
            >
              Listeme ekle
            </button>
          )}
        </PreviewItem>
      ) : (
        <div className="preview-content">
          <p className="empty-preview">Sol listeden bir dizi seçin</p>
        </div>
      )}

      <div className="right-column">
        <div className="scroll-helper">
          <h2>İzlemek istediklerim</h2>
          <div className="scroll-area">
            {myList.map((dizi) => (
              <SeriesItem
                key={dizi.id}
                item={dizi}
                handleRemove={() => removeFromMyList(dizi)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
