import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'
import { Card , Form} from 'react-bootstrap'

const API_URL = process.env.REACT_APP_API

export const AuthorForm = (props) => {

	const { register, handleSubmit, errors } = useForm()

	const onSubmit = async (data, event) => {
		let token = await document.querySelector('[name=csrf-token]').content;
		await fetch(`${API_URL}/authors`,{
			credentials: 'same-origin',
			method: 'POST',
			headers: {
				'Content-Type':'application/json',
				'X-CSRF-Token': token,
				'Accept': 'application/json',
			},
			body: JSON.stringify({author:{ ...data} })
		})
		await event.target.reset()
		await props.getAuthors()
	}

	return (
		<Fragment>
			<Card>
				<Card.Body>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Group>
							<input
								type="text"
								name='name'
								className='form-control'
								placeholder="Nombre del Autor"
								ref={register({
										required: { value: true, message: 'El nombre del autor es obligatorio' },
										minLength: { value: 4, message: 'El nombre del autor debe ser como mínimo 5 letras.' }
									})}
								/>
							{ errors.name && <span className='small text-danger'>El nombre del autor es obligatorio</span>  }
						</Form.Group>
						<Form.Group>
							<input
								type="email"
								name='email'
								className='form-control'
								placeholder="Email del Autor"
								ref={register({
										required: { value: true, message: 'El email del autor es obligatorio' },
										minLength: { value: 5, message: 'El nombre del autor debe ser como mínimo 5 letras.' }
									})}
								/>
							{ errors.email && <span className='small text-danger'>El email del autor es obligatorio</span>  }
						</Form.Group>
						<div className="form-group">
							<input type="submit" value='Crear Autor' className='btn btn-sm btn-secondary btn-block'/>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</Fragment>
	)
}