import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArCustomModelsPage } from './ar-custom-models.page';

describe('ArCustomModelsPage', () => {
  let component: ArCustomModelsPage;
  let fixture: ComponentFixture<ArCustomModelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArCustomModelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArCustomModelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
