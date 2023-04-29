import Toggler from './components/Toggler'
import Key from './components/CustomKey'
import { useState, useEffect } from 'react'

function App() {
	const [theme, setTheme] = useState('theme')

	useEffect(() => {
		document.body.classList.remove('theme-2')
		document.body.classList.remove('theme-3')
		theme.length > 0 ? document.body.classList.add(theme) : null
	}, [theme])

	return (
		<div className="App container py-8">
			{/* Top */}
			<section className="mb-8 flex items-center justify-between text-clr-screen">
				<h1 className="font-bold">calc</h1>
				<div className="flex items-end gap-6">
					<p className="text-sm uppercase">Theme</p>
					<Toggler setTheme={setTheme} />
				</div>
			</section>

			{/* Screen */}
			<div className="mb-6 flex h-20 items-center justify-end rounded-lg bg-screen px-6 text-4xl text-clr-screen sm:h-32 sm:text-5xl">
				<span>399,981</span>
			</div>

			{/* Keypad */}
			<div className="grid grid-cols-4 gap-4 rounded-lg bg-toggle p-6">
				<Key value="7" type="num" />
				<Key value="8" type="num" />
				<Key value="9" type="num" />
				<Key value="DEL" type="control" />
				<Key value="4" type="num" />
				<Key value="5" type="num" />
				<Key value="6" type="num" />
				<Key value="+" type="math" />
				<Key value="1" type="num" />
				<Key value="2" type="num" />
				<Key value="3" type="num" />
				<Key value="-" type="math" />
				<Key value="." type="num" />
				<Key value="0" type="num" />
				<Key value="/" type="num" />
				<Key value="&times;" type="math" />
				<Key value="RESET" type="control" />
				<Key value="=" type="solve" />
			</div>
		</div>
	)
}

export default App
