DROP DATABASE IF EXISTS ecoenvironment;

CREATE DATABASE ecoenvironment;

USE ecoenvironment;

DROP TABLE IF EXISTS cliente;

CREATE TABLE cliente (
    identificacion INT(10) PRIMARY KEY,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS cuenta;

CREATE TABLE cuenta (
    id_cuenta INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    correo VARCHAR(50) UNIQUE NOT NULL,
    contraseña VARCHAR(50) NOT NULL,
    identificacion_cliente INT(10)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS direccion;

CREATE TABLE direccion (
    id_direccion INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    identificacion_cliente INT(10) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    departamento VARCHAR(25) NOT NULL,
    ciudad varchar(25) NOT NULL,
    barrIo VARCHAR(50) NOT NULL,
    codigo_postal VARCHAR(5) NOT NULL,
    telefono VARCHAR(7) NOT NULL,
    movil VARCHAR(10) NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS producto;

CREATE TABLE producto (
    id_producto INT(5) PRIMARY KEY AUTO_INCREMENT,
    nombre_producto VARCHAR(50) NOT NULL,
    descripcion_producto VARCHAR(100) NOT NULL,
    precio DOUBLE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    empresa VARCHAR(50) NOT NULL,
    cantidad INT(10) NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS pedido;

CREATE TABLE pedido (
    id_pedido INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    identificacion_cliente INT(10),
    estado VARCHAR(25) NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS carrito;

CREATE TABLE carrito (
    id_carrito INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_producto INT(5),
    id_pedido INT(5) UNSIGNED,
    cantidad INT(5) NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS envio;

CREATE TABLE envio (
    id_pedido INT(5) UNSIGNED,
    forma_pago VARCHAR(25) NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS factura;

CREATE TABLE factura (
    numero_factura INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT(5) UNSIGNED,
    identificacion_cliente INT(10),
    total DOUBLE NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS historial;

CREATE TABLE historial (
    identificacion_cliente INT(10),
    id_pedido INT(5) UNSIGNED,
    fecha_pedido VARCHAR(10) NOT NULL
) ENGINE=InnoDB;

-- Creacion de claves foraneas

ALTER TABLE cuenta
ADD FOREIGN KEY (identificacion_cliente) REFERENCES cliente (identificacion);

ALTER TABLE direccion
ADD FOREIGN KEY (identificacion_cliente) REFERENCES cliente (identificacion);

ALTER TABLE pedido 
ADD FOREIGN KEY (identificacion_cliente) REFERENCES cliente (identificacion);

ALTER TABLE carrito
ADD FOREIGN KEY (id_producto) REFERENCES producto (id_producto);

ALTER TABLE carrito
ADD FOREIGN KEY (id_pedido) REFERENCES pedido (id_pedido);

ALTER TABLE envio
ADD FOREIGN KEY (id_pedido) REFERENCES pedido (id_pedido);

ALTER TABLE factura
ADD FOREIGN KEY (id_pedido) REFERENCES pedido (id_pedido);

ALTER TABLE factura
ADD FOREIGN KEY (identificacion_cliente) REFERENCES cliente (identificacion);

ALTER TABLE historial
ADD FOREIGN KEY (identificacion_cliente) REFERENCES cliente (identificacion);

ALTER TABLE historial
ADD FOREIGN KEY (id_pedido) REFERENCES pedido (id_pedido);

