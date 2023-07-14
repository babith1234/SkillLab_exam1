const About = () => {
  return (
    <>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b> Learnx-</b> About Our Organisation
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <strong>Welcome to [Learnx], </strong>a renowned tech educational institute committed to fostering the next generation of tech innovators. With a focus on practical learning, we offer a wide range of courses in programming, data science, artificial intelligence, cybersecurity, and more. Our experienced faculty members are industry experts who impart practical knowledge and guide students to develop real-world skills. We provide hands-on training, cutting-edge infrastructure, and industry partnerships to ensure our students stay ahead in the fast-paced tech industry. Join us and embark on a transformative learning journey to unlock your full potential in the exciting world of technology.
            </div>
            
          </div>
          <center>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9qz1wrhw0syYpXnUAhxWVsbwL4ymE-rrpQ&usqp=CAU"></img>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09Q_aov1UAc9Bt5YqWd5fy3zRju_tqQx5bw&usqp=CAU"></img>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2p6T18IfMg7KZxkneJOV39VaQ33G6X1GWBQ&usqp=CAU"></img>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9qz1wrhw0syYpXnUAhxWVsbwL4ymE-rrpQ&usqp=CAU"></img>
          </center>
        </div>
       
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Address</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                New Colony, <br></br>
                Old market Road,<br></br>
                Bangalore<br></br>
              </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Contact details</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Phone: 8217678105</strong>
              <br></br>
              <strong>Gmail: babithpoojari@gmail.com</strong>
              <br></br>
              <strong>instagram: baith_1234</strong>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
