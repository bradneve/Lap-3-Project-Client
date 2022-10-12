import { screen, render } from '@testing-library/react';
import { default as Logo } from './index'

describe('Logo', () => {
    beforeEach(() => {
        render(<Logo />)
    })

    test('renders a heading with trivia rangers in it', () => {
        let logo = screen.getByRole("heading")
        expect(logo.textContent).toBe('Trivia Rangers')
    })
})