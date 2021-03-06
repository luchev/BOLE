/**
 * The interface user holds the information of a user in the user page 
 */
export interface User {
    userId: number;
    username: string;
    firstName: string;
    lastName: string;
    dateJoined: Date;
    email: string;
    picture: string; //path to picture
    occupation: string;
    institution: string;
    CVLink: string;
    bio: string;
}
