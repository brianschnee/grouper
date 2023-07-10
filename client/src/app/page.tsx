'use client'

import { io } from 'socket.io-client'
import { useState } from 'react'

const socket = io('http://localhost:4000')

export default function Home() {
	const [socketId, setSocketId] = useState()

	socket.on('connected', (id) => {
		setSocketId(id)
	})
	return <div className="mt-2 flex flex-col border pt-2">{socketId}</div>
}
