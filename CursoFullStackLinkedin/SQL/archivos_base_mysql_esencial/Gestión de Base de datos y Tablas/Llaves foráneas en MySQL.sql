CREATE TABLE `cliente` (
  `idCliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `departamento` (
  `idDepartamento` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idDepartamento`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `empleado` (
  `idEmpleado` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `fechaIngreso` date DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `sexo` ENUM('hombre', 'mujer') DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `salario` decimal(10,2) DEFAULT NULL,
  `idDepartamento` int NULL,
  PRIMARY KEY (`idEmpleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `categoria` (
  `idCategoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `producto` 
CHANGE COLUMN `idProducto` `idProducto` INT(11) NOT NULL ,
ADD PRIMARY KEY (`idProducto`);
;

ALTER TABLE `producto` 
ADD COLUMN `nombre` VARCHAR(45) NULL AFTER `idProducto`,
ADD COLUMN `idCategoria` INT NULL AFTER `nombre`,
ADD COLUMN `precioUnitario` DECIMAL(10,2) NULL AFTER `idCategoria`;

CREATE TABLE `factura` (
  `idFactura` int NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  `idCliente` int DEFAULT NULL,
  `idEmpleado` int DEFAULT NULL,
  PRIMARY KEY (`idFactura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `detalle_factura` (
  `idDetalle` int NOT NULL AUTO_INCREMENT,
  `idFactura` int DEFAULT NULL,
  `idProducto` int DEFAULT NULL,
  `precioUnitario` decimal(10,2) DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`idDetalle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



ALTER TABLE `factura` 
ADD INDEX `FK_REL_CLI_FAC_idx` (`idCliente` ASC) VISIBLE,
ADD INDEX `FK_REL_EMP_FAC_idx` (`idEmpleado` ASC) VISIBLE;
;
ALTER TABLE `factura` 
ADD CONSTRAINT `FK_REL_CLI_FAC`
  FOREIGN KEY (`idCliente`)
  REFERENCES `cliente` (`idCliente`)
  ON DELETE RESTRICT
  ON UPDATE CASCADE,
ADD CONSTRAINT `FK_REL_EMP_FAC`
  FOREIGN KEY (`idEmpleado`)
  REFERENCES `empleado` (`idEmpleado`)
  ON DELETE RESTRICT
  ON UPDATE CASCADE;


ALTER TABLE `detalle_factura` 
ADD INDEX `FK_REL_FAC_DET_idx` (`idFactura` ASC) VISIBLE,
ADD INDEX `FK_REL_PRO_DET_idx` (`idProducto` ASC) VISIBLE;
;
ALTER TABLE `detalle_factura` 
ADD CONSTRAINT `FK_REL_FAC_DET`
  FOREIGN KEY (`idFactura`)
  REFERENCES `factura` (`idFactura`)
  ON DELETE RESTRICT
  ON UPDATE CASCADE,
ADD CONSTRAINT `FK_REL_PRO_DET`
  FOREIGN KEY (`idProducto`)
  REFERENCES `producto` (`idProducto`)
  ON DELETE RESTRICT
  ON UPDATE CASCADE;
  
ALTER TABLE `empleado` 
ADD INDEX `FK_REL_DEP_EMP_idx` (`idDepartamento` ASC) VISIBLE;
;
ALTER TABLE `empleado` 
ADD CONSTRAINT `FK_REL_DEP_EMP`
  FOREIGN KEY (`idDepartamento`)
  REFERENCES `departamento` (`idDepartamento`)
  ON DELETE RESTRICT
  ON UPDATE CASCADE;
