import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { HeroComponent } from './hero/hero.component';
import { PostComponent } from './post/post.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [BlogComponent, HeroComponent, PostComponent, SidebarComponent],
  imports: [CommonModule],
  exports: [BlogComponent],
})
export class BlogModule {}
