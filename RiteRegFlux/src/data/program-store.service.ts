import { Injectable, Inject } from '@angular/core';
import { dispatcher, state } from './programDispatcher';
import { Observer } from "rxjs";
import { Observable } from "rxjs";
import { ProgramsService } from './programs.service';
import { AddProgramAction, UpdateProgramAction, DeleteProgramAction } from "./programActions";
import { Action } from "./programActionTypes";
import { ApplicationState } from './state/application-state';

@Injectable({
  providedIn: 'root'
})
export class ProgramStoreService {

  constructor(private programsService: ProgramsService,
    @Inject(dispatcher) private dispatcher: Observer<Action>,
    @Inject(state) private state: Observable<ApplicationState>
  ) { }

}
