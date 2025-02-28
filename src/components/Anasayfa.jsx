import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SeriesItem from "./SeriesItem";
import PreviewItem from "./PreviewItem";

export default function Anasayfa({ myList, addToMyList, removeFromMyList }) {
  const [series, setSeries] = useState(null);
  const [page, setPage] = useState(1);

  const [previewItem, setPreviewItem] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.episodate.com/api/most-popular?page=${page}`)
      .then((response) => {
        // handle success
        setSeries(response.data.tv_shows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  function updatePage(newPage) {
    if (newPage < 1) return;
    setPage(newPage);
  }

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
                    handlePreview={() => updatePreviewItem(dizi)}
                  />
                ))
              : "diziler yükleniyor"}
          </div>
          <div className="seriesList-footer">
            <button onClick={() => updatePage(page - 1)} disabled={page === 1}>
              Geri
            </button>
            <div>{page}</div>
            <button onClick={() => updatePage(page + 1)}>İleri</button>
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
          <h2>İzlemek istediklerim ({myList.length})</h2>
          <div className="scroll-area">
            {myList.map((dizi) => (
              <SeriesItem
                key={dizi.id}
                item={dizi}
                handleRemove={() => removeFromMyList(dizi)}
              />
            ))}
          </div>
          <div className="myList-footer">
            <span>Listede yok mu?</span>
            <Link to="/add-series" className="button">
              Ekle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
