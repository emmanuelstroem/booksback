**Data Source**
MySQL

Installation:

sudo apt install mysql-server

make mysql accessible outside the network:
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf

change line:
bind-address		= 127.0.0.1
to
bind-address		= 0.0.0.0

Restart MySQL service:
sudo service mysql restart

##IMPORT or add data into the database.



**BOOK ROUTES**
GET all books:
books/

GET single book details
books/{id}

POST new book
books/add

PUT new book details
books/{id}

**AUTHOR ROUTES**
GET all authors
authors/

GET single author details
authors/{id}

POST new author
authors/add

PUT author details
authors/{id}