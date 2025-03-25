DROP TABLE IF EXISTS example.items;

CREATE TABLE example.items 
    (name VARCHAR(15) NOT NULL , 
     type VARCHAR(3) NOT NULL , 
     cost FLOAT NOT NULL , 
     PRIMARY KEY (name)
    );

INSERT INTO items (name, type, cost) VALUES ('basketball', 'rnd', '24.23');
INSERT INTO items (name, type, cost) VALUES ('plate', 'rnd', '12.98');
INSERT INTO items (name, type, cost) VALUES ('box', 'sqr', '9.45');

