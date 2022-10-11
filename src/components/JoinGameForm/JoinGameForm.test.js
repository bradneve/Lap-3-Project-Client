import { screen } from '@testing-library/react';
import { default as JoinGameForm } from './index'

describe('JoinGameForm', () => {
    beforeEach(() => {
        render(<JoinGameForm/>)
    })

    test('renders a form with enter game pin in it', () => {
        let joinForm = screen.getByRole("form")
        expect(joinForm.textContent).toBe('Trivia Rangers')
    })
})