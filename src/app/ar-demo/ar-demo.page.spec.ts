import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArDemoPage } from './ar-demo.page';

describe('ArDemoPage', () => {
  let component: ArDemoPage;
  let fixture: ComponentFixture<ArDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArDemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
