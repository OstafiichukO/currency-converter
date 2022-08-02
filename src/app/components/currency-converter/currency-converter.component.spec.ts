import CurrencyConverterComponent from "./currency-converter.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CurrencyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;

   beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})