import React from "react";

const Blogs = () => {
  return (
    <div className="h-screen flex flex-col items-center mt-5">
      <h3 className="text-center text-2xl text-purple-600 font-serif font-bold my-4">
        Questions and Answers
      </h3>
      <div className="lg:w-1/2">
        <div className=" p-6 mb-6 lg:w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Q.1 Javascript vs Node.js
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
            Javascript : Javascript is a programming language . Specially used
            for websites to add interactivity.It is developed by Brendan Eich
            and first appeared in 1995.Then it could only run in browsers.Every
            browser has a Javascript engine where it runs, like Chrome has v8
            firefox has SpiderMonkey etc.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Node.js : Node js is a Javascript runtime environment.It is
            developed by Ryan Dahi id 2009.He took the chrome v8 engine and
            edited with some c++ code to make Node js. It helps Javascript to
            run outside the browser.With the help of node js, we can run
            javascript in server or our computer
          </p>
        </div>
        <div className=" p-6 mb-6 lg:w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Q.2 When should you use nodejs and when should you use mongodb
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
            Node.js : Node js is a Javascript runtime environment, which helps
            javascript to run outside the browser specially in servers.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
            Mongodb : Mongodb is a cloud based no sql database system , which
            helps to store data for websites or any application .
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Conclusion : Node js and Mongodb are two different technologies Oen
            of then is a javascript runtime environment which can be used to run
            javascript outside the browser specially used on server. On the
            other hand, mongodb is a no sql database, whose job is to store data
            of web application or any in a json formate.
          </p>
        </div>
        <div className=" p-6 mb-6 lg:w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Q.3 Differences between sql and nosql databases.
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
            Sql database : SQL is a short form of Structured Query Language. SQL
            databases use tabular form to store data before the data to be
            stored we need to define a table with every row in a table must have
            the same columns.The language sql helps to find data form the table.
            Sql databses has fast read speed.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            No Sql database : No sql database dose not require language like sql
            . No sql database dose not use tabular form to store data , rather
            it use key value pair like json data formate . No sql databse has
            fast write speed.
          </p>
        </div>
        <div className=" p-6 mb-6 lg:w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Q.4 What is the purpose of jwt and how does it work
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
            JWT : jwt is a short form of json web toke. It is user for secureing
            API's .It is used for share security information between server and
            client it helps to identify user and secure users data by using
            token.It also helps to change server without event logout current
            user.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Who Does It Works : JWT uses a token to identify users . A token has
            three parts separated by dots ( . ) first section is header , second
            is Payload and the third is Signature . a token may looks like this
            xxxx.yyyy.zzzz . Header has two parts one is the type of token which
            is jwt and other is the signing algorithm . Payload contains claim
            which are statement about entity and some additional data. It has
            three types Registered,public and private claims . Finally , in the
            Signature has encoded header encoded payload a secret and header
            algorithm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
