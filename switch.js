// Employee
let employee = {
  firstName: "Will",
  lastName: "Walton",
  startDate: new Date(2024, 5, 13),
  numYearsService: 1,
  isActive: true,
  department: "Engineering",
  title: "Solutions Engineer"
};

switch (employee.department) {
  case 'Engineering':
    console.log('Meet in Building 1');
    break;

    case 'Marketing':
    console.log('Meet in Building 2');
    break;

    case 'HR':
    console.log('Meet in Building 1');
    break;

  default:
    console.log('Meet in Building 3');
    break;
}

switch (employee.department) {
  case 'Engineering':
  case 'HR':
    console.log('Meet in Building 1');
    break;

  case 'Marketing':
    console.log('Meet in Building 2');
    break;

  default:
    console.log('Meet in Building 3');
    break;
}
// when using switch statements be sure you properly use break statements so the code doesn't full through and continue to execute code
// remember to have a default statement if non of the cases fit 
