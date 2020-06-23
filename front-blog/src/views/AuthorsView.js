import React, {Fragment, useEffect, useState} from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthorForm } from '../components/authors/AuthorForm'

const API_URL = process.env.REACT_APP_API

export const AuthorsView = () => {

	const [ authors, setAuthors ] = useState([])

	const getAuthors = async () => {
		const res = await fetch(`${API_URL}/authors/`,{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		})
		const data = await res.json()
		setAuthors(data.data.authors)
	}

	useEffect(() => {
		getAuthors()
	},[])

	return (
		<Fragment>
			<Row className='my-3'>
				<Col md={7}>
					{
						authors.map((author, index) => (
							<Fragment key={index}>
								<Card className='my-3'>
									<Card.Body>
										<Row>
											<Col sm={6}>
											 	<Card.Title><Link className='nav-link' to={`/authors/${author.id}`}>{ author.name }</Link></Card.Title>
											 	<Card.Text>{ author.email }</Card.Text>
											</Col>
											<Col sm={6}>
												<div className="text-muted">
													<small>Articulos publicados: </small><div className='badge badge-primary'>{ author.articles_count }</div>
												</div>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Fragment>
						))
					}
				</Col>
				<Col md={5}>
					<h2>Crear un Nuevo Autor</h2>
					<AuthorForm getAuthors={getAuthors}></AuthorForm>
				</Col>
			</Row>
		</Fragment>
	)
}