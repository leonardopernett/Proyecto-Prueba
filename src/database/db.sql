CREATE DATABASE pedido;


CREATE TABLE pedidos(
 id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
 nombre VARCHAR(50) NOT NULL,
 apellido VARCHAR(50) NOT NULL,
 email VARCHAR(50) NOT NULL,
 telefono INTEGER NOT NULL,
 direccion TEXT NOT NULL,
 fecha_entrega DATE NOT NULL,
 hora_entrega DATETIME NOT NULL,

);

CREATE TABLE pedidos(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL  UNIQUE,
    telefono BIGINT NOT NULL,
    direccion TEXT NOT NULL,
    fecha_entrega DATE NOT NULL,
    hora_entrega VARCHAR(50) NOT NULL
);

INSERT INTO pedidos (nombre, apellido, email, telefono, direccion, fecha_entrega, hora_entrega) VALUES('leo','pernett','leo@gmail.com',312323322,'cra b numero n34b-12','2019-04-03','7 pm');