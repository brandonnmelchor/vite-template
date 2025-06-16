import { Container } from 'react-bootstrap'

const Page = ({ children, header }) => {
	return (
		<Container>
			<h1>{header}</h1>
			{children}
		</Container>
	)
}

export default Page
