export default function SeriesItem({ item, handlePreview, handleRemove }) {
  return (
    <div className="series-item">
      <img src={item.image_thumbnail_path} alt="Dizi afiş" />
      <div>
        <h3>{item.name}</h3>

        {handlePreview && <button onClick={handlePreview}>İncele</button>}
        {handleRemove && <button onClick={handleRemove}>Çıkar</button>}
      </div>
    </div>
  );
}
