import { InvalidParamError } from '../../errors'
import { CompareFieldsValidation } from './compare-fields-validation'

interface SutTypes {
  sut: CompareFieldsValidation
}
const makeSut = (): SutTypes => {
  const sut = new CompareFieldsValidation('any_field', 'any_field_to_compare')
  return { sut }
}
describe('CompareFieldsValidation', () => {
  it('should return a InvalidParamError if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      any_field: 'any_value',
      any_field_to_compare: 'wrong_value'
    })

    expect(error).toEqual(new InvalidParamError('any_field_to_compare'))
  })
  it('should not return if validation succeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      any_field: 'any_value',
      any_field_to_compare: 'any_value'
    })

    expect(error).toBeFalsy()
  })
})
