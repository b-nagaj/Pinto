/**
 * =============================================================================
 * @description: Logic for the `app-blog-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { BlogPost } from "../../components/blog-post/blog-post";
import { Post } from "../../types/blog-post.model";

@Component({
    selector: "app-blog-page",
    standalone: true,
    imports: [BlogPost],
    templateUrl: "./blog-page.html",
    styleUrl: "./blog-page.scss",
})
export class BlogPage {
    private readonly rawPosts: Post[] = [
        {
            timestamp: '2026-10-16T10:51:02',
            timezone: 'America/Denver - UTC-7',
            title: 'Initial Blog Post',
            content: "The dedicated feed for Bryce's Insider Chronicles has been deployed!\n\n--BN"
        }
    ];

    get sortedPosts(): Post[] {
        return [...this.rawPosts].sort(
            (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
    }
}
