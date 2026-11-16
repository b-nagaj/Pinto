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
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { marked, Renderer } from 'marked';

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

  @ViewChild('contentContainer') contentContainer?: ElementRef<HTMLDivElement>;

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly sanitizer = inject(DomSanitizer);

  public readonly defaultTimezone = 'America/Denver - UTC-7';
  public isExpanded = false;
  public isOverflowing = false;
  public renderedContent: SafeHtml = '';

  private readonly renderer = new Renderer();

  constructor() {
    this.renderer.link = ({ href, title, text }) => {
      const titleAttr = title ? ` title="${title}"` : '';
      return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
    };
  }

  public ngAfterViewInit(): void {
    this.checkOverflow();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['post']) {
      this.renderedContent = this.parseMarkdown(this.post.content);

      if (!changes['post'].firstChange) {
        this.isExpanded = false;
        // Wait a tick for [innerHTML] to render before measuring height
        setTimeout(() => this.checkOverflow());
      }
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

  private parseMarkdown(content: string): SafeHtml {
    const rawHtml = marked.parse(content, {
      breaks: true,
      async: false,
      renderer: this.renderer
    }) as string;
    return this.sanitizer.bypassSecurityTrustHtml(rawHtml);
  }

  private checkOverflow(): void {
    const el = this.contentContainer?.nativeElement;
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
