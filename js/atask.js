//task 14
const prices=[ 1500,1000,20000]
const stats = {
  total: prices.reduce((sum, val) => sum + val, 0),
  average: prices.reduce((sum, val) => sum + val, 0) / prices.length,
  max: Math.max(...prices)
};
console.log("\ntask",stats);
//task 4
const jobs = [
  { title: "Frontend Dev", type: "Full-time", salary: 80000 },
  { title: "Backend Dev", type: "Part-time", salary: 50000 },
  { title: "Designer", type: "Full-time", salary: 60000 }
];
const fullTimeJobs = jobs.filter(job => job.type === "Full-time");
const highSalaryJobs = jobs.filter(job => job.salary > 60000);
console.log("\ntask2","fullTimeJobs",fullTimeJobs);
console.log("highSalaryJobs",highSalaryJobs)