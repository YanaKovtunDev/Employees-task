export interface IManager {
  id: string;
  firstName: string;
  lastName: string;
  archivedAt: string | null;
  email: string;
  phone: string;
  position: string;
  avatar: IAvatar | null;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  phone: string;
  roleId: number;
  managerId: string | null;
  address: string | null;
  postalCode?: string | null;
  city: string | null;
  country: string | null;
  subDepartment: ISubDepartment | null;
  manager: IManager | null;
  avatar: IAvatar | null;
  department: IDepartment | null;
  group: string | null;
  division: IDivision | null;
}

export interface IAvatar {
  link: string;
}

export interface ISubDepartment {
  id: string;
  title: string;
}

export interface IDepartment {
  id: string;
  title: string;
  managerId: string;
}

export interface IDivision {
  id: string;
  title: string;
  managerId: string;
}

export interface ITimesheet {
  id: string;
  assessment: number;
  breakMinutes: number;
  minutes: number;
  startTime: string;
  endTime: string;
  note: string | null;
  status: string;
  locationChecked: boolean;
  approvalPersonId: string | null;
  userId: string;
  companyId: string;
}
