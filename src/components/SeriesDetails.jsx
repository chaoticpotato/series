import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircleNotch } from "@phosphor-icons/react";
import axios from "axios";

export default function SeriesDetails() {
  let { name } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.episodate.com/api/show-details?q=${name}`)
      .then((response) => {
        // handle success
        setDetails(response.data.tvShow);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="details-container">
      {details ? (
        <div className="details">
          <h2>{details.name}</h2>
          <p>{details.description}</p>
          <Link to="/">Ana sayfaya dön</Link>
        </div>
      ) : (
        <div className="details">
          {/* <img
            className="loading"
            src="https://media.tenor.com/-n8JvVIqBXkAAAAM/dddd.gif"
            alt=""
          /> */}

          <div style={{ textAlign: "center", paddingTop: "7rem" }}>
            <CircleNotch size={64} />
          </div>
        </div>
      )}
    </div>
  );
}
