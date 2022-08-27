import React, { useState } from 'react'

export const LoginForm = () => {
	const [state, setState] = useState({
		email: 'crazydude1337@gmail.com',
		password: '',
	})
	const handleSubmit = (event) => {
		alert(`Email: ${state.email} Password: ${state.password}`)
		event.preventDefault()
	}
	const handleChange = (event) => {
		const value = event.target.value
		setState({
			...state,
			[event.target.name]: value,
		})
	}
	return (
		<div className='form-container'>
			<div className='item'>
				<h3>Login Form</h3>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='item'>
					<h5>Email</h5>
					<input
						className='input'
						type='text'
						name='email'
						value={state.email}
						onChange={handleChange}
					/>
				</div>
				<div className='item'>
					<h5>Password</h5>
					<input
						className='input'
						type='password'
						name='password'
						value={state.password}
						onChange={handleChange}
					/>
				</div>
				<div className='item'>
					<button>Submit</button>
				</div>
			</form>
		</div>
	)
}
