const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "rickyesc1";
    const employee = new Engineer("ricky", 1, "richi.escamilla@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("ricky", 1, "richi.escamilla@gmail.com", "rickyesc1");
    expect(employee.getRole()).toBe(role);
  });