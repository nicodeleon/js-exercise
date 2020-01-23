const people = [
    {
        name: 'Arisa',
        department: 'BP',
        gender: 'F'
    },
    {
        name: 'Ham',
        department: 'IT',
        gender: 'F'
    },
    {
        name: 'Alice',
        department: 'IT',
        gender: 'F'
    },
    {
        name: 'Anna',
        department: 'DA',
        gender: 'F'
    },
    {
        name: 'Larry',
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Ria',
        department: 'Sales',
        gender: 'F'
    },
    {
        name: 'JD',
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Thor',
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Karl',
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Rachel',
        department: 'Sales',
        gender: 'F'
    }
    ];

function listByGender(gender) {
    var groupedPerson = [];
    for (var index=0; index < people.length; index++) {
        if (people[index].gender == gender) {
            groupedPerson.push(people[index].name);
        }
    }

    return groupedPerson;
}

function groupByDepartment() {
    var groupedPerson = [];
    var allDepartment = [];

    // GET ALL DEPARTMENT FROM PEOPLE
    for (var index=0; index < people.length; index++) {
        if (!allDepartment.includes(people[index].department)) {
            allDepartment.push(people[index].department);
        }
    }

    // PER DEPARTMENT, CHECK EACH PERSON WITH SAME DEPARTMENT AS CURRENT
    for (var dIndex=0; dIndex < allDepartment.length; dIndex++) {
        var allPerson = [];
        var formattedElement = {};
        for (var pIndex=0; pIndex < people.length; pIndex++) {
            if (allDepartment[dIndex] == people[pIndex].department){
                allPerson.push(people[pIndex].name);
            }
        }
        // AFTER ALL PERSON WAS CHECKED, ADD TO groupedPerson
        formattedElement.department = allDepartment[dIndex];
        formattedElement.persons = allPerson;
        groupedPerson.push(formattedElement);
    }

    return groupedPerson;
}

console.log(listByGender('M'));
console.log(listByGender('F'));
console.log(groupByDepartment());