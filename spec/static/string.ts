import { Type, Static } from '../../src/typebox'

// --------------------------------------------

const T0 = Type.String()
const F0 = (arg: Static<typeof T0>) => { }
F0('')

