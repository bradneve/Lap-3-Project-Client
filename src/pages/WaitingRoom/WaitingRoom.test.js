import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as WaitingRoom } from './index'

describe('WaitingRoom', () => {
    beforeEach(() => {
        render(
            renderWithReduxProvider(
                <Router>
                    <WaitingRoom />
                </Router>
                , {})
        )
    })

    test('renders the page', () => {
        let waitingRoom = screen.getByRole("main")
        expect(waitingRoom).toBeTruthy
    })
})