import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <section className="h-screen text-black">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl"> Blog page</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Difference between SQL and NoSQL?</summary>
                            <div className="px-4 pb-4">
                                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is JWT, and how does it work?</summary>
                            <div className="px-4 pb-4">
                                <p>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is the difference between javascript and NodeJS?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does NodeJS handle multiple requests at the same time?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;