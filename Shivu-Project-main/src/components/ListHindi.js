import "./ListHindi.css";
import Khairiyat from "../audio/Khairiyat.mp3";
import MannMera from "../audio/Mann Mera.mp3";
import Shayad from "../audio/Shayad.mp3";
import Teri_Mitti from "../audio/Teri Mitti.mp3";
import Teeji_Seat from "../audio/Teeji Seat.mp3";
const ListHindi = () => {
  return (
    <div className="my-3">
      <h1>Hindi</h1>
      <hr />
      <hr />
      <div>
        <ul type="none">
          <li>
            <h3>Khairiyat</h3>
            <audio controls>
              <source src={Khairiyat} />
            </audio>
            <br />
          </li>
          <hr />
          <li>
            <h3>Mann Mera</h3>
            <audio controls>
              <source src={MannMera} />
            </audio>
          </li>
          <hr />
          <li>
            <h3>Shayad</h3>
            <audio controls>
              <source src={Shayad} />
            </audio>
          </li>
          <hr />
          <li>
            <h3>Teri Mitti</h3>
            <audio controls>
              <source src={Teri_Mitti} />
            </audio>
          </li>
          <hr />
          <li>
            <h3>Teeji Seat</h3>
            <audio controls>
              <source src={Teeji_Seat} />
            </audio>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default ListHindi;
