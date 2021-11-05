export interface IUser {
  email: string;
  accessToken: string;
  loading: boolean;
  loggedIn: boolean;
  logingError: boolean;
}

export interface ILoginCredentials {
  email: String;
  password: String;
}
