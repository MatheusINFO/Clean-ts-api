import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('RequiredField Validation', () => {
  it('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('any_fieldName')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('any_fieldName'))
  })

  it('Should not return if validation succeds', () => {
    const sut = new RequiredFieldValidation('any_field')
    const error = sut.validate({ any_field: 'any' })
    expect(error).toBeFalsy()
  })
})
