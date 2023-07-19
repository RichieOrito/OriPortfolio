// import React from 'react';

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//     }


//     componentDidCatch(error, errorInfo) {
//         //logging the error or perform any other actions here
//         console.error(error, errorInfo);
//     }

//     render(){
//         if(this.state.hasError) {
//             //display a fallback UI or an error message
//             return<h1>Something went wrong.</h1>
//         }

//         // Render the children if there is no error
//         return this.props.children;
//     }

// }export default ErrorBoundary;
