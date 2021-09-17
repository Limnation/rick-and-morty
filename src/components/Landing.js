// Importing a SCSS file
import "../scss/landing.scss";

export default function Landing() {
  return (
    <section className="Landing">
      <video autoplay muted loop id="myVideo">
        <source src="intro.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </section>
  );
}
