import { gql } from "@apollo/client"

export const UPDATE_FILE_MUTATION = gql`
  mutation UpdateFileMutation($id: ID!, $data: String!) {
    updateFile(id: $id, data: $data) {
      id
      data
    }
  }
`;
