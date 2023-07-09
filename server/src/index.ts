import fastify from 'fastify'
import fastifyIO from 'fastify-socket.io'

const app = fastify({
	logger: {
		transport: {
			target: 'pino-pretty',
		},
	},
})

app.register(fastifyIO)

app.ready().then(() => {
	app.io.on('connection', (socket) => {
		socket.emit('connected')
	})
})

app.get('/', (req, res) => {
	return { hello: 'world ' }
})

const start = () => {
	try {
		app.listen({ port: 4000 })
	} catch (e) {
		app.log.error(e)
		process.exit(1)
	}
}

start()
