type KeyProps = {
	type: string
	value: string
}

type typeVariantFields = {
	[key: string]: string
}

type valueVariantFields = {
	[key: string]: string
}

const CustomKey: React.FC<KeyProps> = ({ type, value }) => {
	const typeVariant: typeVariantFields = {
		num: 'bg-key-base-bg text-clr-base shadow-key-base-shadow text-4xl',
		math: 'bg-key-base-bg text-clr-base shadow-key-base-shadow text-4xl',
		control: 'bg-key-pr-bg text-inverted shadow-key-pr-shadow text-lg',
		solve: 'bg-key-acc-bg text-clr-solve shadow-key-acc-shadow text-lg',
	}

	const valueVariant: valueVariantFields = {
		'=': 'col-span-2',
		RESET: 'col-span-2',
	}

	return (
		<button
			type="button"
			className={`custom-key h-14 rounded-md shadow-[0_6px_0] ${typeVariant[type]} ${valueVariant[value]} hover:brightness-125 active:scale-95`}
		>
			{value}
		</button>
	)
}
export default CustomKey
