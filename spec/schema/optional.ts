import { deepStrictEqual, strictEqual } from 'assert'
import { Type } from '../../src/typebox'
import { ok, fail } from './validate'

describe('Optional', () => {
    it('Should validate object with optional', () => {
        const T = Type.Object({
            a: Type.Optional(Type.String()),
            b: Type.String()
        }, { additionalProperties: false })
        ok(T, { a: 'hello', b: 'world' })
        ok(T, { b: 'world' })
    })
    it('Should remove required value from schema', () => {
        const T = Type.Object({
            a: Type.Optional(Type.String()),
            b: Type.String()
        }, { additionalProperties: false })
        strictEqual(T.required!.includes('a'), false)
    })
})
