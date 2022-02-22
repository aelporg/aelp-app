import { gql } from "@apollo/client";

export const ENVIRNOMENT_QUERY = gql`
  query EnvironmentQuery($id: ID!) {
    environment(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
