/**
 * =============================================================================
 * @brief data model for a professional job role
 * =============================================================================
 */

export interface Job {
    role: string;
    company: string;
    startDate: Date;
    endDate: Date;
    description: string[];
}
