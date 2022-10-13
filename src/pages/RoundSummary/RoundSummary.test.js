import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as RoundSummary } from './index'

describe('RoundSummary', () => {
    beforeEach(() => {
        render(
            renderWithReduxProvider(
                    <RoundSummary />
                , {})
        )
    })

    test('renders the page', () => {
        let roundSummary = screen.getByRole("main")
        expect(roundSummary).toBeTruthy
    })
})