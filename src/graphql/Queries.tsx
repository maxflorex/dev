import { gql } from '@apollo/client';

export const STACK = gql`
    query techStack {
        techStacks(pagination: { limit: 100 }) {
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
                id
                attributes {
                    Title
                    Website
                    Github
                    Summary
                    Complexity
                    Features
                    tech_stacks(pagination: { limit: 100 }) {
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

export const PROJECT = gql`
    query project ($id: ID!) {
        project(id: $id) {
            data {
                attributes {
                    Title
                    Website
                    Github
                    Summary
                    Complexity
                    Features
                    tech_stacks(pagination: { limit: 100 }) {
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
