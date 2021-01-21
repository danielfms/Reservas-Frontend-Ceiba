import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ManejadorError } from "./manejador-error";
import { Observable, throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private manejadorError: ManejadorError
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.manejadorError.handleError(error);
        return throwError(error);
      })
    ) as Observable<HttpEvent<any>>;
  }
}