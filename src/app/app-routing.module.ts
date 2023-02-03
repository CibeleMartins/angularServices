import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { SnippetComponent } from "./components/snippet/snippet.component";

const routes: Routes = [];

const RoutesApp: Routes = [
  { path:'', component: SnippetComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(RoutesApp)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
