import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { appConfig } from "src/app/core/appConfig";

@Injectable()
export class DummyHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const authReq = req.clone({
      headers: new HttpHeaders({
        'app-id': appConfig.api.dummy.key
      })
    });
  
    return next.handle(authReq);
}
}