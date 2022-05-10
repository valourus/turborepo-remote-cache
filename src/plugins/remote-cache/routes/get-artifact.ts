import { notFound } from '@hapi/boom'
import type { RawReplyDefaultExpression, RawRequestDefaultExpression, RouteOptions } from 'fastify'
import type { Server } from 'http'
import { artifactsRouteSchema, type Params, type Querystring } from './schema'

export const getArtifact: RouteOptions<
  Server,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  {
    Querystring: Querystring
    Params: Params
  }
> = {
  method: 'GET',
  url: '/artifacts/:id',
  schema: artifactsRouteSchema,
  async handler(req, reply) {
    const artifactId = req.params.id
    const teamId = req.query.teamId || req.query.slug
    try {
      const artifact = await this.location.getCachedArtifact(artifactId, teamId)
      reply.send(artifact)
    } catch (err) {
      throw notFound(`Artifact not found`, err)
    }
  },
}
