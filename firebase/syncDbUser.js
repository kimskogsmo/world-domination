import 'firebase/app';
import 'firebase/database';

export const syncDbUser = (userData) => {
    const usersRef = firebase.database().ref('users')
    console.log(usersRef);
    debugger;
}