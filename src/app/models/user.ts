export interface User {
  userId: string;
  username: string;
  fullname: string;
  gender: string;
  usercontact?: string;
  userAdress?: string;
  email: string;
  roles?: string[];
  dateOfBirth?: Date;
  createdAt?: Date;
}
