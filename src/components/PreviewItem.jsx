import { Link } from "react-router-dom";

export default function PreviewItem({ selected, children }) {
  return (
    <div className="preview-content">
      <img src={selected.image_thumbnail_path} alt={selected.name} />
      <div className="preview">
        <h1>{selected.name}</h1>

        <div className="preview-infos">
          <span className="pill">{selected.country}</span>
          <span className="pill">{selected.network}</span>
          <span className="pill">{selected.status}</span>
        </div>

        <div className="preview-buttons">
          <Link to={`/details/${selected.permalink}`} className="button">
            Dizi detay
          </Link>
          {/* burada action button olacak */}
          {children}
          {/* burada action button olacak */}
        </div>
      </div>
    </div>
  );
}
