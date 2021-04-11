import { Type, Static, TObject, TProperties } from '@sinclair/typebox'

import { ok, fail } from '../spec/schema/validate'

// const A = {
//     type: 'object',
//     properties: { a: { type: 'string' } }
// }

// -----------------------------------------------
// npm start to run example
// -----------------------------------------------

const A = Type.Object({
    a: Type.Number(),
   
})
const B = Type.Object({
    b: Type.Number()
})
// const C = Type.Dict(
//     Type.Number()
// )

const C = Type.Intersect([
    Type.Object({ c: Type.Number() }),
    Type.Object({ d: Type.Number() })
])


const Intersect = Type.Intersect([A, B, C])
type Intersect = Static<typeof Intersect>

console.log(JSON.stringify(Intersect, null, 2))

ok(Intersect, {
    a: 1,
    b: 2,
    c: 1,
    d: 2
})




