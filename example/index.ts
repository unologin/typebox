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


const I = Type.Intersect([Type.Intersect([A, B, C]), Type.Dict(Type.String()) ])
type I = Static<typeof I>




function test(x: I) {
    
    x.g = '1'
}
console.log(JSON.stringify(I, null, 2))

ok(I, {
    a: 1,
    b: 2,
    c: 1,
    d: 2,

})




