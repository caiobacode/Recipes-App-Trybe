import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from './helpers/renderWith';

describe('Testes do SearchBar', () => {
  const searchString = 'search-top-btn';
  const ingredientString = 'ingredient-search-radio';
  const btnString = 'exec-search-btn';
  const searchBtnString = 'search-input';
  const recipeString = 'recipe-details';
  const firstLetterString = 'first-letter-search-radio';
  it('01 - Testa Ingrediente SerchBar Meals', () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/meals'));
    const searchButton = screen.getByTestId(searchString);
    const ingredientLink = screen.getByTestId(ingredientString);
    const bttSearch2 = screen.getByTestId(btnString);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchBtnString);
    userEvent.type(searchInput, 'Butter');
    userEvent.click(ingredientLink);
    userEvent.click(bttSearch2);
    expect(searchButton).toBeInTheDocument();
    expect(ingredientLink).toBeInTheDocument();
    expect(bttSearch2).toBeInTheDocument();
  });
  it('01 - Testa Ingrediente SerchBar Drinks', async () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/drinks'));
    const searchButton = screen.getByTestId(searchString);
    const ingredientLink = screen.getByTestId(ingredientString);
    const bttSearch2 = screen.getByTestId(btnString);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchBtnString);
    userEvent.type(searchInput, 'butter');
    userEvent.click(ingredientLink);
    userEvent.click(bttSearch2);
    expect(searchButton).toBeInTheDocument();
    expect(ingredientLink).toBeInTheDocument();
    expect(bttSearch2).toBeInTheDocument();
    const recipeTitle = await screen.findByTestId(recipeString);
    expect(recipeTitle).toBeInTheDocument();
    expect(history.location.pathname).toBe('/drinks/12738');
  });
  it('01 - Testa Name SerchBar Meals', async () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/meals'));
    const searchButton = screen.getByTestId(searchString);
    const nameLink = screen.getByTestId('name-search-radio');
    const bttSearch2 = screen.getByTestId(btnString);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchBtnString);
    userEvent.type(searchInput, 'Apple');
    userEvent.click(nameLink);
    userEvent.click(bttSearch2);
    expect(searchButton).toBeInTheDocument();
    expect(nameLink).toBeInTheDocument();
    expect(bttSearch2).toBeInTheDocument();
    expect(history.location.pathname).toBe('/meals');
  });
  it('01 - Testa Name SerchBar Drinks', async () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/drinks'));
    const searchButton = screen.getByTestId(searchString);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchBtnString);
    userEvent.type(searchInput, 'orangeade');
    const nameLink = screen.getByTestId('name-search-radio');
    const bttSearch2 = screen.getByTestId(btnString);
    expect(searchButton).toBeInTheDocument();
    expect(nameLink).toBeInTheDocument();
    expect(bttSearch2).toBeInTheDocument();
    userEvent.click(nameLink);
    userEvent.click(bttSearch2);
    const recipeTitle = await screen.findByTestId(recipeString);
    expect(recipeTitle).toBeInTheDocument();
    expect(history.location.pathname).toBe('/drinks/12618');
  });
  it('01 - Testa First Letter SerchBar Meals', async () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/meals'));
    const searchButton = screen.getByTestId(searchString);
    const letterLink = screen.getByTestId(firstLetterString);
    const bttSearch2 = screen.getByTestId(btnString);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchBtnString);
    userEvent.type(searchInput, 'y');
    userEvent.click(letterLink);
    userEvent.click(bttSearch2);
    expect(searchButton).toBeInTheDocument();
    expect(letterLink).toBeInTheDocument();
    expect(bttSearch2).toBeInTheDocument();
    const recipeTitle = await screen.findByTestId(recipeString);
    expect(recipeTitle).toBeInTheDocument();
    expect(history.location.pathname).toBe('/meals/52871');
  });
  it('01 - Testa First Letter SerchBar Meals', async () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/meals'));
    const searchButton = screen.getByTestId(searchString);
    const letterLink = screen.getByTestId(firstLetterString);
    const bttSearch2 = screen.getByTestId(btnString);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchBtnString);
    userEvent.type(searchInput, 'a');
    userEvent.click(letterLink);
    userEvent.click(bttSearch2);
    expect(searchButton).toBeInTheDocument();
    expect(letterLink).toBeInTheDocument();
    expect(bttSearch2).toBeInTheDocument();
  });
  it('01 - Testa First Letter SerchBar Drinks', async () => {
    // window.alert = jest.fn()
    // global.fetch = jest.fn().mockResolvedValue({
    // json: jest.fn().mockResolvedValue(oneDrink)
    // })
    const { history } = renderWithRouter(<App />);
    act(() => history.push('/drinks'));
    const searchButton = screen.getByTestId(searchString);
    const letterLink = screen.getByTestId(firstLetterString);
    const bttSearch2 = screen.getByTestId(btnString);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchBtnString);
    userEvent.type(searchInput, 'aa');
    userEvent.click(letterLink);
    userEvent.click(bttSearch2);
    const alertText = await screen.findByText('Your search must have only 1 (one) character', { exact: false });
    expect(alertText).toBeInTheDocument();
    // expect(window.alert).toHaveBeenCalledTimes(1)
    expect(searchButton).toBeInTheDocument();
    expect(letterLink).toBeInTheDocument();
    expect(bttSearch2).toBeInTheDocument();
  });
});
