import { screen } from '@testing-library/react';
import { default as Questions } from './index'

describe('Questions', () => {
    beforeEach(() => {
            renderWithReduxProvider(<Questions />, {})
    })

    test('renders the page', () => {
        let questions = screen.getByRole("main")
        expect(questions).toBeTruthy
    })
})