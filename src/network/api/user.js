import axios from '@/network/axios'

export const getUser = async () => {
	try {
		const response = await axios.get({ url: '/user' })
		return response?.data
	} catch (error) {
		const message = error?.message || 'Unable to get user account.'
		throw new Error(message)
	}
}
