
![Status Stable](https://img.shields.io/badge/Status-Stable-blue)
[![MIT License](https://img.shields.io/badge/License-MIT%20License-brightgreen)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
# E-Commerce Backend
This project is aimed to help a small business organize its inventory. This small business sells PRODUCTS which are 
grouped into CATEGORIES and each one of those products can receive as many TAGS as it needs to get the best 
description in the store. The database we use as developers to store the data is made out of 4 tables (Categories, Products, Tags, and the bridge table Product-Tags) and are related using foreign keys. This project was very interesting to develop, because it uses a library called Sequelize, which abstracts the SQL into regular Javascript code in order to help the developer to be more efficient.  
## Table of Contents
- E-Commerce Backend
	* [VIDEO](#VIDEO)
	* [Installation](#installation)
	* [Database-Diagram](#Database-Diagram)	  
	* [Usage](#usage)
	* [Credits](#credits)
	* [Features](#features)
	* [Contributions](#contributions)
- [🔗 Links](#---links)
	+ [GitHub Repository](#github-repository)
	+ [Support](#support)
	+ [Authors](#authors)

## VIDEO
You will find a video demonstrating the use of this app:

  [![Foo](play-instructional-video.jpg)](https://vimeo.com/587640028)


## Installation
The requirements to install this project are: 
`````````
- NodeJS 
- ExpressJS 
- Sequelize 
- DotEnv 
- MySql2 
- MySQL Database
`````````
## Database-Diagram
This is the diagram showing the Database tables and the relationships between them.

![e_commerce_db.png](e_commerce_db.png)

## Usage
Using POSTMAN or INSOMNIA, you can verify the API routes for GET, POST, PUT, and DELETE.

![e-commerce.gif](e-commerce.gif)
## Credits
To develop this application, the Sequelize manual was very valuable. Also a post on Cascade deletion from Stack 
Overflow helped me a lot.
 - [https://sequelize.org/master/](https://sequelize.org/master/)
 - [https://github.com/sequelize/cli](https://github.com/sequelize/cli)
 - [Stackoverflow.com - On Cascade Deletion](https://stackoverflow.com/questions/23128816/sequelize-js-ondelete-cascade-is-not-deleting-records-sequelize)

## Current Features
````````````````````````
- Code developed using Node, Express, and Sequelize
- The data is stored in a MySQL database
- Sequelize abstracts the SQL language into regular Javascript
- This development is a backend app
````````````````````````
## Future Features
````````````````````````
- Develop the front-end for a complete e-commerce solution
- Include the financial part of the business
````````````````````````
## Contributions
If you would like to contribute to this project , you are very welcome! You can fork it and later submit a pull request. 
In case you need them, here are some guidelines: [Contributor Covenant](https://www.contributor-covenant.org/)
# 🔗 Links
### GitHub Repository
[https://github.com/giannifontanot/ecommerce-backend/](https://github.com/giannifontanot/ecommerce-backend/)
### Support
If you need help with this project, please write to: [giannifontanot@gmail.com](https://mailto:giannifontanot@gmail.com)
### Authors
 - [@giannifontanot](https://www.github.com/giannifontanot)
 - [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://giannifontanot.github.io/portfolio/)
 - [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gianni-fontanot/)