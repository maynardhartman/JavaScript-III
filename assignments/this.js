/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit - appearing on the left side of the 'period' 
* 2. Explicit - using the .apply, .call, or the '...' spread operator
* 3. Bind - saves the button binging for later .bind
* 4. Global - using the 'this' keyword outside of a context will cause it to default to Window
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const hobbit = {
    name: "Samwise",
    food: "taters",
    cook: function () {
        return `${this.name} loves to cook ${this.food}`; 
    }
}
console.log(hobbit.cook());
// Principle 3
//const Barney = new Person();
// code example for New Binding

// const freeHobbit = new hobbit();


// Principle 4
//.apply .call 
// code example for Explicit Binding
hobbit.cook.call('taters');