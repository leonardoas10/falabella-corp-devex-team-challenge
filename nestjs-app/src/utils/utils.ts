export function generateSlug(input: string): string {
  return input
    .trim() // Remove leading and trailing whitespace
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace whitespace with '-'
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except '-'
    .replace(/-+/g, '-') // Replace multiple '-' with a single '-'
    .substring(0, 50); // Limit the length to 50 characters
}
