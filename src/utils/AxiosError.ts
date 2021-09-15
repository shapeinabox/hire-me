import { AxiosError } from "axios";

export function axiosError(error: AxiosError) {
  const errorObj: { message: string; code?: string; status?: number } = {
    message: error.message,
  };
  if (error.response) {
    errorObj.message = error.response.data.error || error.response.statusText;
    errorObj.code = error.response.data.errorCode;
    errorObj.status = error.response.data.statusCode || error.response.status;
  }
  return errorObj;
}
