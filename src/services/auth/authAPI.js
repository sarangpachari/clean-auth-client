import { commonAPI } from "../commonAPI";
import { SERVER_URL } from "../serverURL";

//REGISTER USER API
export const registerUserAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/api/users/auth/register`, reqBody);
};

//LOGIN USER API
export const loginUserAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/api/users/auth/login`, reqBody);
};
