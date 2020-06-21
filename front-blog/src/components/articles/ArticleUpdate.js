import React, {Fragment, useState} from 'react'
import { Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const API_URL = process.env.REACT_APP_API

export const ArticleUpdate = (props) => {
	const { register, handleSubmit, errors} = useForm()

	const [ update, setUpdate ] = useState(false)

	const [ titleUp, setTitleUp ] = useState(props.article.title)
	const [ bodyUp, setBodyUp ] = useState(props.article.body)

	const onSubmit = async (data) => {
		const token = await document.querySelector('[name=csrf-token]').content;
		await fetch(`${API_URL}/articles/${props.article.id}`,{
			method: 'PUT',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRF-Token': token,
				'Accept': 'application/json',
			},
			body: JSON.stringify({article: {...data, author_id: 2}})
		})
		await props.handleClose(false)
		setUpdate(true)
	}

	if (update) {
		return <Redirect to="/articles"></Redirect>
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
						onChange={e => setTitleUp(e.target.value)}
						value={titleUp}
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
						onChange={e => setBodyUp(e.target.value)}
						value={bodyUp}
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
					<input className='btn-sm btn btn-success' type="submit" value="Actualizar el articulo"/>
				</div>
		  </form>
		</Fragment>
	)
}