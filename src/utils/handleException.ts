import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CommonResponse } from '../common/commonResponse';

@Catch()
export class HandleException implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    let message = 'Internal Server Error';
    let data: string[] = [];

    if (exception instanceof HttpException) {
      const res = exception.getResponse();

      if (typeof res === 'string') {
        message = res;
        data = [res];
      } else if (typeof res === 'object' && res !== null && 'message' in res) {
        const resObj = res as { message?: string | string[] };
        if (Array.isArray(resObj.message)) {
          message = 'Validation Failed';
          data = resObj.message;
        } else {
          message = resObj.message ?? 'Something went wrong';
          data = [resObj.message ?? 'Something went wrong'];
        }
      }
    }

    const errorResponse = new CommonResponse(message, status, data);

    response.status(status).json(errorResponse);
  }
}
