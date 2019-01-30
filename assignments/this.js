/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global   - context Window (not used just a heads up)
* 2. Implicit - bound to object (left of the . automatic)
* 3. New      - When ever a constructor is used (use the new statement )
* 4. Explicit - When using .call and .apply or .bind 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2
// const bubble =  {
//     type: "Large",
//     color: "irredecent",
//     blower: "Fred"

// };



// code example for Implicit Binding

// Principle 3
const bubbleBlower =  {
    name: function(name) {
        console.log(`A ${this.size} ${this.color} Bubble was blown by ${name}`)
    },
    size: "Large",
    color: "Green"
};
bubbleBlower.name('Nancy');
// code example for New Binding

// Principle 4

// code example for Explicit Binding