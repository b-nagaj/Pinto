/**
 * =============================================================================
 * @description: Logic for the `app-blog-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { BlogPost } from "../../components/blog-post/blog-post"

@Component({
	selector: "app-blog-page",
	imports: [BlogPost],
	templateUrl: "./blog-page.html",
	styleUrl: "./blog-page.scss",
})
export class BlogPage {}
