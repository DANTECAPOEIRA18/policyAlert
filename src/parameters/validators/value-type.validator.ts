import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";

const isAllowed = (v: unknown): boolean => {
    if(v === null) return true;
    
    const t = typeof v;

    if(t === 'number' || t === 'string' || t === 'boolean') return true;
    if(Array.isArray(v)) return v.every(isAllowed);
    if(t === 'object'){
        return Object.values(v as Record<string, unknown>).every(isAllowed);
    }
    return false;
}

export function IsAllowedValueArray(validationOptions?: ValidationOptions) { 
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: 'IsAllowedValueArray',
            target: object.constructor,
            propertyName,
            validator:{
                validate(value: unknown, _args: ValidationArguments) {
                    return Array.isArray(value) && value.every(isAllowed);
                },
                defaultMessage() {
                    return 'Los Valores deben ser un array con elementos number|string|boolean|null|object|array';
                }
            }
        })
    }
}