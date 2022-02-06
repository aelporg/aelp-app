import { gql } from "@apollo/client";
import { ClassroomCard } from "../components/classroom-card";

export const CLASSROOM_QUERY = gql`
  ${ClassroomCard.fragments.classroom}
  query ClassroomQuery($id: String!) {
    classroom(id: $id) {
      ...ClassroomDetails
    }
  }
`
