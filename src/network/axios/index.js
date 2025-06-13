import axios from 'axios'

class API {
	constructor() {
		this.api = axios.create({
			baseURL: import.meta.env.VITE_API_BASE_URL,
			withCredentials: true,
			timeout: 7500
		})

		this.api.interceptors.request.use(this.handleRequest, this.handleError)
		this.api.interceptors.response.use(this.handleResponse, this.handleError)
	}

	get(request) {
		return this.api({ method: 'GET', ...request })
	}

	post(request) {
		return this.api({ method: 'POST', ...request })
	}

	patch(request) {
		return this.api({ method: 'PATCH', ...request })
	}

	delete(request) {
		return this.api({ method: 'DELETE', ...request })
	}

	upload(url, file, request) {
		const headers = { 'Content-Type': 'multipart/form-data' }
		const data = new FormData()

		const fileName = request.fileName
		const payload = request.payload
		data.append('upload', file)

		if (fileName) {
			data.append('name', fileName)
		}

		if (payload) {
			for (const key in payload) {
				data.append(key, payload[key])
			}
		}

		return this.api({ method: 'POST', url, data, headers })
	}

	handleRequest(request) {
		return request
	}

	handleResponse(response) {
		return response
	}

	handleError(error) {
		return Promise.reject(error)
	}
}

const api = new API()
export default api
