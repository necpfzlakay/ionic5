import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TercihlerimPage } from './tercihlerim.page';

describe('TercihlerimPage', () => {
  let component: TercihlerimPage;
  let fixture: ComponentFixture<TercihlerimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercihlerimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TercihlerimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
