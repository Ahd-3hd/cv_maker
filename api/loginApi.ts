import axios from "axios";
import ENV from "../config/constants";
import { ILoginCredentials } from "../interfaces/user.interface";

export default async function loginApi(credentials: ILoginCredentials) {
  const { data } = await axios.post(
    `http://${ENV.DOMAIN}:5000/api/v1/login`,
    credentials
  );
  return data;
}
