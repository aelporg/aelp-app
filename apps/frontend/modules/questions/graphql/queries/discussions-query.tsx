import { gql } from "@apollo/client";
import { REGULAR_DISCUSSION_FRAGMENT } from "../fragments/dicussion-fragment";

export const DISCUSSIONS_QUERY = gql`
  ${REGULAR_DISCUSSION_FRAGMENT}
  query Discussions($take: Int) {
    discussions(take: $take) {
      ...RegularDicussion
    }
  }
`

