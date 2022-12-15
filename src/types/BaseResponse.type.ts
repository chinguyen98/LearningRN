type BaseResponse<D = Record<string, any>> = {
  message: string;
  status: number;
  code: number;
  error?: number;
  data?: D;
};

export default BaseResponse;
