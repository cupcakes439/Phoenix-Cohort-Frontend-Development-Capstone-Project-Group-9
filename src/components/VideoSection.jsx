import "../styles/video.css";

function VideoSection() {
  return (
  <section className="planetary-section">
  <div className="video-container">
    <video autoPlay muted loop playsInline>
      <source
        src="https://cdn.pixabay.com/video/2016/03/31/2619-865412755_large.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>

  <div className="content-container">
    <h2>
      How Planetary Data Helps Us
      <br />
      Understand Space
    </h2>

    <p>
      Planetary science goes beyond images. Comparing{" "}
      <span className="highlight">mass</span>,{" "}
      <span className="highlight">diameter</span>,{" "}
      <span className="highlight">gravity</span>, and{" "}
      <span className="highlight">density</span>, we gain insight into how
      planets form, behave, and interact within the solar system.
    </p>
  </div>
</section>
  );
}

export default VideoSection;