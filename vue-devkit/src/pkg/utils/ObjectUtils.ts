
export const deepMerge = <T extends Record<string, any>>(target: T, source?: Partial<T>): T => {
	if (!source) return target
	const result = { ...target }; // Start with a shallow copy of the target

	for (const key in source) {
		if (source.hasOwnProperty(key)) {
			const targetValue = target[key];
			const sourceValue = source[key];

			if (
				typeof targetValue === 'object' &&
				targetValue !== null &&
				typeof sourceValue === 'object' &&
				sourceValue !== null &&
				!Array.isArray(targetValue) &&
				!Array.isArray(sourceValue)
			) {
				// Recursively merge nested objects
				result[key] = deepMerge(targetValue, sourceValue);
			} else {
				// Override with source value
				result[key] = sourceValue as T[Extract<keyof T, string>];
			}
		}
	}

	return result;
}
