import { create } from 'zustand'

export const useUserStore = create(() => {
	return {
		id: null,
		token: null,
		username: null,

		firsName: null,
		middleName: null,
		lastName: null,
		displayName: null,

		email: null,
		phone: null
	}
})
