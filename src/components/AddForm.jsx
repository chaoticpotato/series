import { useState } from "react";
const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
import { customAlphabet } from "nanoid";
import { useHistory } from "react-router-dom";
import FormGroup from "./FormGroup";

export default function AddForm({ addToMyList }) {
  const [formData, setFormData] = useState({
    title: "Black Mirror",
    poster:
      "https://images-cdn.ubuy.ae/63552b89e521d12def0c7bde-mcposters-black-mirror-tv-show-series.jpg",
  });

  const [formErrors, setFormErrors] = useState({
    title: false,
    poster: false,
  });

  const history = useHistory();

  function handleBlur(event) {
    const { name, value } = event.target;

    if (name === "title") {
      setFormErrors({ ...formErrors, title: value.length === 0 });
    }

    if (name === "poster") {
      // http ile başlamıyorsa, formErrors stateini güncelle
      setFormErrors({ ...formErrors, poster: !urlRegex.test(value) });
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    const generateId = customAlphabet("1234567890", 5); // Sadece sayılar ve 5 basamak
    const randomId = generateId();

    event.preventDefault();
    // formdan gelen değerler : title, poster
    // listedeki değerler: name, image_thumbnail_path
    addToMyList({
      name: formData.title,
      image_thumbnail_path: formData.poster,
      id: randomId,
    });

    setTimeout(() => {
      history.push("/");
    }, 200);
  }

  return (
    <div className="details-container">
      <div className="form-container">
        <h2>Dizi ekle</h2>
        {/* isim, afiş (URL) */}
        <form onSubmit={handleSubmit}>
          <FormGroup
            labelText="Dizi Adı"
            labelFor="title"
            error={formErrors.title && <span>Dizi adı yazın</span>}
          >
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-input"
              value={formData.title}
            />
          </FormGroup>

          <FormGroup
            labelText="Poster URL"
            labelFor="poster"
            error={formErrors.poster && <span>Geçerli bir URL yazın</span>}
          >
            <input
              type="text"
              name="poster"
              id="poster"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="https://..."
              className="form-input"
              value={formData.poster}
            />
          </FormGroup>

          <button className="save-button">Kaydet</button>
        </form>
      </div>
    </div>
  );
}
