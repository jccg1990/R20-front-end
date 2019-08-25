import { Auth } from 'aws-amplify'
import store from '../store.js'

let utilities = {
  async findUser(){
      try {
          const user = await Auth.currentAuthenticatedUser();
          store.commit({
            type: 'setUser',
            user: user
          });
      } catch (err) {
          store.commit('removeUser');
      }
  }
}

export default utilities
