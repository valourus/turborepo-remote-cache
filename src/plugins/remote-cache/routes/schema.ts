import { Type, Static } from '@sinclair/typebox'

const querystring = Type.Object(
  {
    teamId: Type.String(),
    slug: Type.String(),
  },
  { additionalParameters: false },
)
export type Querystring = Static<typeof querystring>

const params = Type.Object(
  {
    id: Type.String(),
  },
  { additionalParameters: false },
)
export type Params = Static<typeof params>

export const artifactsRouteSchema = {
  querystring,
  params,
}
