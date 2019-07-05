import { Injectable } from '@angular/core';
import {

  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      setParams:{icode:environment.icode}
    })
    return next.handle(modifiedRequest)
  }
}