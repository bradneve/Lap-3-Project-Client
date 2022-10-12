import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as Home } from './index'

describe('Home', () => {
    beforeEach(() => {
        render(
            renderWithReduxProvider(
                    <Home />
                , {})
        )
    })

    test('renders the page', () => {
        let roundStats = screen.getByRole("main")
        expect(roundStats).toBeTruthy
    })
})