import Search from "../components/Search";
// Importing a SCSS file
import "../scss/landing.scss";
// Importing Objects
import { landingbackground } from "../utils/objects";

export default function Landing() {
  return (
    <section className="Landing">
      <style scoped>{landingbackground}</style>
      <div className="backgimage background">
        <Search />
      </div>
    </section>
  );
}
