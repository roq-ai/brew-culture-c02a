const mapping: Record<string, string> = {
  'bean-exchanges': 'bean_exchange',
  events: 'event',
  organizations: 'organization',
  products: 'product',
  tutorials: 'tutorial',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
