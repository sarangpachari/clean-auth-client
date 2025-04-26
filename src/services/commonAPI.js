import axios from "axios";

export const commonAPI = async (
  httpRequest,
  url,
  reqBody = null,
  reqHeader = { "Content-Type": "application/json" }
) => {
  const reqConfig = {
    method: httpRequest,
    url,
    data: reqBody,
    headers: reqHeader,
  };

  return await axios(reqConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
