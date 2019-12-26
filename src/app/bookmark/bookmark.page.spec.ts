import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { bookmarkPage } from './bookmark.page';

describe( 'bookmarkPage', () => {
  let component: bookmarkPage;
  let fixture: ComponentFixture<bookmarkPage>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [bookmarkPage],
      imports: [IonicModule.forRoot()]
    } ).compileComponents();

    fixture = TestBed.createComponent( bookmarkPage );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } ) );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
