
// Part 1: 30%, you must create a repo for part 1, separate from part 2

// Why does React utilize the virtual-dom?
    //The virtual DOM is an in memory representation of the real DOM that is much faster in ReactJS.
    // Since it is only a virtual representation of the DOM everytime the state of our app changes, 
    //rather than the real DOM get updated, the virtual-dom does. This method reduces the cost 
    //for updated the real DOM. The way that react utilizises this is that every bit of user interface
    //is a component and each component will have a state. You have to make sure the DOM matches that state. 
    //In the end it is much more perfomance efficient than just updating the real DOM everytime a change is made. 


// 2a How is data flowed in React? 2b. Why is React architected this way?
    //In react data flows in a one-way data flow that makes it optimally efficient. This means that data
    //has only one way to be transferred to other parts of an app. In react state is passed to view and 
    //child components. When any action is made the view is triggered, actions can also update the state. 
    //Any time the state is changed, it is passed to the view and child components. 
    //There are several advantages to it being architected in this way. You come across less errors 
    //since you have better control over the data being passed. This structure also makes it easier to debug 
    //because you will know what is coming from where. 


// 3. What is the purpose for lifting state up in React? Give an example of this
  //In react every component has it's own state. This can sometimes lead to data being repetitive. 
  //If we lift up state we make the parent components state the singular source of data being passed.
  //We can pass the data of the parents in it's children. Usually you would lift state if the data within 
  //the parent or child components isn't synced up.

  //Example: Lets say we have 3 components for our app. The header, the landing and home.
  //    Header
  //     /   \
  //  Landing  Home 

  //The header is the parent component of landing and home. If there is data in just the landing but home 
  //needs that data too, home wont be able to access that data because a component can only send data to the parent or child. 
  //In order to get access we must lift the state of the landing and home page to the header component

// 4. Why would a startup be interested in applying React-Routing to a project? Explain in detail.
  //React routing is helpful in creating and navigating between different URLS and pages for a web app. 
  //What they do is allow a user to go between components but simultanously preserving the user state. 
  //React might be interesting to a startup because it consumes less time than other frameworks to develop
  //a fully functional full-stack app. 

// 5. Can browsers read JSX? Why?
  //Technically web browsers cannot read JSX directly because it is not "valid javascript." If there are 
  //JSX files, they have to be compiled. The compiler, for example babel, will translate the JSX to javascript 
  //so it can be read. 


// 6. What is the significance of keys in React? 

// 7. What is the difference between Props and State?
  // Props in react are short for properties, which are passed into components (similar to a function call).
  //Components can have default props so that if a prop is null or isnt being passed it can still be set. 
  //Props shouldnt really change as they should be considered immutable. State, like props also hold information
  //about the component but the type of information and how it is handled is much different. 
  //The default for state is that there is none. You would use state when a component needs to track information 
  //between each time it's rendered so it can create, updated and use the state. 

// 8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant. 

// Babel Input: ES2015 arrow function
// [1, 2, 3].map( n => n + 1 )

// Babel Output: ES5 equivalent
// [1,2,3].map(function(n) {
// Return n + 1;
// })

// 9. Given an array of strings, names, return a new array with each name properly capitalized. Must use .map() 
// Show 3 test runs, with at least 2 edge cases. 
// function properNames(names) {

// }

// 10. Given an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
// Show 3 test runs, with at least 2 edge cases. 
// Function smallWordsOnly(arr) {

// } 

