//let the location in a array.make sure the array is not alphabatical order

let places : string[] = ['italy','germany','agra','karachi','nagrafall'];

//print your array in its original order.

console.log( 'original' + places);

//print array in alphabetical order without modifying the actual list.

console.log( 'copy' + [...places].sort());

//show that your array is still in its original order by printing it.

console.log('original' + places);

//print array in reverse alphabetical order without changing the order of the original list.

console.log('copy' + [...places].sort().reverse());

//show that your array is still in its original order by printing again.

console.log( 'original' + places);

//reverse the order of your list.print the array to show that its order has changed.

console.log('original' +   places.reverse());

// revers the order of your list again.print the list to show its back to its original order.


console.log( 'original' +  places.reverse());

//sort your arry so its stored in alphabatical order.print the array to show that its order has beenchanged.its order has changed.


console.log( 'original' +  places.sort());

//revers your array its stored in a
console.log( 'original' + places.sort().reverse());