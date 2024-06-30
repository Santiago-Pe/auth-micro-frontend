export function combineClasses(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function customGet<T>(obj: any, path: string | string[], defaultValue?: T): T | undefined {
  // Convert path to array if it's not already
  const paths = Array.isArray(path) ? path : path.split('.').filter(Boolean);
  
  // Use reduce to traverse nested objects
  return paths.reduce((acc, key) => (acc && acc[key] !== 'undefined') ? acc[key] : defaultValue, obj);
}