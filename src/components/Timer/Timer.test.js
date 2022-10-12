import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as Timer } from './index'

describe('Timer', () => {
    beforeEach(() => {
        render(
            <Router>
                <Timer />
            </Router>
        )
    })

    test('the timer renders', () => {
        let timer = screen.getByRole("timer")
        expect(timer).toBeTruthy
    })
})