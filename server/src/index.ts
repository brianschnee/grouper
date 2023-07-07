import Fastify from 'fastify'

const fastify = Fastify({
	logger: {
		transport: {
			target: 'pino-pretty',
		},
	},
})

fastify.get('/', (request, reply) => {
	return { hello: 'world ' }
})

const start = () => {
	try {
		fastify.listen({ port: 3000 })
	} catch (e) {
		fastify.log.error(e)
		process.exit(1)
	}
}

start()
