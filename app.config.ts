export default defineAppConfig({
	ui: {
		primary: 'pink',
		gray: 'zinc',
		button: {
			default: {
				size: 'xs',
			},
			color: {
				white: {
					solid: 'dark:hover:bg-gray-900'
				}
			}
		},
		accordion: {
			item: {
				padding: 'px-2'
			},
			default: {
				class: 'dark:text-white text-gray-900 bg-gray-100 dark:bg-gray-800 mb-1 hover:bg-gray-100 hover:dark:bg-gray-800',
				variant: 'solid'
			},
		},
		checkbox: {
			wrapper: 'items-center',
			label: 'text-xs',
		},
		dropdown: {
			item: {
				size: 'text-xs'
			}
		}
	}
})

