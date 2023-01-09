import React from "react";
import  ReactDOM  from "react-dom/client";
import reactLogo from './Assets/Images/reactLogo.svg';
import searchIcon from './Assets/Images/searchIcon.svg';
import userIcon from './Assets/Images/userIcon.svg';

//Q1.- Create a nested header element using React.createElement(h1,h2,h3 inside a div with class "title")
// const heading1 = React.createElement(
//     "h1",
//     {
//         id:"heading1",
//         hello:"world"
//     },
//     "Heading 1"
//     );

// const heading2= React.createElement(
//     "h2",
//     {
//         id:"heading2",
//     },
//     "Heading 2"
// );
// const heading3=React.createElement(
//     "h3",
//     {
//       id:"heading3"
//     },
//     "Heading 3"
// );

// const container = React.createElement(
//     "div",
//     {
//         id:"container",
//         class:"title",
//     },
//     [heading1,heading2,heading3]
// );


//Q2. Create the same element using JSX
// const container=(
//     <div id="container"className="title">
//        <h1>Hello h1</h1>
//        <h2>Hello h2</h2>
//        <h3>Hello h3</h3>
//     </div>
// );

// Q3. Create a functional component for the same

// const FunctionalComp=()=>(
//    <div id="container" className="title">
//     <  />
//       <h1>I am h1 </h1>
//       <h2>I am h2 </h2>
//       <h3>I am h3 </h3>
//    </div>
// );

// Q4. Pass attributes into the tag in JSX
 
// const heading1 = <h1>I am h1 </h1>
// const FunctionalComp=()=>(
//     <div id="container" className="title">
//        {heading1}
//        <h2>I am h2 </h2>
//        <h3>I am h3 </h3>
//     </div>
//  );

// Q5. Composition of a component inside another

// const Heading1=()=>(
//      <h1>I am h1</h1>
// );

// const MainComp=()=>(
//   <div id="container" className="title">
//     <Heading1/>
//      <h2>I am h2</h2>
//      <h3>I am h3</h3>
//   </div>
// );

// Q6.Create a header component from scratch using functional components with JSX
const HeaderComponent = () => {
    return (
        <div className='header'>
            <img src={reactLogo}
                alt="logo"
                className='reactLogoStyle'
                style={{ height: '50px', width: '50px' }} />
            <form>
                <input type="text" placeholder="Search.." name="search" className='searchIconStyle' />
                <button type="submit"
                    style={{
                        height: '37px',
                        width: '35px',
                        borderRadius: '4px',
                        border: 'none'
                    }}>
                    <img src={searchIcon}
                        alt="search"
                        className='search'
                        style={{ height: '12px', width: '12px' }} />
                </button>
            </form>
            <img src={userIcon}
                alt="user"
                className='userIconStyle'
                style={{ height: '50px', width: '50px' }} />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);