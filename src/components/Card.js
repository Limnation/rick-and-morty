import { useQuery } from "@apollo/client";
// Importing a SCSS file
import "../scss/card.scss";
// Importing Queries
import { QUERY_CHARACTER } from "../utils/queries";

export default function Footer() {
  const { loading, data } = useQuery(QUERY_CHARACTER);

  return (
    <section>
      <p></p>
      <p></p>
    </section>
  );
}
