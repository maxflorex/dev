import { gql } from '@apollo/client';

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

export const PROJECTS = gql`
    query projects {
        projects {
            data {
                attributes {
                    Title
                    Website
                    Github
                    Summary
                    Complexity
                    Features
                    tech_stacks {
                        data {
                            attributes {
                                Title
                            }
                        }
                    }
                    Banner {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    Photos {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    Responsive {
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
