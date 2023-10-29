import React from "react";
import { connect } from "react-redux";
import { AppDispatchType, AppRootStateType } from "../../redux/redux-store";
import {
  PaginationType,
  UsersServerType,
  changeCurrentPageAC,
  followUserTC,
  followingInProgressType,
  getUsersTC,
  unfollowUserTC,
} from "../../redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
    getfollowingInProgressSelector,
  getIsFetchingSelector,
  getPaginationSelector,
  getUsersSuperSelector,
} from "../../redux/users-selectors";

type UsersAPIPropsType = {
  users: UsersServerType;
  pagination: PaginationType;
  changeCurrentPage: (numberPage: number) => void;
  isFetching: boolean;
  followingInProgress: followingInProgressType;
  getUsers: (pageNumber: number, pageSize: number) => void;
  followUser: (userId: number) => void;
  unFollowUser: (userId: number) => void;
};

export class UsersAPIComponent extends React.Component<UsersAPIPropsType> {
  constructor(props: UsersAPIPropsType) {
    super(props);
  }

  componentDidMount(): void {
    this.props.getUsers(
      this.props.pagination.currentPage,
      this.props.pagination.pageSize
    );
  }

  onPageChanged = (pageNumber: number) => {
    this.props.changeCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pagination.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pagination={this.props.pagination}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          followUser={this.props.followUser}
          unFollowUser={this.props.unFollowUser}
        />
      </>
    );
  }
}

//1. Conteiner Component

const mapStateToProps = (state: AppRootStateType) => {
  return {
    users: getUsersSuperSelector(state),
    pagination: getPaginationSelector(state), //page size
    isFetching: getIsFetchingSelector(state), //load
    followingInProgress: getfollowingInProgressSelector(state)
  };
};

const mapDispatchToProps = (dispatch: AppDispatchType) => {
  return {
    changeCurrentPage: (numberPage: number) => {
      dispatch(changeCurrentPageAC(numberPage));
    },

    getUsers: (pageNumber: number, pageSize: number) => {
      dispatch(getUsersTC(pageNumber, pageSize));
    },
    followUser: (userId: number) => {
      dispatch(followUserTC(userId));
    },
    unFollowUser: (userId: number) => {
      dispatch(unfollowUserTC(userId));
    },
  };
};

export const UsersContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps)
)(UsersAPIComponent);

//________________________________________________________________________________________________________________________
// 1. Conteiner Component

// const mapStateToProps = (state: AppRootStateType) => {
//     return {
//         users: state.usersPage.users,
//         pagination: state.usersPage.pagination,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
//}
//(action: ActionTypeUser)
