import axios from "axios";
import ENV from "../config/constants";

export default async function submitData(obj: {}) {
  const { data } = await axios.post(
    `http://${ENV.DOMAIN}:5000/api/v1/submit`,
    obj
  );
  return data;
}
