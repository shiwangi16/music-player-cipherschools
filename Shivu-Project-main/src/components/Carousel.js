import "./Carousel.css";
import pic1 from "../media/c1.jpeg";
import pic2 from "../media/c2.jpeg";
import pic3 from "../media/c3.jpeg";
const Carousel = () => {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pic1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Tunify Music - Tune In and Enjoy!!!</h5>
              <p>
                An online and free website for listening to music anytime, anywhere.
              </p>
              <a href="/dash"><button className="btn-success btn-sm rounded border-dark">Dashboard</button></a>
              &emsp;
              <a href="/about"><button className="btn-primary btn-sm rounded border-dark">About</button></a>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pic2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>A vareity of songs available.</h5>
              <p>
                There are many different songs available to listen to in different genres.
              </p>
              <a href="/dash"><button className="btn-success btn-sm rounded border-dark">Dashboard</button></a>
              &emsp;
              <a href="/about"><button className="btn-primary btn-sm rounded border-dark">About</button></a>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pic3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Yes, it's free!!!</h5>
              <p>
                It's totally free of cost, you only need headphones, yes that's it.
              </p>
              <a href="/dash"><button className="btn-success btn-sm rounded border-dark">Dashboard</button></a>
              &emsp;
              <a href="/about"><button className="btn-primary btn-sm rounded border-dark">About</button></a>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
