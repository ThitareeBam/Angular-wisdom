// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import {HttpClientModule} from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
// //import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AboutComponent } from './components/about/about.component';
// import { IndexapiComponent } from './components/indexapi/indexapi.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { PostRoutingModule } from './post/post-routing.module';


// @NgModule({
//   declarations: [
//     AppComponent,
//     AboutComponent,
//     IndexapiComponent,
//     ContactComponent,
//     HeaderComponent,
//     FooterComponent,
    
    
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     RouterModule.forRoot([
//       {
//         path: "",
//         component: PostRoutingModule
//       }
//       // {
//       //   path: "contact",
//       //   component: ContactComponent
//       // },
//       // {
//       //   path: "index",
//       //   component: IndexapiComponent
//       // }
//     ])
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './components/header/header.component';

import { PostModule } from './post/post.module';
   
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
