import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import BackButton from ".";

describe('back button', () => {
    beforeEach(() => render(<BackButton />, {wrapper: MemoryRouter}))

    test('renders back button', () => {
        const btn = screen.getByRole('button', {name: 'Back to home'})
        expect(btn).toBeInTheDocument()
    })
})