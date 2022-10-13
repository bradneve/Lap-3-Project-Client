import { fireEvent, screen, within } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import axios from 'axios';
jest.mock('axios')
import { default as JoinGameForm } from './index'

describe('JoinGameForm', () => {
    let handleCreateFormSubmit = jest.fn()
    beforeEach(() => jest.resetAllMocks())

    describe('join-game-container', () => {
        test('renders a form with enter game pin in it', () => {
            renderWithReduxProvider(<JoinGameForm />, {});
            let joinForm = screen.getAllByRole("form")[0]
            let joinGameBtn = within(joinForm).getByRole('button')
            expect(joinForm.textContent).toBe('Enter your game PIN')
            expect(joinGameBtn.value).toBe('JOIN GAME')
        })
    })

    describe('create-game-container', () => {
        test('renders a form with create game in it', () => {
            renderWithReduxProvider(<JoinGameForm />, {});
            let createForm = screen.getAllByRole("form")[1]
            let createGameBtn = within(createForm).getByRole('button')
            expect(createGameBtn.value).toBe('CREATE GAME')
        })

        // test('it makes a request to the api on submit', async () => {
        //     axios.get.mockResolvedValue({ data: { results : { questions: 'q1', incorrect_answers: ['ia11, ia12, ia13'], correct_answer: 'ca1' }  }   });
        //     renderWithReduxProvider(<JoinGameForm handleCreateFormSubmit={handleCreateFormSubmit} />, {})
        //     const createForm = await screen.getAllByRole("form")[1]
        //     await fireEvent.submit(createForm)
        //     expect(handleCreateFormSubmit).toHaveBeenCalled()
        // })
        // test('it makes a request to the api on submit', () => {
        //     const handleCreateFormSubmit = jest.fn()
        //     renderWithReduxProvider(<JoinGameForm />, {})
        //     let createForm = screen.getAllByRole("form")[1]
        //     fireEvent.submit(createForm)
        //     expect(handleCreateFormSubmit).toHaveBeenCalled()

        // })
    })


})