import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ItemDetails from './ItemDetails';
import { fetchData } from '../features/items/itemSlice';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ItemDetails', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      data: {
        status: 'loading',
        items: []
      }
    });

    jest.spyOn(fetchData, 'fetchData').mockImplementation(() => () => Promise.resolve());
  });

  test('shows loading state', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/items/1']}>
          <ItemDetails />
        </MemoryRouter>
      </Provider>
    );

   
    expect(screen.getByText('Loading....')).toBeInTheDocument();
  });
});
