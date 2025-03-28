# YumTea #
This is the frontend for a tea e-commerce website developed with React.js, backend in Springboot and MySQL. It is secured bt Spring Security and JWT.

## Technology and Packages
- React
- React  18
- React redux
- React router dom
- reduxjs/toolkit
- react bootstrap
- react bootstrap icon


## Before You start
Setup the backend API
The Backend Api is created in **Springboot**.
Visit [https://github.com/villysiu/yum_tea_sb](https://github.com/villysiu/yum_tea_sb?tab=readme-ov-file#running-the-project)
and follow the instruction to start up the backend server at http://localhost:8080/.

## Youtube:  ##

Coming soon


## Running the project ##

- Clone the Git repository https://github.com/villysiu/yumtea_sb_frontend.git
- Open Intellij,
    - File -> New -> Project from Version Control
    - Paste the cloned git link into the `URL` box
    - Click `Clone`
  
- Open VSCode,
  - Select the Clone Repository button in the Source Control view.
  - Paste the cloned git link into the `URL` box
  - Click `Clone from GitHub`

- Once the project is cloned, navigate to the project directory `/yumtea_sb_forntend`

- Run `npm install` or `yarn install` to install the dependencies listed in package.json
- Once the dependencies are installed, you can start the development server, by running `npm start` or `yarn start`

The React development server should open the application in your default web browser, default at **http://localhost:3000**.



## About the project ##

The ecommerce application has 3 access level:  
- [public resources](https://github.com/villysiu/yumtea_sb_frontend/tree/master?tab=readme-ov-file#public-resources)
- [private resources for **_ROLE_USER_**](https://github.com/villysiu/yumtea_sb_frontend/tree/master?tab=readme-ov-file#private-resources-for-role_user)
- [private resources for **_ROLE_ADMIN_** ](https://github.com/villysiu/yumtea_sb_frontend/tree/master?tab=readme-ov-file#private-resources-for-role_admin)



## Endpoints ##
### public resources ###
`/`
`/visit-taste` 
`/support`

- `/collection`
  - Displays all tea `Menuitem` by `Category`
  - The `Menuitem` and `Category` are fetched from backendAPI with react-redux

 `/user/signin` 
  - User signs in with valid credentials, `email` and `password`
  - User inputs validated by **regex** 
  - Authenticated by Spring Security in backend api
  - Upon successful sign in, a **JWT token** is assigned and is being sent in every request in header.

`/user/signup `
  - User signs up with `nickname`, `email` and `password`
  - User inputs validated by **regex**
  - User has `ROLE_USER` authority
  - After successful signup, user signs in in `/signin`

### private resources for **_ROLE_USER_** ###
When a user with `ROLE_USER` signs in,
the user can visit the following private resources,

`/logout`
  - Authenticated user signs out
  - handled by Spring Security in backend API

`/secure/account `
- Authenticated user can change his `nickname`
- Authenticated user can change his `pasoword`

` /secure/orders`
- Authenticated user can view all his own `Purchase` in the last 3, 7, 30 or 365  days

`/secure/checkout `
- Authenticated user can see all his own `Cart` items in shopping cart
- Adds gratuity
- Tax calculated by state(ie. WA 10%) 
- Upon successful checkout, shopping cart is emptied


#### Other features for **_ROLE_USER_**
<img src="https://github.com/villysiu/yumtea_sb_frontend/blob/master/public/readme/cart.png?raw=true" width="50%"  alt=""/>

- `add item to cart`
- `remove item from cart`
- `customize item in cart`

[//]: # (![]&#40;https://github.com/villysiu/yumtea_sb_frontend/blob/master/public/readme/customize.png?raw=true&#41;)
<img src="https://github.com/villysiu/yumtea_sb_frontend/blob/master/public/readme/customize.png?raw=true" width="50%"  alt=""/>

  - update temperature
  - update size
  - update milk
  - update sweetness
  - update quantity


### private resources for **_ROLE_ADMIN_** ###
When an admin with `ROLE_ADMIN` signs in, he can access 
the following private and `ROLE_ADMIN` only resources.

`/admin/accounts`
 - can see all user accounts
 - can delete user account
 - can toggle authority between  `ROLE_ADMIN` and `ROLE_USER`
 - can search for accounts by name or email, or id

`/admin/menuitems`
- can see all menuitems
 - can add new menuitem
 - can edit menuitem

[//]: # ( - can delete menuitem)
 - can toggle menuitem visibility
 - can search for menuitem by name or category,

`/admin/images`
- can add new image 
- can edit image
- can delete image

`/admin/purchases`
- can view all purchases with details by all users
- can delete purchase
- can search purchases by Menuitem, date or email

`/admin/hub`
- can see bar chart of sales from best-selling menuitems

<img src="https://github.com/villysiu/yumtea_sb_frontend/blob/master/public/homepage/barchart.png?raw=true" width="75%"  alt=""/>

- can see a pie chart of milk popularity 

<img src="https://github.com/villysiu/yumtea_sb_frontend/blob/master/public/homepage/piechart.png?raw=true" width="50%"  alt=""/>