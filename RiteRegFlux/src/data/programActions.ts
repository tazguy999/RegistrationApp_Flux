//https://blog.angular-university.io/angular-2-application-architecture-building-applications-using-rxjs-and-functional-reactive-programming-vs-redux/

import { Program } from './program';

export class AddProgramAction {
    constructor(public newProgram: Program) {

    }
}

export class UpdateProgramAction {
    constructor(public program: Program) {

    }
}

export class DeleteProgramAction {
    constructor(public program: Program) {

    }
}