import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };


    case userConstants.GROUPS_REQUEST:
      return {
      
      };
    case userConstants.GROUPS_SUCCESS:
      
      return {
        groups:action.groups
      };
    case userConstants.GROUPS_FAILURE:
        return { 
          error: action.error
        };

    case userConstants.DELETE_REQUEST:
    return {
        loading: true
      };
      // add 'deleting:true' property to user being deleted
      /*return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };*/
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        /*...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })*/
      };
    default:
      return state
  }
}