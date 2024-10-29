/*const student = {
        fullName: "Mukesh",
        age:  22,
        cgpa : 8.9,
        isPass: true,

}
student ["name"] = "kumar";
console.log(student["name"]);*/

// Define the fruit to check
/*let expr = "Apples";

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");
*/
// practice
let score = 33; // Corrected from 'scroe' to 'score'
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
} else {
    grade = "Invalid score"; // Handle invalid scores
}

console.log("According to your score, your grade was " + grade); // Corrected typo in 'garde'


        
        

