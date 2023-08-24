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
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Supplier'],
  tenantName: 'Organization',
  applicationName: 'Brew Culture',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
