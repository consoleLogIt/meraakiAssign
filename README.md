# users api
### Technologies used: Node JS, Express JS, MongoDB, JWTs.

## How to setup
step1: clone the repository.\
step2: In the terminal do`npm install or yarn` to download all the dependencies.
## How to use
do`npm start or yarn start` to start the server.\

## Available routes
`post`

users/create-user (pass username and password).  `if doctor already registered return the doctor info` .\
users/sign-in (pass username and password)`returns a jwt to be used`.\

`patch`

users/update-password `update password of logged in user`.\
users/update-username `update username og logged in user`.\

`get`

/all-users `return all users`
/id `returns particular user`


            
