import axios from '@network/axios'

export const getUser = async (request) => {
	const response = await axios.get(request)
	return response
}
