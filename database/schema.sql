CREATE database IF NOT EXISTS finances

CREATE TABLE IF NOT EXISTS categorygroup (
  id INT AUTO_INCREMENT,
  categorygroupname VARCHAR(50)
  PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS categories (
id INT AUTO_INCREMENT
categoryname VARCHAR(50),
categorygroupid INT
 PRIMARY KEY (id),
 FOREIGN KEY (categorygroupid) REFERENCES categorygroup(id)
)


CREATE TABLE IF NOT EXISTS expenses (
  id INT AUTO_INCREMENT,
  person VARCHAR(25),
  amount DECIMAL(8,2),
  categoryid INT,
  transactionDate DATE
  PRIMARY KEY (id)
  FOREIGN KEY (categoryid) REFERENCES category (id)
)

CREATE TABLE IF NOT EXISTS budget (
  id INT AUTO_INCREMENT,
  categoryid INT,
  amount DECIMAL(8,2),
  PRIMARY KEY (id),
  FOREIGN KEY (categoryid) REFERENCES category (id)
)




