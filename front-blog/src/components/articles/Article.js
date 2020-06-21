import React, {useState, useEffect , Fragment} from 'react'
import { useParams , Redirect } from 'react-router-dom'
import { Card, Modal , Button } from 'react-bootstrap'
import { ArticleUpdate } from './ArticleUpdate'

const API_URL = process.env.REACT_APP_API

export const Article = (props) => {
	const { article_id } = useParams()

	const [ article, setArticle ] = useState({})
	const [ auth, setAuth ] = useState({})

	const [ deleteArt, setDeleteArt ] = useState(false)

	// BEGIN Modal
	const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	// END

	useEffect(() => {
		const getArticle = async () => {
			const res = await fetch(`${API_URL}/articles/${article_id}`)
			const data = await res.json()
			await setArticle(data.data.article)
			await setAuth(data.data.article.auth)
		}
		getArticle()
	},[article_id])

	const deleteArticle = async id => {
		setDeleteArt(true)
		await fetch(`${API_URL}/articles/${id}`,{
			method: 'DELETE',
			credential: 'same-origin'
		})
	}

	if (deleteArt) {
		return <Redirect to='/articles' />;
	}

	return (
		<Fragment>
			<Card>
				<Card.Body>
					<Card.Title>{ article.title }</Card.Title>
					<Card.Text>{article.body}</Card.Text>
					<p className='small text-muted'>{article.publishied}</p>
					<p className='small text-muted'>{auth.username}</p>

					<div className="my-2 mx-2">
						<button
							className='btn-sm btn btn-outline-success'
							onClick={() => {
								handleShow();
								}}
							>Actualizar este articulo</button>
					</div>

					<div className="my-2 mx-2">
						<button
							className='btn-sm btn btn-outline-danger'
							onClick={() => deleteArticle(article.id)}
							>Eliminar este articulo</button>
					</div>
				</Card.Body>
			</Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-info'>Actualizar el {article.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ArticleUpdate article={article} handleClose={handleClose}/>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-sm btn btn-primary'>Understood</Button>
          <Button className='btn-sm btn btn-secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
		</Fragment>
	)
}