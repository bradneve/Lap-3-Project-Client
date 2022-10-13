import { screen } from '@testing-library/react';
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
        let home = screen.getByRole("main")
        expect(home).toBeTruthy
    })
})