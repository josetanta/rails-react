import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'

const API_URL = process.env.REACT_APP_API

export const ArticleForm = (props) => {
	// Props
	const { getArticles } = props

	// Validate Form
	const { register, handleSubmit, errors} = useForm()

	const onSubmit = async (data, event) => {
		const token = await document.querySelector('[name=csrf-token]').content;
		await fetch(`${API_URL}/articles/`,{
			credentials: 'same-origin',
			headers: {
				'Content-Type':'application/json',
				'X-CSRF-Token': token,
				'Accept': 'application/json',
			},
			method:'POST',
			body: JSON.stringify({
					article: {
						...data,
						auth_id: 2
				}
			}),
		});

		await event.target.reset()

		// Render Index Articles
		await getArticles()
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
					<input className='btn btn-success' type="submit" value="Enviar el articulo"/>
				</div>
      </form>
    </Fragment>
  )
}