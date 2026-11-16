/**
 * =============================================================================
 * @brief data model for a new blog post
 * =============================================================================
 */

export interface Post {
    timestamp: string;
    timezone: string;
    title: string;
    content: string;
}
