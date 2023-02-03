import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { SnippetsComponent } from "./components/snippets/snippets.component";

const routes: Routes = [];

const RoutesApp: Routes = [
  { path:'', component: SnippetsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(RoutesApp)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
