//////////////////////### 1 ###////////////////////////////////////
//A JavaScript program is given that calculates and displays information about an employee's salary including a bonus.
//You need to perform full typing of JavaScript code on TypeScript, ensuring that there are no errors and correct work with input data.

// rewrite this code in TypeScript

const employee = {
  name: "Alex Brown",
  profession: "doctor",
  worworkingHoursPerDay: 10,
};

const premiumData = {
  isPremium: true,
  premium: 1000,
};

const payPerHour = 32;
const worworkingDays = 14;

const experienceСoefficients = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
  employeeData,
  premiumData,
  payPerHour,
  worworkingDays,
  experienceСoefficients
) => {
  let salary;
  if (premiumData.isPremium) {
    salary =
      employeeData.worworkingHoursPerDay *
        payPerHour *
        worworkingDays *
        experienceСoefficients +
      premiumData.premium;
  } else {
    salary =
      employeeData.worworkingHoursPerDay *
      payPerHour *
      worworkingDays *
      experienceСoefficients;
  }
  return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
};

const salaryInfo = getSalaryInfo(
  employee,
  premiumData,
  payPerHour,
  worworkingDays,
  experienceСoefficients[2]
);

//TypeScript
type Employee = {
  name: string,
  profession: string,
  workingHoursPerDay: number,
};

type PremiumData = {
  isPremium: boolean,
  premium: number,
};

const employee: Employee = {
  name: "Alex Brown",
  profession: "doctor",
  workingHoursPerDay: 10,
};

const premiumData: PremiumData = {
  isPremium: true,
  premium: 1000,
};

const payPerHour: number = 32;
const workingDays: number = 14;

const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
  employeeData: Employee,
  premiumData: PremiumData,
  payPerHour: number,
  workingDays: number,
  experienceCoefficient: number
): string => {
  let salary: number;
  if (premiumData.isPremium) {
    salary =
      employeeData.workingHoursPerDay *
        payPerHour *
        workingDays *
        experienceCoefficient +
      premiumData.premium;
  } else {
    salary =
      employeeData.workingHoursPerDay *
      payPerHour *
      workingDays *
      experienceCoefficient;
  }
  return `${employeeData.profession} ${employeeData.name} has a salary of ${salary}$ this month`;
};

const salaryInfo = getSalaryInfo(
  employee,
  premiumData,
  payPerHour,
  workingDays,
  experienceCoefficients[2]
);

console.log(salaryInfo);
