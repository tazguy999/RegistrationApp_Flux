import { Program } from "../program";
import { List } from "immutable";

export interface ApplicationState{
    programs: List<Program>
}