import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';
import { CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, RowComponent } from '@coreui/angular';
import { DocsLinkComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-invengo-book',
  standalone: true,
  imports: [],
  templateUrl: './invengo-book.component.html',
  styleUrl: './invengo-book.component.scss'
})
export class InvengoBookComponent implements OnInit {
  public title = 'CoreUI Icons';
  public icons!: [string, string[]][];

  constructor(
    private route: ActivatedRoute, public iconSet: IconSetService
  ) {
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet };
  }

  ngOnInit(): void {
    const path = this.route?.routeConfig?.path;
    let prefix = 'cil';
    if (path === 'coreui-icons') {
      this.title = `${this.title} - Free`;
      prefix = 'cil';
    } else if (path === 'brands') {
      this.title = `${this.title} - Brands`;
      prefix = 'cib';
    } else if (path === 'flags') {
      this.title = `${this.title} - Flags`;
      prefix = 'cif';
    }
    this.icons = this.getIconsView(prefix);
  }

  toKebabCase(str: string) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  }

  getIconsView(prefix: string) {
    return Object.entries(this.iconSet.icons).filter((icon) => {
      return icon[0].startsWith(prefix);
    });
  }
}
