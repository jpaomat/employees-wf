CREATE DATABASE apiemployees;
USE apiemployees;
CREATE TABLE employees(
    id SERIAL PRIMARY KEY NOT NULL,
    idEmployee TEXT NOT NULL,
    fullname VARCHAR(100) NOT NULL,
    occupation TEXT NOT NULL,
    idBoss TEXT NOT NULL
);
-- ALTER TABLE employees DROP COLUMN boss;
-- ALTER TABLE employees CHANGE boss idBoss;
-- ALTER TABLE employees ADD boss TEXT;
-- ALTER TABLE nombre_tabla RENAME nombre_nuevo_tabla;
-- DELETE FROM employees WHERE id=1;
-- UPDATE books SET title=$1 WHERE section=$2;
-- INSERT INTO books(section, title, autor) VALUES($1, $2, $3);
-- SELECT * FROM books;
-- INSERT INTO employees(idEmployee, fullname, occupation, idBoss) VALUES
-- ('1234', 'Carlos Medina', 'lider recursos humanos', '2345');