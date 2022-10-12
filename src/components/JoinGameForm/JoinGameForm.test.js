import { screen, within } from '@testing-library/react';
import { default as JoinGameForm } from './index'

describe('JoinGameForm', () => {

    test('renders a form with enter game pin in it', () => {
        renderWithReduxProvider(<JoinGameForm />, {  });
        let joinForm = screen.getByRole("form")
        let joinGameBtn = within(joinForm).getByRole('button')
        expect(joinForm.textContent).toBe('Enter your game PIN')
        expect(joinGameBtn.value).toBe('JOIN GAME')
    })

    
})