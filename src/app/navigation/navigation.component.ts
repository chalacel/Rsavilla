import { Component, ViewChild } from '@angular/core';
import { ScrollPanel } from 'primeng/scrollpanel';
import { Subject, combineLatest, fromEvent, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  hideHeader: boolean = false;
  scrolled: boolean = false;
  onDestroy$: Subject<void> = new Subject();

  // Obtiene la referencia al scroll panel
  @ViewChild('scrollPanel') scrollPanel?: ScrollPanel;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    // Emite un evento para eliminar las subscripciones activas
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngAfterViewInit() {
    if(this.scrollPanel) {
      // Toma la referencia del elemento que renderiza el contenido dentro del scroll panel de primeng
      const content: HTMLDivElement = this.scrollPanel.el.nativeElement.getElementsByClassName('p-scrollpanel-content')[0];

      // Crea un observable que escucha al evento de scroll en el elemento
      // Y emite true si la posicion del scroll es de 300 pixeles o mas
      const isPanelScrolled = fromEvent(content, 'scroll')
      .pipe(map((event: any) => event.target.scrollTop > 300));

      // Crea un observable que escucha a la posicion actual del mouse
      // Y emite true si esta a 80 pixeles de la parte superior de la pantalla
      const isMouseCloseToTop = fromEvent(window, 'mousemove')
      .pipe(map((event: any) => event.clientY < 80));

      // Combina observables
      combineLatest([isMouseCloseToTop, isPanelScrolled])
      .pipe(takeUntil(this.onDestroy$)) // Suscribirse hasta que el evento se destruya
      .subscribe(([isMouseCloseToTop, isScrolled]) => {
        this.scrolled = isScrolled;
        this.hideHeader = !isMouseCloseToTop && isScrolled;
      })
    }
  }
}
