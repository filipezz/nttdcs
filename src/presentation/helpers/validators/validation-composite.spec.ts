import { MissingParamError } from '../../errors'
import { Validation } from './validation'
import { ValidationComposite } from './validation-composite'

interface SutTypes {
  sut: ValidationComposite
}
const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate(input: any): Error {
      return new MissingParamError('field')
    }
  }
  return new ValidationStub
}
const makeSut = (): SutTypes => {
  const validationStub = makeValidation()
  const sut = new ValidationComposite([validationStub])
  return { sut }
}
describe('ValidationComposite', () => {
  it('should return an error if any validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      any_field: 'any_value'
    })


    expect(error).toEqual(new MissingParamError('field'));
  });

})