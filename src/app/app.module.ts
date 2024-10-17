import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {UserFormComponent} from './user/user-form/user-form.component';
import {UserModule} from "./user/user.module";
import {UserListComponent} from "./user/user-list/user-list.component";
import {LayoutComponent} from './layout/layout.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {FooterComponent} from './footer/footer.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {SkillComponent} from "./user/user-form/skill/skill.component";
import {LanguageComponent} from "./user/user-form/language/language.component";
import {ProfessionalComponent} from "./user/user-form/professional/professional.component";
import {MarriageComponent} from "./user/user-form/marriage/marriage.component";
import {UserTabComponent} from "./user/user-tab/user-tab.component";
import {LoadingComponent} from "./share/loading/loading.component";

@NgModule({
    declarations: [
        AppComponent,
        UserFormComponent,
        LayoutComponent,
        TopMenuComponent,
        FooterComponent,
        SkillComponent,
        LanguageComponent,
        ProfessionalComponent,
        MarriageComponent,
        UserTabComponent,
        LoadingComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        UserModule,
        UserListComponent,
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
