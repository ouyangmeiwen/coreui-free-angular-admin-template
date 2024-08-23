import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvengoBookComponent } from './invengo-book.component';

describe('InvengoBookComponent', () => {
  let component: InvengoBookComponent;
  let fixture: ComponentFixture<InvengoBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvengoBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvengoBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
