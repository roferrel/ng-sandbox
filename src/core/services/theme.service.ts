import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private renderer: Renderer2;
  private themeClass: string = "";

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setTheme(theme: string) {
    if (this.themeClass) {
      this.renderer.removeClass(document.body, this.themeClass);
    }
    this.themeClass = `${theme}-theme`;
    this.renderer.addClass(document.body, this.themeClass);
  }

  initializeTheme() {
    this.setTheme("light");
  }
}
