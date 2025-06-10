import mysql from "mysql2/promise";

    const db = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Ankitkum@123",
        database: ""
    });
    console.log("MySQL connected !!..");
    
await db.execute(`create database mysql_db`);
console.log( await db.execute(`show databases`));

await db.execute(`
    CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE
    );
    `);
    