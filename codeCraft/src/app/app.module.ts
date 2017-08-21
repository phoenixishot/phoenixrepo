//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

//custom modules

//components
import { AppComponent } from './app.component';
import { FormAppComponent } from './form-app/form-app.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { DynamicSelectBoxFormComponent } from './dynamic-select-box-form/dynamic-select-box-form.component';
import { SearchReactiveFormComponent } from './search-reactive-form/search-reactive-form.component';
import { SliderBarComponent } from './slider-bar/slider-bar.component';
import { SliderHolderComponent } from './slider-holder/slider-holder.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { ProfileComponent } from './user/profile/profile.component';


//pipes

//services
import { EventsService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventRouteActivatorService } from './events/shared/event-route-activator.service';
import { EventListResolverService } from './events/shared/events-list-resolver.service';


//routes
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    FormAppComponent,
    AsyncPipeComponent,
    DynamicSelectBoxFormComponent,
    SearchReactiveFormComponent,
      SliderBarComponent,
      SliderHolderComponent,
      EventsListComponent,
      EventThumbnailComponent,
      NavBarComponent,
      EventDetailsComponent,
      CreateEventComponent,
      Error404Component,
      ProfileComponent
  ],
  imports: [
      
      BrowserModule,
      BrowserAnimationsModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
     
  ],
  providers: [
      EventsService,
      ToastrService,
      EventRouteActivatorService,
      {
          provide: 'canDeactivateCreateEvent',
          useValue: checkDirtyState
      },
      EventListResolverService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm("event has not been saved... '/n' are you sure, u want to cancel? ")
    }
    return true;
}
