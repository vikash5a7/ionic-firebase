import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewGagPage } from './new-gag.page';

describe('NewGagPage', () => {
  let component: NewGagPage;
  let fixture: ComponentFixture<NewGagPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGagPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewGagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
