import axios from "axios";
import ENV from "../config/constants";
import { ILoginCredentials } from "../interfaces/user.interface";

export default async function signupApi(credentials: ILoginCredentials) {
  const { data } = await axios.post(
    `http://${ENV.DOMAIN}:5000/api/v1/signup`,
    credentials
  );
  return data;
}
