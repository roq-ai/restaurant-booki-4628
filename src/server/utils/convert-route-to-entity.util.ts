const mapping: Record<string, string> = {
  menus: 'menu',
  organizations: 'organization',
  reservations: 'reservation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
