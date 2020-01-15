import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { JoinComponent } from "./join/join.component";

const routes = [
  { path: "start", component: StartComponent },
  { path: "join", component: JoinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
