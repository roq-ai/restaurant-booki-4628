interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Chef', 'Waiter'],
  tenantName: 'Organization',
  applicationName: 'Restaurant booking engine v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
