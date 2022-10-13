import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as InGameLeaderboard } from './index'

describe('InGameLeaderboard', () => {
    beforeEach(() => {
        render(
            renderWithReduxProvider(
                    <InGameLeaderboard />
                , {})
        )
    })

    test('renders the IGL', () => {
        let roundStats = screen.getByRole("contentinfo")
        expect(roundStats).toBeTruthy
    })
})