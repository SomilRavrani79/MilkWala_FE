export interface MenuItem {
  section: string;
  icon: string;
  altText: string;
  label: string;
}

export interface NavItem {
  label: string;
  link?: string;
  action?: () => void;
}

export interface CustomerData {
  name: string;
  phone: string;
  email: string;
  id?: string;
}

export interface DeliveryBoy {
  name: string;
  phone: string;
  email: string;
  id?: string;
}

export interface MenuItem {
  id: number;
  name: string;
  path: string;
}