//https://blog.angular-university.io/angular-2-application-architecture-building-applications-using-rxjs-and-functional-reactive-programming-vs-redux/
//https://github.com/jhades/angular2-rxjs-single-atom-example/tree/master/src
//https://github.com/facebook/flux/blob/master/examples/flux-todomvc/src/data/TodoStore.js

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