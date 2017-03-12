**Data Source**


##### MySQL Installation:

sudo apt install mysql-server

make mysql accessible outside the network:
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf

change line:
bind-address		= 127.0.0.1
to
bind-address		= 0.0.0.0

Restart MySQL service:
sudo service mysql restart
#
###### IMPORT or add data into the database.
###### sample data in library.sql in project root
#

###Running the server:

**Pre-Requisites:**
1. node
2. git
3. Read/Write permissions on a directory
4. Network access to the system being used
5. Browser and or API REST Client like PostMan

**Steps:**

open `Terminal`
1. clone this project using: `git clone https://github.com/emmanuelstroem/booksback.git`
2. `cd` into `booksback`
3. run `npm install` to install all the required node modules
4. install nodemon using: `npm install -g nodemon`
5. run the project using: `nodemon` or simply `node app.js`


**Access:**

1. API will be running on port `:3000`

2. Open browser or REST client and enter `machine ip:3000` 

#



**BOOK ROUTES:**

GET all books:
`books/`

GET single book details
`books/{id}`

POST new book
`books/add`

PUT new book details
`books/{id}`

**AUTHOR ROUTES:**

GET all authors
`authors/`

GET single author details
`authors/{id}`

POST new author
`authors/add`

PUT author details
`authors/{id}`