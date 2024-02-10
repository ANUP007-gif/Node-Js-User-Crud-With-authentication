# Node-Js-User-Crud-With-authentication


#  Node JS API

## Prerequisites

- Node.js installed on your machine.
- MySQL database installed and running.

## Install dependencies:

- npm install

## Database Configuration:

- Create a MySQL database.
- Update the database configuration in .env file with your database credentials.

## Run Migrations:

- Run Sequelize migrations to create database tables.
- npx sequelize db:migrate --env development


## Start the Application:

- npm start OR npm run dev


Project Documentation

-The project is about the crud operation on the user.
Consist of the 5 Apis

1- Register User

URL - http://localhost:7000/api/users/register
Method - POST


The api is to register the user with the required input fields.


Preffered payload.
{
    "email": "anoop1m7222225@gmail.com",
    "first_name": "Anup",
    "last_name": "Mishra",
    "password": "1234",
    "role": "admin",
    "country_code":91,
    "designation": "Software Engineer",
    "address": "vatva",
    "city":"Ahmedabad",
    "state": "Gujrat",
    "country_name": "India",
    "pincode" :382440,
    "phone_number": 8219825821723
}
Need to Pass like This. The email and Phone number is unique fields. You can created 2 user with same Email and phone number.The password get encrypted and get stored in db in encrypted form for the security reason with the help of bcrypt library.

curl --location 'http://localhost:7000/api/users/register' \
--header 'Content-Type: application/json' \
--data-raw '{
       "email": "anoop1m7222225@gmail.com",
    "first_name": "Anup",
    "last_name": "Mishra",
    "password": "1234",
    "role": "admin",
    "country_code":91,
    "designation": "Software Engineer",
    "address": "vatva",
    "city":"Ahmedabad",
    "state": "Gujrat",
    "country_name": "India",
    "pincode" :382440,
    "phone_number": 8219825821723
}'


2 - Login User

http://localhost:7000/api/users/login
Method - POST


This api is added additionaly for the seek to implement the jwt token. In this you need to login with email and phone number with correct password otherwise it will give the error.In this API i also make a jwt token and send the jwt token back in response for the further authorization purpose.

Preferred payload - 
{
    "userName": 8219858723,
    "password": "1234"
}

curl --location 'http://localhost:7000/api/users/login' \
--header 'Content-Type: application/json' \
--data '{
    "userName": 8219858723,
    "password": "1234"
}'


3 - Update User

http://localhost:7000/api/users/1
Method - PUT


By using this api you can update the user details.The id passed in query params gets updated by this.

Payload;{
    "first_name": "Anup Kumar",
    "last_name": "Mishra"
    
}

curl --location --request PUT 'http://localhost:7000/api/users/1' \
--header 'Content-Type: application/json' \
--data '{
    "first_name": "Anup",
    "last_name": "Mishra"
    
}'

4 - Get All users

http://localhost:7000/api/users?page=1&limit=10&search=8219858723&filterKey=&filterValue=&sortby=0&sortwith=createdAt

Method - GET


This api is to get all user from the database. In this api Pagination, Sorting, search , Filter everything is implemented by making a dynamic function which can be used with all the APi.Pagination is dynamic , Filerting is also dynamic filterKey name of the any key from the db and filterValue for the value of that key if will able to filter on serval keys.

Also Sorting in also dynamic in this like you need to pass sortby=1 for Ascending sortby=0 for decending order on any key of the db sortwith=createdAt you can pass any key in sortwith Flag it will sort accordingly.

Also you can search on this.

 curl --location 'http://localhost:7000/api/users?page=1&limit=10&search=8219858723&filterKey=&filterValue=&sortby=0&sortwith=createdAt' \
--data ''


5 - Get User By Id 

http://localhost:7000/api/users/14
Method - GET

This APi is to get the user by Id 

curl --location 'http://localhost:7000/api/users/14' \
--data ''


6 - Delete User

http://localhost:7000/api/users/1
Method - Delete.

This api is to delete the User by Id .In this Api i have also implemented the middleware to check the jwt token if you provide the correct teh jwt token in header the only you can able to acess the api. Unless it will throw an error "jwt must be provided".This middleware can be used in all the api but currently implemented in delete api only. The token you will in the response of login api that you need to pass in the header of this Api.


curl --location --request DELETE 'http://localhost:7000/api/users/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJhbm9vcG03MjVAZ21haWwuY29tIiwibmFtZSI6IkFudXAiLCJmaXJzdF9uYW1lIjoiQW51cCIsImxhc3RfbmFtZSI6Ik1pc2hyYSIsImNyZWF0ZWRBdCI6IjIwMjQtMDItMTBUMTI6NDg6MDIuMDAwWiIsImlhdCI6MTcwNzU3MTEwNSwiZXhwIjoxNzA3NjU3NTA1fQ.zN0riL8NAVAoGnpjN8NBRUo1k8mbObLGFIoqnPWkUBE' \
--data ''




In case .env file not found 

DB_PORT_LOCAL=3306

JWT_SECRET=super secret for One Technologies Practical
JWT_EXPIRE_IN=1d
JWT_PASS_RESET_EXPIRE_IN=10m

BCRYPT_SALT=10


Put that in .env file by making a .env file with touch .env command