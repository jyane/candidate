// @flow

type AddTodo = { type: 'ADD_TODO', todo: string };
type UpdateCurrent = { type: 'UPDATE_CURRENT', value: string };
export type TodoAction = AddTodo | UpdateCurrent;

type UserSearch = { type: 'USER_SEARCH' };
type UserSearchSuccess = { type: 'USER_SERACH_SUCCESS' };
type UserSearchFailure = { type: 'USER_SEARCH_FAILURE' };
export type UserSearchAction = UserSearch | UserSearchSuccess | UserSearchFailure;

