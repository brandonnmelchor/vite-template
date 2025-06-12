import { create } from 'zustand'

export const useUserStore = create((set, get, api) => {
	return {
		id: 1,
		name: 'test_user_a'
	}
})
