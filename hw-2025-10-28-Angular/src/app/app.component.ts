import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Task 1 */
  mainQuote: string = 'Patience is a key element of success';

  /* Task 2 */
  quotes: string[] = [
    'If you think your teacher is tough, wait till you get a boss.',
    'Life is not fair — get used to it!',
    "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    'Be nice to nerds.'
  ];

  /* Task 3 */
  bio: string = `William Henry Gates III is an American entrepreneur, programmer, and philanthropist.
  He is the co-founder of Microsoft and one of the most influential people in the IT world.`;

  imageUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg';

  /* Task 4 */
  links = [
    { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Bill_Gates' },
    { name: 'Gates Foundation', url: 'https://www.gatesfoundation.org/' },
    { name: 'Gates Notes', url: 'https://www.gatesnotes.com/' },
    { name: 'Twitter', url: 'https://twitter.com/billgates' }
  ];
}
