import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { TransactionsRoute } from './routes/transactions'

export const app = fastify()

app.register(cookie)
app.register(TransactionsRoute, {
  prefix: 'transactions',
})
