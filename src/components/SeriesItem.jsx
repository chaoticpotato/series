export default function SeriesItem(props) {
  return (
    <div className="series-item">
      <img src={props.item.image_thumbnail_path} alt="Dizi afiş" />
      <div>
        <h3>{props.item.name}</h3>
        {/* <button onClick={() => props.handleChange(props.item)}>İncele</button> */}
        <button onClick={props.handleChange}>İncele</button>
      </div>
    </div>
  );
}
