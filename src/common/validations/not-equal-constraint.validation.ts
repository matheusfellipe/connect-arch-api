/* eslint-disable prettier/prettier */
import { ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';


@ValidatorConstraint({ name: 'notEqual', async: false })
export class NotEqualConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return value !== relatedValue;
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `${args.property} and ${relatedPropertyName} must be different`;
  }
}