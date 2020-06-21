import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'
import { Card , Form} from 'react-bootstrap'

const API_URL = process.env.REACT_APP_API

export const AuthorForm = (props) => {

	const { register, handleSubmit, errors } = useForm()

	const onSubmit = (data, event) => {
		console.log(data)
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
			      				required: { value: true, message: 'El nombre del Autor es obligatorio' },
			      				minLength: { value: 5, message: 'El nombre del autor debe ser como mínimo 5 letras.' }
			      			})}
			      		/>
			      		{ error.name && <span className='small text-danger'>Incorrecto</span>  }
		      	</Form.Group>
		      	<Form.Group>
	      			<input
			      		type="email"
			      		name='email'
			      		className='form-control'
			      		placeholder="Email del Autor"
			      		ref={register({
			      				required: { value: true, message: 'El nombre del Autor es obligatorio' },
			      				minLength: { value: 5, message: 'El nombre del autor debe ser como mínimo 5 letras.' }
			      			})}
			      		/>
			      		{ error.email && <span className='small text-danger'>Incorrecto</span>  }
		      	</Form.Group>
		      </Form>
				</Card.Body>
			</Card>
    </Fragment>
  )
}