import {
  Component,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ViewContainerRef,
} from '@angular/core';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/h5/gridstack-dd-native';
import { Widget1Component } from './widget1/widget1.component';
import { Widget2Component } from './widget2/widget2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  grid: any;

  constructor(
    private vcRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.grid = GridStack.init();
  }

  getRootNodeFromParsedComponent(component: any) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);
    let ref = this.vcRef?.createComponent(componentFactory);

    const hostView = <EmbeddedViewRef<any>>ref?.hostView;
    return hostView.rootNodes[0];
  }

  makeWidget(type: string) {
    console.log(type);
    if (type == 'widget1') {
      this.grid.el.appendChild(
        this.getRootNodeFromParsedComponent(Widget1Component)
      );
      this.grid.makeWidget('#widget1');
    } else {
      this.grid.el.appendChild(
        this.getRootNodeFromParsedComponent(Widget2Component)
      );
      this.grid.makeWidget('#widget2');
    }
  }
}
