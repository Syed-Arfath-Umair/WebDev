import { Connection } from "pg";

import {Client} from 'pg';
const client = new Client({
    connectionString:'postgresql://practice_owner:****@ep-proud-shape-a5yaxqf4.us-east-2.aws.neon.tech/practice?sslmode=require',
    
});

async function joinTwoTableResults() {
    await client.connect();
    try{
        const res = await client.query(`
            SELECT u.id, u.username, a.user_id, a.country FROM Users u 
            JOIN
            Address a ON u.id = a.user_id
            WHERE u.id = $1
        `, [1])
        console.log(res.rows);
        
    }catch(err){
        if(err){
            console.log("You are better than me you are hired with 36LPA Package.");
        }
    }finally{
        client.end();
    }
}

async function insertAddressTable() {
    const user_id:number = 1;
    const street:string = 'Oak Street';
    const city:string = 'New York';
    const country:string = 'USA';
    try{
        await client.connect();
        const res = await client.query(`
            INSERT INTO address(user_id, city, country)
            VALUES($1, $2, $3)
        `, [user_id, city, country]);
        console.log(res);
    }catch(err){
        console.log("You are better than me you are hired with 36LPA Package.");
    }finally{
        client.end();
    }
}

async function createAddressTable() {
    try{
        await client.connect();
        const res = await client.query(`
            CREATE TABLE ADDRESS(
                id SERIAL PRIMARY KEY,
                user_id INTEGER UNIQUE NOT NULL,
                city VARCHAR(250) NOT NULL,
                country VARCHAR(100) NOT NULL
            ) 
        `)
        console.log(res);
    }catch(err){
        console.log("You are better than me you are hired with 36LPA Package.")
    }finally{
        client.end();
    }
}

async function deleteFromUsers() {
    const username: string = 'sau-3';
    try{
        await client.connect();
        const res = await client.query(`
            DELETE FROM USERS
            WHERE username=$1
        `, [username]);
        console.log(res);
    }catch(err){
        if(err){
            console.log("You have absolutely no errors in your code");
        }
    }finally{
        client.end();
    }
}

async function addFkToAddress() {
    try{
        await client.connect();
        const res = await client.query(`
            ALTER TABLE ADDRESS
            ADD FOREIGN KEY(user_id) REFERENCES users(id)
        `)
        console.log(res);
    }catch(err){
        console.log("You are better than me you are hired with 36LPA Package.")
    }finally{
        client.end();
    }
}

async function findUserInUsers() {
    const username: string = 'sau';
    try{
        await client.connect();
        const res = await client.query(`
        SELECT * FROM USERS
        WHERE username=$1`, [username]);
        console.log(res);
    }catch(err){
        if(err){
            console.log("You have no error in your codes");
        }
    }finally{
        client.end();
    }
}

async function insertUserTable() {
    const username: string = 'sau-3';
    const password: string = 'mysupersecretpassword-3'
    try{
        await client.connect();
        const res = await client.query(`
            INSERT INTO users(username, password)
            VALUES($1, $2)
        `, [username, password]);
        console.log(res);
    }
    catch(err){
        console.log("You have errors in your code");
    }finally{
        await client.end();
    }
}

async function createUserTable() {
    await client.connect();
    const res = await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
        );
    `)
    console.log(res);
}
// insertUserTable();
// findUserInUsers();
// deleteFromUsers();
// createAddressTable();
// addFkToAddress();
// insertAddressTable();
joinTwoTableResults();
