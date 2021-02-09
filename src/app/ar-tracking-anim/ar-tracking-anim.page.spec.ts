import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArTrackingAnimPage } from './ar-tracking-anim.page';

describe('ArTrackingAnimPage', () => {
  let component: ArTrackingAnimPage;
  let fixture: ComponentFixture<ArTrackingAnimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArTrackingAnimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArTrackingAnimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
