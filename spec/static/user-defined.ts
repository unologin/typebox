import { Type, Static } from '../../src/typebox'

describe('UserDefined should change type', () => 
{
    const t = Type.Object(
        {
            a: Type.UserDefined<Date>(Type.String())
        }
    );
    
    type D = Static<typeof t>;

    const example : D =
    {
        a: new Date()
    };

    const negative : D = 
    {
        // @ts-expect-error
        a: 'abc',
    };
});
