const Home = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://sociality.io/blog/wp-content/uploads/2022/07/insights_5TipsForClick-worthyFacebookCarouselAd.jpg"
              class="d-block w-100"
              height="600px"
              alt="..."
            ></img>
          </div>

          <div class="carousel-item">
            <img
              src="https://sociality.io/blog/wp-content/uploads/2022/07/insights_5TipsForClick-worthyFacebookCarouselAd.jpg"
              class="d-block w-100"
              height="600px"
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="https://proinfluent.b-cdn.net/wp-content/uploads/elementor/thumbs/creer-carrousel-LinkedIn-pdvgo043utxzm5uypuievqyck2lqac1elnhls9yd68.jpg"
              height="600px"
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/top-view-desk-concept-with-laptop_23-2148459804.jpg"
              class="d-block w-100"
              height="600px"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <h1 style={{ textAlign: "center" }}>OUR DOMAINS</h1>

      <div class="container" style={{ marginTop: "100px" }}>
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Programming</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAApi81URojkiIUB6pVWQTCtdS8N3wTOa0w&usqp=CAU"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">App development</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRYQdEslPybdMMLed7dy3Jb2i_Ll-SP2RQg&usqp=CAU"
                class="card-img-top"
                alt="nothing"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Web development</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeR60xzpNQFaluypjEb405WezwB5Exmx8MLw&usqp=CAU" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Cyber security</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
