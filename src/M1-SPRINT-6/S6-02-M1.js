let departmentList = [
  {
    departmentName: "Financial",
    employees: [
      {
        name: "Rose",
        age: 26,
        responsibility: "Financial director",
        salary: 5600,
      },
      {
        name: "Stevem",
        age: 32,
        responsibility: "Financial manager",
        salary: 4200,
      },
      {
        name: "Beca",
        age: 26,
        responsibility: "Financial analyst",
        salary: 2800,
      },
    ],
    working: true,
  },
  {
    departmentName: "Expedition",
    employees: [
      {
        name: "Rooper",
        age: 35,
        responsibility: "Expedition director",
        salary: 5600,
      },
      {
        name: "Maggie",
        age: 22,
        responsibility: "Expedition manager",
        salary: 4200,
      },
      {
        name: "Thompson",
        age: 41,
        responsibility: "Expedition analyst",
        salary: 2800,
      },
    ],
    working: true,
  },
  {
    departmentName: "Capitation",
    employees: [
      {
        name: "Saory",
        age: 35,
        responsibility: "Capitation director",
        salary: 5600,
      },
      {
        name: "Silvia",
        age: 22,
        responsibility: "Capitation manager",
        salary: 4200,
      },
      {
        name: "Sonem",
        age: 41,
        responsibility: "Capitation analyst",
        salary: 2800,
      },
      {
        name: "Havi",
        age: 41,
        responsibility: "Trainee Capitation manager",
        salary: 1500,
      },
      {
        name: "Margie",
        age: 25,
        responsibility: "Capitation analyst",
        salary: 2800,
      },
      {
        name: "Victoria",
        age: 18,
        responsibility: "Trainee Capitation analyst",
        salary: 1500,
      },
    ],
    working: true,
  },
];

//1

function howManyDepartments() {
  return departmentList.length;
}
console.log(howManyDepartments());

//2

function changeDepartmentName(currentName, newName) {
  for (let i = 0; i < departmentList.length; i++) {
    if (
      currentName.toUpperCase() ==
      departmentList[i].departmentName.toUpperCase()
    ) {
      departmentList[i].departmentName = newName;
      return departmentList[i];
    }
  }
  return "Department not found";
}
console.log(changeDepartmentName("Capitation", "New Capitation"));

//3

function giveTheDepartmentABreak(object) {
  for (let i = 0; i < object.length; i++) {
    object[i].working = !object[i].working;
  }
  return object;
}
console.log(giveTheDepartmentABreak(departmentList));

//4

function howManyEmployeesInDepartment(dpName) {
  for (let i = 0; i < departmentList.length; i++) {
    if (
      dpName.toUpperCase() == departmentList[i].departmentName.toUpperCase()
    ) {
      return departmentList[i].employees.length;
    }
  }
  return "Department not found";
}
console.log(howManyEmployeesInDepartment("Expedition"));

//5

function insertNewEmployeeInDepartment(dpName, object) {
  for (let i = 0; i < departmentList.length; i++) {
    if (
      dpName.toUpperCase() == departmentList[i].departmentName.toUpperCase()
    ) {
      departmentList[i].employees.push(object);
      return departmentList[i];
    }
  }
  return "Department not found";
}
console.log(
  insertNewEmployeeInDepartment("Expedition", {
    name: "Fay",
    age: 30,
    responsibility: "Ruler of the free world",
    salary: 100000,
  })
);
