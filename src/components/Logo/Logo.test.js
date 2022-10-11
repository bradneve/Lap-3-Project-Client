import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as Logo } from './index'

describe('Logo', () => {
    beforeEach(() => {
        render(
            <Router>
                <Logo />
            </Router>
        )
    })

    test('renders a heading with trivia rangers in it', () => {
        let logo = screen.getByRole("heading")
        expect(logo.textContent).toBe('Trivia Rangers')
    })
})