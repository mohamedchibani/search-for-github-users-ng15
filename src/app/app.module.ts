import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { TodosModule } from './todos/todos.module';
import { DevelopersModule } from './developers/developers.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, BlogModule, TodosModule, DevelopersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
