import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddrentPage } from './addrent.page';

describe('AddrentPage', () => {
  let component: AddrentPage;
  let fixture: ComponentFixture<AddrentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddrentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
