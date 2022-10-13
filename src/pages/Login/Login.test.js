import { screen } from '@testing-library/react';
import { default as Login } from './index'

describe('Login', () => {
    beforeEach(() => {
        render(
            renderWithReduxProvider(
                    <Login />
                , {})
        )
    })

    test('renders the page', () => {
        let loginPage = screen.getByRole("main")
        expect(loginPage).toBeTruthy
    })
})