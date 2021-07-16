import { Type } from '@sinclair/typebox'
import { expect } from 'chai'
import { ok, fail } from './validate'

describe('Intersect', () => {
  it('A & B', () => {
    const A = Type.Object({ a: Type.String() })
    const B = Type.Object({ b: Type.Number() })
    const T = Type.Intersect([A, B])
    
    ok(T, {a: 'hello', b: 42 })
    fail(T, {a: 'hello' })
    fail(T, {b: 42 })
  })
  it('A & B & C', () => {
    const A = Type.Object({ a: Type.String() })
    const B = Type.Object({ b: Type.Number() })
    const C = Type.Object({ c: Type.Boolean() })
    const T = Type.Intersect([A, B, C])
    
    ok(T, {a: 'hello', b: 42, c: true })
    fail(T, {a: 'hello' })
    fail(T, {b: 42 })
    fail(T, {c: true })
  })

  describe('Additional Properties', () => {
    const A = Type.Object({
      a: Type.String(),
      b: Type.String(),
    })
    const B = Type.Object({
      c: Type.String(),
    })
    const T = Type.Intersect([A, B], { additionalProperties: false })
    
    ok(T, { a: '1', b: '2', c: '3' })
    fail(T, { a: '1', b: '2' })
    fail(T, { a: '1', b: '2', c: '3', d: '4' })
  })

  describe('additionalProperties', () => {

    const A = Type.Object({
      a: Type.String(),
    })

    const B = Type.Object({
      a: Type.String(),
      b: Type.String()
    },
    {
      additionalProperties: true
    })

    const C = Type.Object({
      a: Type.String(),
      b: Type.String()
    },
    {
      additionalProperties: true
    })

    const T = Type.Intersect([A,B]);
    const T2 = Type.Intersect([B,C]);

    expect(T.additionalProperties).to.be.false;

    expect(T2.additionalProperties).to.be.true;

  })

  describe('Duplicate Required', () => {
    const A = Type.Object({
      a: Type.String(),
    })
    const B = Type.Object({
      a: Type.String(),
      b: Type.String()
    })
    const T = Type.Intersect([A, B])

    ok(T, { a: "1", b: "2" })
    fail(T, { a: "1" })
    fail(T, { b: "2" })
  })
})
