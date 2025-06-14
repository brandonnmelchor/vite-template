import { create } from 'zustand'
import { getUser } from '@/network/api/user'

export const useUserStore = create((set, get, api) => ({
	// status
	isLoading: false,
	error: null,

	// state
	user: {
		id: null,
		username: null,

		firstName: null,
		middleName: null,
		lastName: null,
		displayName: null,

		email: null,
		phone: null
	},

	// methods
	initialize: () => {
		if (!get().user?.id) {
			get().fetchUsers()
		}
	},

	fetchUsers: async () => {
		set({ isLoading: true, error: null })

		try {
			const user = await getUser()
			set({ user })
		} catch (error) {
			set({ error: error.message })
		} finally {
			set({ isLoading: false })
		}
	}
}))
