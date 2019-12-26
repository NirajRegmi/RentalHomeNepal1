import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { messagePage } from './message.page';

describe( 'messagePage', () => {
  let component: messagePage;
  let fixture: ComponentFixture<messagePage>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [messagePage],
      imports: [IonicModule.forRoot()]
    } ).compileComponents();

    fixture = TestBed.createComponent( messagePage );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } ) );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
