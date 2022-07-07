import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { TempusDominus, Options } from '@eonasdan/tempus-dominus';
import { ChangeEvent } from '@eonasdan/tempus-dominus/types/utilities/event-types';

@Component({
  selector: 'app-ktdhijri',
  templateUrl: './ktdhijri.component.html',
  styleUrls: ['./ktdhijri.component.css']
})
export class KtdhijriComponent implements OnInit, OnDestroy {

  @ViewChild('pickerInput', { static: false }) pickerInput: ElementRef<HTMLInputElement>;
  @Input() dtype: string;
  @Input() readonly: Boolean;
  @Output() hdvalue = new EventEmitter<string>;
  @Output() gdvalue = new EventEmitter<{ date: Date , oldDate: Date}>;
  picker: TempusDominus;

  td_settings: Options = {
    localization: {
      today: "اليوم",
      clear: "مسح",
      close: "إغلاق",
      selectMonth: "اختر الشهر",
      previousMonth: "الشهر السابق",
      nextMonth: "الشهر التالي",
      selectYear: "اختر السنة",
      previousYear: "العام السابق",
      nextYear: "العام التالي",
      selectDecade: "اختر العقد",
      previousDecade: "العقد السابق",
      nextDecade: "العقد التالي",
      previousCentury: "القرن السابق",
      nextCentury: "القرن التالي",
      pickHour: "اختر الساعة",
      incrementHour: "أضف ساعة",
      decrementHour: "أنقص ساعة",
      pickMinute: "اختر الدقيقة",
      incrementMinute: "أضف دقيقة",
      decrementMinute: "أنقص دقيقة",
      pickSecond: "اختر الثانية",
      incrementSecond: "أضف ثانية",
      decrementSecond: "أنقص ثانية",
      toggleMeridiem: "تبديل الفترة",
      selectTime: "اخر الوقت",
      selectDate: "اختر التاريخ",
      dayViewHeaderFormat: { month: "long", year: "2-digit" },
      locale: "ar-SA-islamic-umalqura", // BCP 47  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
      startOfTheWeek: 0,
    },
    display: {
      components: {
        clock: false,
      }
    }
  };

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,) { }

  ngOnInit(): void {
    let enableClock = this.dtype === "datetime" ? true : false;
    let td_components = { clock: enableClock };
    this.td_settings['display'] = {
      components: td_components
    }
  }

  private theInputListener: () => void;

  ngAfterViewInit(): void {
    this.picker = new TempusDominus(this.pickerInput.nativeElement, this.td_settings);
    let theInputListener = this.renderer.listen(this.pickerInput.nativeElement, 'change', (event) => {
      const { detail, srcElement } = event;
      this.tdChanged(detail, srcElement.value);
    });
  }

  public tdChanged(tdchange: ChangeEvent, tdValue: string) {
    const { date, oldDate } = tdchange;
    let tdDatetime = date?.getTime() || 0;
    let tdOldDatetime = date?.getTime() || 0;
    let gdValue = new Date(tdDatetime);
    let gdOldValue = new Date(tdOldDatetime);
    this.hdvalue.emit(tdValue);
    this.gdvalue.emit({ date: gdValue, oldDate: gdOldValue });
    console.log("should be emitted");
  }

  ngOnDestroy() {
    this.theInputListener();
  }

}
