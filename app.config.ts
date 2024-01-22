export default defineAppConfig({
	ui: {
		primary: 'pink',
		gray: 'zinc',
		button: {
			base: 'disabled:cursor-auto disabled:opacity-50',
			default: {
				size: 'xs',
			},
			color: {
				white: {
					solid: 'dark:hover:bg-gray-900'
				}
			},
			variant: 'solid'
		},
		accordion: {
			item: {
				padding: ''
			},
			default: {
				class: 'dark:text-white text-gray-900 bg-gray-100 dark:bg-gray-800 mb-1 hover:bg-gray-100 hover:dark:bg-gray-800',
				variant: 'solid',
				openIcon: 'i-heroicons-plus',
				closeIcon: 'i-heroicons-minus'
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
		},
		input: {
			default: {
				size: '2xs'
			},
			base: "disabled:cursor-auto",
			color: {
				white: {
					outline: 'focus:ring-1 ring-0 shadow-none'
				}
			}
		},
		selectMenu: {
			label: 'w-20'
		}
	}
})

