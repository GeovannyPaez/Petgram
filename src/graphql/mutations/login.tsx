import { gql } from "@apollo/client";


export const mutationLogin = gql`
mutation login($input:UserCredentials!){
 	login(input:$input) 
}

`