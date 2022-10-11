import React from 'react';

const Blogs = () => {
    return (
        <div className='m-4 lg:m-12'>
            <div className='p-4 lg:p-8 my-12 border-2 rounded-md'>
                <p className='text-3xl font-medium mb-6'>
                    What is the purpose react router?
                </p>
                <p className='text-xl'>
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.<br/>
                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                </p>
            </div>
            <div className='p-4 lg:p-8 my-12 border-2 rounded-md'>
                <p className='text-3xl font-medium mb-6'>
                    How does context api works?
                </p>
                <p className='text-xl'>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.<br/>
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level.<br/>
                    In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                </p>
            </div>
            <div className='p-4 lg:p-8 my-12 border-2 rounded-md'>
                <p className='text-3xl font-medium mb-6'>
                    What is useRef()?
                </p>
                <p className='text-xl'>
                    Essentially, useRef is like a “box” that can hold a mutable value in its .current property.<br/>

                    You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with {`<div ref={myRef} />`}, React will set its .current property to the corresponding DOM node whenever that node changes.<br/>

                    However, useRef() is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes.<br/>

                    This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a {`{current: ...}`}  object yourself is that useRef will give you the same ref object on every render.<br/>

                    Keep in mind that useRef doesn't notify you when its content changes. Mutating the .current property doesn't cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.<br/>
                </p>
            </div>
        </div>
    );
};

export default Blogs;