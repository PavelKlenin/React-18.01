import React from "react";

class Developer extends React.Component{
    constructor(name, dateOfBirth, salary, department) {
        super();
        this.name = name;
        this.dateOfBirth = new Date(Date.parse(dateOfBirth));
        this.age = Math.floor((new Date() - this.dateOfBirth) / (24 * 3600 * 365.25 * 1000));
        this.salary = salary;
        this.department = department;

    }

    displayInfo() {
        return JSON.stringify(this);
    }
}



export default Developer;