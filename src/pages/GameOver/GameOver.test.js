import { screen } from '@testing-library/react';
import { default as GameOver } from './index'

describe('GameOver', () => {
    beforeEach(() => {
        renderWithReduxProvider(<GameOver />, {})
    })

    test('renders the page', () => {
        let gameOver = screen.getByRole("main")
        expect(gameOver).toBeTruthy
    })
})