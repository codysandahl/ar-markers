import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArMultipleMarkersPage } from './ar-multiple-markers.page';

describe('ArMultipleMarkersPage', () => {
  let component: ArMultipleMarkersPage;
  let fixture: ComponentFixture<ArMultipleMarkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArMultipleMarkersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArMultipleMarkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
