import "./ListEng.css";
import believer from "../audio/Believer.mp3";
import faded from "../audio/Faded.mp3";
import fairytale from "../audio/Fairytale.mp3";
import perfect from "../audio/Perfect.mp3";
import umbrella from "../audio/Umbrella.mp3";
const ListEng = () => {
  return (
    <div className="my-3">
      <h1>English</h1>
      <hr />
      <hr />
      <div>
        <ul type="none">
          <li>
            <h3>Believer</h3>
            <audio controls>
              <source src={believer} />
            </audio>
            <br />
          </li>
          <hr />
          <li>
            <h3>Faded</h3>
            <audio controls>
              <source src={faded} />
            </audio>
          </li>
          <hr />
          <li>
            <h3>Fairytale</h3>
            <audio controls>
              <source src={fairytale} />
            </audio>
          </li>
          <hr />
          <li>
            <h3>Perfect</h3>
            <audio controls>
              <source src={perfect} />
            </audio>
          </li>
          <hr />
          <li>
            <h3>Umbrella</h3>
            <audio controls>
              <source src={umbrella} />
            </audio>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default ListEng;
