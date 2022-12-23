export const post1008 = `
<article>
<pre><code data-language-javascript>
function findClosestValue(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Initialize variables to keep track of the closest value and its index
  let closestValue = arr[0];
  let closestIndex = 0;

  // Loop through the array and update the closest value and index
  // if a value closer to the target is found
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - target) < Math.abs(closestValue - target)) {
      closestValue = arr[i];
      closestIndex = i;
    }
  }

  return {
    closestValue: closestValue,
    closestIndex: closestIndex
  };
}

// Example usage
let arr = [1, 5, 2, 8, 9, 3];
let target = 7;
let closest = findClosestValue(arr, target);
console.log(closest.closestValue); // Output: 8
console.log(closest.closestIndex); // Output: 3
</code></pre>
<p>In this program, the findClosestValue() function takes in an array of values and a target value, and returns an object with two properties: closestValue and closestIndex. The closestValue property contains the value in the array that is closest to the target value, and the closestIndex property contains the index of that value in the array.</p>
<p>The function first sorts the array in ascending order using the sort() method. It then initializes the closestValue and closestIndex variables to the first value and index in the array, respectively.</p>
<p>Next, the function loops through the array and uses the Math.abs() method to find the absolute difference between each value and the target value. If the absolute difference of a value is less than the absolute difference of the current closestValue, the closestValue and closestIndex variables are updated to the new value and its index.</p>
<p>Once the loop has finished, the function returns an object with the closestValue and closestIndex properties. This object can then be accessed in the caller to retrieve the closest value and its index.</p>
</article>
`;
