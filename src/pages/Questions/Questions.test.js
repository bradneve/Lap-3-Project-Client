import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as Questions } from './index'

describe('Questions', () => {
    beforeEach(() => {
        render(
            renderWithReduxProvider(
                    <Questions />
                , {})
        )
    })

    test('renders the page', () => {
        let questions = screen.getByRole("main")
        expect(questions).toBeTruthy
    })
})