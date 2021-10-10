import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'
export class SignUpController {
  handle(httpResponse: HttpRequest): HttpResponse {
    if (!httpResponse.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpResponse.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
