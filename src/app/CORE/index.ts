import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthHeaderInterceptor } from "./Interceptor";


 export const HttpInterceptorProviders = [
{provide: HTTP_INTERCEPTORS ,useClass: AuthHeaderInterceptor, multi: true}
 ];