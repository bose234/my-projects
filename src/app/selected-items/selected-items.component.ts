import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.css']
})
export class SelectedItemsComponent implements OnInit, OnDestroy {
  selectedItems: any[] = [];
  role: string = '';
  private sessionTimeout: any;
  userRole: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.role = params['role'];

      if (this.role !== 'admin') {
        // Redirect to unauthorized page or navigate to another component
        this.router.navigate(['/userlogin']);
      }

      // Retrieve selected items from local storage
      const storedItems = localStorage.getItem('selectedItems');
      if (storedItems) {
        this.selectedItems = JSON.parse(storedItems);
      }
    });
  }

  calculateTotal(): number {
    let total = 0;
    for (let i = 0; i < this.selectedItems.length; i++) {
      const item = this.selectedItems[i];
      total += item.rate * item.count;
    }
    return total;
  }

  startsession() {
    const sessionseconds = 50;
    const sessionmilliseconds = sessionseconds * 1000;

    this.sessionTimeout = setTimeout(() => {
      this.logout();
    }, sessionmilliseconds);
  }

  logout() {
    localStorage.removeItem('jwt');
    clearTimeout(this.sessionTimeout);
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    clearTimeout(this.sessionTimeout);
  }
}
