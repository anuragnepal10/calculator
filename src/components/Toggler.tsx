type ThemeProps = {
	setTheme: (theme: string) => void
}

const Toggler: React.FC<ThemeProps> = ({ setTheme }) => {
	const handleCheck = (theme: string): void => {
		setTheme(theme)
	}

	return (
		<div className="">
			<div className="mb-1 flex justify-between px-2 text-xs">
				<span>1</span>
				<span>2</span>
				<span>3</span>
			</div>
			<form className="flex gap-1 rounded-full bg-toggle p-1">
				<input
					type="radio"
					id="theme-1"
					name="theme"
					defaultChecked
					className="relative z-10 h-4  w-4 cursor-pointer border-none before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-toggle checked:before:bg-key-acc-bg hover:brightness-125 focus:outline-none"
					onChange={() => handleCheck('')}
				/>
				<input
					type="radio"
					id="theme-2"
					name="theme"
					className="relative z-10 h-4  w-4 cursor-pointer border-none before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-toggle checked:before:bg-key-acc-bg hover:brightness-125 focus:outline-none"
					onChange={() => handleCheck('theme-2')}
				/>
				<input
					type="radio"
					id="theme-3"
					name="theme"
					className="relative z-10 h-4  w-4 cursor-pointer border-none before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-toggle checked:before:bg-key-acc-bg hover:brightness-125 focus:outline-none"
					onChange={() => handleCheck('theme-3')}
				/>
			</form>
		</div>
	)
}

export default Toggler
