import userEvent from '@testing-library/user-event'
import { screen, render, within, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as LoginForm } from './index'

describe('LoginForm', () => {
    let handleLogin = jest.fn()

    beforeEach(() => {
        renderWithReduxProvider(<LoginForm handleLogin={handleLogin}/>, {});
    })

    test('renders the form', () => {
        const loginForm = screen.getByRole("form")
        expect(loginForm).toBeTruthy
    })
    test('renders signup form on clicking sign up', () => {
        const loginForm = screen.getByRole("form")
        const signUpBtn = within(loginForm).getByRole('signUpBtn')
        userEvent.click(signUpBtn)
        const signUpForm = screen.getByRole('form')
        expect(signUpForm).toBeTruthy
    })

    // test('renders the form', () => {
    //     const loginForm = screen.getByRole("form")
    //     const nameInput = screen.getByLabelText('Username:')
    //     userEvent.type(nameInput, "TestUser")
    //     const passwordInput = screen.getByLabelText('Password:')
    //     userEvent.type(passwordInput, "TestPassword")
    //     const submitBtn = within(loginForm).getByRole('submit')
    //     userEvent.click(submitBtn)
    //     expect(handleLogin).toHaveBeenCalled()
    // })
})