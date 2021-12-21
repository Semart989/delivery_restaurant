import userAT from '../actionTypes/userAT';

export const userInitAC = (payload) => {
  return {
    type: userAT.INIT_USER,
    payload
  }
}
