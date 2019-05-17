import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const dsadasdas = {
        id: '109',
        description: 'new expense',
        note: 'this is new expense',
        createdAt: 1000,
        amount: 1399
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: dsadasdas
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, dsadasdas]);
});

test('should edit an expense', () => {
    const description = 'new description'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(description);
});

test('should not edit an expense if id not found', () => {
    const description = 'new description'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});