import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getTaskByTerm } from 'src/app/store/actions/tasks.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  form = new FormGroup({
    searchTerm: new FormControl(''),
  });

  constructor(private store: Store<AppState>){}

  searchForTerm(): void {
    const term = this.form.get('searchTerm')?.value;
    if (term) {
      this.store.dispatch(getTaskByTerm({ term }));
    } else {
      console.log('not found')
    }
    
  }
}
