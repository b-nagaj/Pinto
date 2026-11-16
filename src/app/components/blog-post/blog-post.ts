/**
 * =============================================================================
 * @description: Logic for the `app-blog-post` component
 * =============================================================================
 */

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  inject
} from '@angular/core';
import { DatePipe } from '@angular/common';

import { Post } from '../../types/blog-post.model';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss'
})
export class BlogPost implements AfterViewInit, OnChanges {
  @Input({ required: true }) post!: Post;

  @ViewChild('contentParagraph') contentParagraph?: ElementRef<HTMLParagraphElement>;

  private readonly cdr = inject(ChangeDetectorRef);

  public readonly defaultTimezone = 'America/Denver - UTC-7';
  public isExpanded = false;
  public isOverflowing = false;

  public ngAfterViewInit(): void {
    this.checkOverflow();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['post'] && !changes['post'].firstChange) {
      this.isExpanded = false;
      queueMicrotask(() => this.checkOverflow());
    }
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    if (!this.isExpanded) {
      this.checkOverflow();
    }
  }

  public toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  private checkOverflow(): void {
    const el = this.contentParagraph?.nativeElement;
    if (!el) {
      return;
    }

    const overflowing = el.scrollHeight > el.clientHeight + 1;
    if (this.isOverflowing !== overflowing) {
      this.isOverflowing = overflowing;
      this.cdr.detectChanges();
    }
  }
}
