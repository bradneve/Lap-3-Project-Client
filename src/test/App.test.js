import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import App from '../App';

// describe('App', () => {

//   beforeEach(() => {
//     render(<App />);
//   });

//   test("renders story headlines", () => {
//     const headlines = screen.getByRole('list');
//     expect(headlines.textContent).toContain("Beware the Frumious Bandersnatch");
//   });

//   test("greets a user as 'friend' if no username given", () => {
//     const greeting = screen.getByRole('heading', { name: 'greeting' });
//     expect(greeting.textContent).toBe("Hi there, friend!");
//   });

//   test("does not change greeting whilst a user enters input", () => {
//     const nameInput = screen.getByLabelText('Username')
//     userEvent.type(nameInput, "Beth")
//     const greeting = screen.getByRole('heading', { name: 'greeting' });
//     expect(greeting.textContent).toBe("Hi there, friend!");
//     expect(nameInput.value).toBe("Beth")
//   });

//   test("greets a user by name when user submits name", () => {
//     const nameInput = screen.getByLabelText('Username')
//     userEvent.type(nameInput, "Beth{enter}")
//     const greeting = screen.getByRole('heading', { name: 'greeting' });
//     expect(greeting.textContent).toBe("Hi there, Beth!");
//   });

//   test("clears user input after submission", () => {
//     const nameInput = screen.getByLabelText('Username')
//     userEvent.type(nameInput, "Beth{enter}")
//     expect(nameInput.value).toBe("");
//   });

//   test("changes featured story when a story headline is clicked", () => {
//     const firstArticle = screen.getAllByRole('listitem')[0];
//     const firstHeadline = within(firstArticle).getByRole('heading', { name: "headline" });
//     const secondArticle = screen.getAllByRole('listitem')[1];
//     const secondHeadline = within(secondArticle).getByRole('heading', { name: "headline" });
    
//     userEvent.click(firstArticle)
//     const article = screen.getByRole('article', { name: 'featured story'})
//     expect(article.textContent).toContain(firstHeadline.textContent);

//     userEvent.click(secondArticle)
//     expect(article.textContent).toContain(secondHeadline.textContent);
//   });

//   test("increases reader count when 'I\'ve read!' button is clicked", () => {
//     const readButton = screen.getByRole('button', { name: 'Read story'});
//     const initialReaderCount = screen.getByRole('figure').textContent;
//     userEvent.click(readButton);
//     const newReaderCount = screen.getByRole('figure').textContent;
//     expect(parseInt(newReaderCount)).toBe(parseInt(initialReaderCount) + 1)
//   })
// });