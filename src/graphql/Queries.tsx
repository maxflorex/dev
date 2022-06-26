import { gql } from "@apollo/client";

export const STACK = gql`
    query techStack {
        techStacks {
            data {
                attributes {
                    Title
                    Image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;