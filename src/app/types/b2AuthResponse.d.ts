/**
 * =============================================================================
 * @description Custom type to represent B2 auth responses from Basil
 * =============================================================================
 */

export type B2AuthResponse = {
	apiUrl: string,
	authorizationToken: string
}

export type B2AuthErrorResponse = {
	status: number,
	code: string,
	message: string
}
