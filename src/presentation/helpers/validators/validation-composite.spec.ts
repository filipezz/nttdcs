import { MissingParamError } from '../../errors'
import { Validation } from './validation'
import { ValidationComposite } from './validation-composite'

interface SutTypes {
  sut: ValidationComposite
  validationStub: Validation
}
const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate(input: any): Error {
      return null
    }
  }
  return new ValidationStub
}
const makeSut = (): SutTypes => {
  const validationStub = makeValidation()
  const sut = new ValidationComposite([validationStub])
  return { sut, validationStub }
}
describe('ValidationComposite', () => {
  it('should return an error if any validation fails', () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('field'))

    const error = sut.validate({
      any_field: 'any_value'
    })


    expect(error).toEqual(new MissingParamError('field'));
  });
  it('should not return if validation succeeds', () => {
    const { sut, validationStub } = makeSut()

    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(null)
    const error = sut.validate({
      any_field: 'any_value'
    })


    expect(error).toBeFalsy();
  });

})