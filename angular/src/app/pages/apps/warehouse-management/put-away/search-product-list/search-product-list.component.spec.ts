import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchProductListComponent } from './search-product-list.component';

describe('SearchProductListComponent', () => {
  let component: SearchProductListComponent;
  let fixture: ComponentFixture<SearchProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
