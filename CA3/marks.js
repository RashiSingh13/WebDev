const marks = [90, 92, 83, 75, 90, 78, 94, 89,73,69];

marks.sort(); // sort the array
console.log(marks); //print the array after sorting

const secondSmallest = marks[1];//prints second smallest element
console.log("Second smallest element:", secondSmallest);

const secondLargest = marks[marks.length - 2];
console.log("Second largest element:", secondLargest);
