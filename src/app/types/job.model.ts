/**
 * =============================================================================
 * @brief data model for a professional job role
 * =============================================================================
 */

export interface Job {
    role: string;
    company: string;
    period: Date[];
    description: string;
}
