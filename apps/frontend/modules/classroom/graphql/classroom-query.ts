import { gql } from "@apollo/client";
import { ClassroomCard } from "../components/classroom-card";

export const CLASSROOM_QUERY = gql`
  query ClassroomQuery($id: String!) {
    classroom(id: $id) {
      ...ClassroomDetails
    }
  }
  ${ClassroomCard.fragments.classroom}
`
