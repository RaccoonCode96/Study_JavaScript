'use strict';
// Callback Hell example (Callback 지옥 예제)



class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'raccoon' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (user === 'raccoon') {
                    resolve({ name: 'raccoon', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}



const userStorage = new UserStorage();
const id = prompt('enter your id!');
const password = prompt('enter your password!');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
