import { Type, Static, TObject, TProperties } from '@sinclair/typebox'

// -----------------------------------------------
// npm start to run example
// -----------------------------------------------

const A = Type.Object({
    x: Type.Number(),
    y: Type.Number()
})
const B = Type.Object({
    z: Type.Number(),
    w: Type.Number()
})

const Intersect = Type.Intersect([A, B])
type Intersect = Static<typeof Intersect>

console.log(JSON.stringify(Intersect, null, 2))

function test(x: Intersect) {
    
}


