import { gql } from "@apollo/client";

export const QUERY_MORTY = gql`
  query {
    characters(filter: { name: "morty" }) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;

export const QUERY_CHARACTER = gql`
  query ($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;
