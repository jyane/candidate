// @flow

import React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

import type { UserSearchAction } from 'src/types/actions';

import * as Actions from 'src/actions/userSearch';

type StateProps = {}

const mapStateToProps = (): StateProps => ({})

type DispatchProps = {
  searchUser: typeof Actions.searchUser
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<UserSearchAction>): DispatchProps =>
  Redux.bindActionCreators(Actions, dispatch);

type Props = StateProps & DispatchProps;

const UserSearch = ({ searchUser }: Props) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    searchUser();
  }}>
    <button type="submit">search</button>
  </form>
);

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);

