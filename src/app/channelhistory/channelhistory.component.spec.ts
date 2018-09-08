import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelhistoryComponent } from './channelhistory.component';

describe('ChannelhistoryComponent', () => {
  let component: ChannelhistoryComponent;
  let fixture: ComponentFixture<ChannelhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
