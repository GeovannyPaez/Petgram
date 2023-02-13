import { gql } from "@apollo/client";

export const singupMutation=gql`
    mutation singup($input:UserCredentials!){
  signup(input:$input)
}
`