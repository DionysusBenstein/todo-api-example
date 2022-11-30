import { 
  Injectable, 
  CallHandler, 
  ExecutionContext, 
  NestInterceptor, 
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Response<T> {
  statusCode: number;
  message: string;
  data?: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        statusCode: context.switchToHttp().getResponse().statusCode,
        message: 'success',
        data
      }))
    )
  }
}
