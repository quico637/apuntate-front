const index = require('../src/');

test("Number of students in the first meeting to be equal to two", () => {
    expect(
        index.numberOfStudents()
    ).toBe(2);
})

test("Number of students in waiting list is 3", () => {
    expect(
        index.waitingList().waitingList.length
    ).toBe(3);
})

// a. Un alumno no puede inscribirse cuando un turno se ha llenado
test("First student in wList is moscas", () => {
    expect(
        index.waitingList().waitingList[0].name
    ).toBe("moscas");
})

// b. Un alumno no puede estar en lista de espera si hay hueco en el turno.
test("Second student inscribed is Albita Martinez ", () => {
    expect(
        index.waitingList().students[1].name
    ).toBe("Albita Martinez");
})

// c. Un alumno no puede estar al mismo tiempo en la lista de espera e inscrito en una misma reunión.
test("Student can't be inscribed and in a waitingList", () => {
    expect(() => {
        index.bothLists()
    }).toThrow('The student has already signed up for one turn!');
})

// d.  Un alumno puede cancelar la inscripción o eliminarse de la lista de espera de una reunión.

test("Student leaves turn ", () => {
    expect(
        index.leaveTurn()[0].name
    ).toBe("Albita Martinez");


    expect(
        index.leaveTurn()[1].name
    ).toBe("moscas");
})

test("Student leaves waiting list for turn ", () => {
    expect(
        index.leaveTurnWaitList()[0].name
    ).toBe("aaaa");
})
