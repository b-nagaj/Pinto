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
            timestamp: '2026-11-16T12:24:57',
            timezone: 'America/Denver - UTC-7',
            title: 'Three Non-Profit Organizations to Consider Donating to This Christmas Season',
            content: "It's that time of year again folks... you've broke out your winter coat, it's pitch-black when you get home from work, and you wish you were a bear instead of a human so you could hibernate until May.\n\nIt's also the time of year where people/animals are at their most vulnerable. Kindly consider donating to these non-profit organizations\n- [Santuary for Families](https://secure2.convio.net/sffny/site/Donation2;jsessionid=00000000.s60aloc02usr0805?mfc_pref=T&idb=688552698&3561.donation=form1&df_id=3561&NONCE_TOKEN=6F186C17785D3637503298B0C0DAFE77&s_subsrc=donate-redirect&s_src=26AA&mfc_pref=T) Help fund crisis shelters and legal protections for victims of domestic violence\n\n- [American Greyhound](https://americangreyhound.org/donate-to-american-greyhound/) Help retired racing greyhounds, spanish galgos, and lurchers find a loving, forever home\n\n- [Free Software Foundation](https://my.fsf.org/donate) End digital surveilance\n\n--BN"
        },
        {
            timestamp: '2026-11-16T10:51:02',
            timezone: 'America/Denver - UTC-7',
            title: 'Initial Blog Post',
            content: "The dedicated feed for [Bryce's Insider Chronicles](https://brycenagaj.com/blog) has been deployed!\n\n--BN"
        }
    ];

    get sortedPosts(): Post[] {
        return [...this.rawPosts].sort(
            (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
    }
}
