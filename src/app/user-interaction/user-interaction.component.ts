import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-interaction',
  standalone: true,
  imports: [],
  templateUrl: './user-interaction.component.html',
  styleUrl: './user-interaction.component.css',
})
export class UserInteractionComponent {
  message: string = 'Click the button!';
  hoverText: string = 'Hover over this area'
  clickCount: number = 0;

  onButtonClick(): void{
    this.clickCount++;
    this.message = `Button clicked ${this.clickCount} times!`; //backticks `
  }

  onMouseEnter(): void{
    console.log('Mouse entered the div!');
    this.hoverText = 'Mouse entered the div!';
  }

  onMouseLeave(): void{
    console.log('Hover over this area');
    this.hoverText = 'Hover over this area';
  }


  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Input changed:', target.value);
  }
}
