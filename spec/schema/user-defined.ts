import { Type, } from '@sinclair/typebox'

import { expect } from 'chai';

describe('UserDefined should not affect schema', () => 
{
    const t = Type.Object(
        {
            a: Type.UserDefined<Date>(Type.String())
        }
    );
    
    expect(t).to.be.deep.equal(Type.Object({ a: Type.String() }));
});
