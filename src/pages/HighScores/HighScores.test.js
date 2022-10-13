import { screen } from '@testing-library/react';
import { default as HighScores } from './index'

describe('HighScores', () => {
    beforeEach(() => {
        render(
            renderWithReduxProvider(
                    <HighScores />
                , {})
        )
    })

    test('renders the page', () => {
        let highScores = screen.getByRole("main")
        expect(highScores).toBeTruthy
    })
})