import { Component, ViewChild, AfterViewInit, Renderer2, Input, ElementRef, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as ko from "knockout";
import { Html } from "devexpress-reporting/dx-web-document-viewer";


@Component({
  selector: 'app-monthlyleave',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './monthlyleave.component.html',
  // styleUrls: ['./monthlyleave.component.scss']
})
export class MonthlyleaveComponent implements AfterViewInit {
  @ViewChild('scripts')
  scripts: ElementRef;

  @ViewChild("control")
  control: ElementRef

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {

      const reportUrl = ko["observable"]("MonthlyLeave"),
          container = this.renderer.createElement("div");
      container.innerHTML = Html;
      var host = "http://localhost:57581/";
      this.renderer.appendChild(this.scripts.nativeElement, container);
      ko.applyBindings({
          reportUrl,
          requestOptions: {
              host,
              invokeAction: 'WebDocumentViewer/Invoke'
          }
      }, this.control.nativeElement);
  }

}