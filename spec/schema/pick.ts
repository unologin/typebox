import { Type } from '../../src/typebox'
import { ok, fail } from './validate'
import { strictEqual } from 'assert'

describe('Pick', () => {
    it('Should pick properties from the source schema', () => {
        const Vector3 = Type.Object({
            x: Type.Number(),
            y: Type.Number(),
            z: Type.Number()
        }, { additionalProperties: false })
        const T = Type.Pick(Vector3, ['x', 'y'])
        ok(T, { x: 1, y: 1 })
    })

    it('Should remove required properties on the target schema', () => {
        const A = Type.Object({
            x: Type.Number(),
            y: Type.Number(),
            z: Type.Number()
        }, { additionalProperties: false })
        const T = Type.Pick(A, ['x', 'y'])
        strictEqual(T.required!.includes('z'), false)
    })

    it('Should inherit options from the source object', () => {
        const A = Type.Object({
            x: Type.Number(),
            y: Type.Number(),
            z: Type.Number()
        }, { additionalProperties: false })
        const T = Type.Pick(A, ['x', 'y'])
        strictEqual(A.additionalProperties, false)
        strictEqual(T.additionalProperties, false)
    })
})
