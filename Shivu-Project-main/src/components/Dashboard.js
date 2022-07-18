import pic1 from "../media/english.jpeg";
import pic2 from "../media/hindi.jpeg";
const Dashboard = () => {
  return (
    // <div className="container-fluid">
    //     {/* <h1>Dash</h1> */}
    //   <div class="card comp my-3">
    //     <img src={pic1} class="card-img-top" alt="..." />
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </p>
    //       <a href="/english" class="btn btn-primary">
    //         Go somewhere
    //       </a>
    //     </div>
    //   </div>
    //   <div class="card comp my-3">
    //     <img src={pic2} class="card-img-top" alt="..." />
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </p>
    //       <a href="/hindi" class="btn btn-primary">
    //         Go somewhere
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div class="card my-5 bg-warning container border-dark rounded-pill">
        <div class="card-body">
          <h3 class="card-title">English</h3>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">
            Click on the button below to listen to English songs.
          </p>
          <a href="/english">
            <button className="but btn-success rounded border-dark">Listen Now</button>
          </a>
          &emsp;
          <a href="/">
            <button className="but btn-danger rounded border-dark">Back</button>
          </a>
        </div>
      </div>
      <br />
      <div class="card my-5 bg-info container border-dark rounded-pill">
        <div class="card-body">
          <h3 class="card-title">Hindi</h3>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">
            Click on the button below to listen to Hindi songs.
          </p>
          <a href="/hindi">
            <button className="but btn-success rounded border-dark">Listen Now</button>
          </a>
          &emsp;
          <a href="/">
            <button className="but btn-danger rounded border-dark">Back</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
