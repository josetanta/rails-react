import React , {useEffect, useState} from 'react'
import { Container, Card , Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { ArticleForm } from '../components/articles/ArticleForm'

const API_URL = process.env.REACT_APP_API

export const ArticlesView = (props) => {

	const [ articles, setArticles ] = useState([])

	const getArticles = async () => {

		const res = await fetch(`${API_URL}/articles/`,{
				method: 'GET',
				headers: {
					'Content-Type' :'application/json'
				}
			})
		const data = await res.json()
		setArticles(data.data.articles)
	}

	useEffect(() => {
		getArticles()
	},[])

  return (
    <Container mt="3">
			<Row>
				<Col md={7}>
					{
						articles.map((article, index) => (
							<Card style={{ width: '18rem' }} className="my-4" key={index}>
							  <Card.Body>
							    <Card.Title>{ article.title }</Card.Title>
							    <Card.Text>{ article.body }</Card.Text>
							    <Link className='card-link' to={`/articles/${article.id}`}>Article Link</Link>
							  </Card.Body>
							</Card>
						))
					}
				</Col>
				<Col md={5}>
					<ArticleForm getArticles={getArticles}></ArticleForm>
				</Col>
			</Row>
    </Container>
  )
}