import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>
            <div>
            <h1 className='my-10 mt-10 text-lg'>1. Difference between SQL and NoSQL?</h1>
            <p>Ans: i.SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format. And NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes.
                ii.SQL database is a language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data.And NOSQL database is a software to retrieve, store and manage scalability of databases.
                Examples of SQL database are, SQL supports databases like MySQL, SQL Server, Oracle, etc.
                Examples of NoSQL database are, Nosql databases are Hbase, MongoDB, Redis, etc.</p>
            </div>
            <div>
                <h2 className='my-10 mt-10 text-lg'>2. What is JWT, and how does it work?</h2>
                <p>Ans: JSON Web Token is an open industry standard used to share information between two entities, usually a client and a server. They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party. For example, when you sign in with Google, Google issues a JWT which contains the following claims / JSON payload:</p>
            </div>
            <div>
                <h2 className='my-10 mt-10 text-lg'>3. What is the difference between javascript and NodeJS?</h2>
                <p>Ans: tJavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.</p>
            </div>
            <div>
                <h2 className='my-10 mt-10 text-lg'>4. How does NodeJS handle multiple requests at the same time?</h2>
                <p>Ans: Node.js can process upwards of multiple requests per second and speed limited only to the speed of your network card. Note that it's multiple requests per second not clients connected simultaneously. It can handle the multiple simultaneous clients without issue</p>
            </div>


        </div>
    );
};

export default Blog;