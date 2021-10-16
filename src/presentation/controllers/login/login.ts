import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoginController implements Controller {
  async handle(httpResponse: HttpRequest): Promise<HttpResponse> {
    return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
  }
}