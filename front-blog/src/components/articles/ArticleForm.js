import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API

export const ArticleForm = (props) => {

	// Params
	const { author_id } = useParams()

	// Validate Form
	const { register, handleSubmit, errors} = useForm()

	const onSubmit = async (data, event) => {
		const token = await document.querySelector('[name=csrf-token]').content;
		await fetch(`${API_URL}/authors/${author_id}/articles/`,{
			credentials: 'same-origin',
			method:'POST',
			headers: {
				'Content-Type':'application/json',
				'X-CSRF-Token': token,
				'Accept': 'application/json',
			},
			body: JSON.stringify({article: {...data}}),
		});

		await event.target.reset()

		// Render Index Articles
		if(props.getArticles){
			await props.getArticles(props.render)
		} else if (props.getArticleOfAuthor) {
			await props.getArticleOfAuthor()
		}
	}

	 return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
      	<div className="form-group">
					<input
	      		name="title"
	      		type="text"
						placeholder="Ponga un Titulo para el articulo"
						className="form-control"
						ref={
							register({
								required: { value: true, message:'El titulo es obligatorio' },
								minLength: { value: 5, message: 'Mínimo 5 letras' },
							})
						}
	      	/>
					{errors.title && <span className='small text-danger'>El titulo es obligatorio</span>}
      	</div>

				<div className="form-group">
					<textarea
						name="body"
						placeholder="Aqui una pequeña descripción"
						className='form-control'
						ref={
							register({
								required: { value: true, message:'La descripción es obligatoria' },
								minLength: { value: 5, message: 'Mínimo un pequeña descripción' },
							})
						}
						></textarea>
						{ errors.body && <span className='small text-danger'>La descripción es obligatoria</span> }
				</div>
				<div className="form-group">
					<input className='btn-sm btn btn-success' type="submit" value="Enviar el articulo"/>
				</div>
      </form>
    </Fragment>
  )
}