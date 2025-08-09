export interface SubItem {
  label: string;
  path?: string;
}

export interface LinkItem {
  label: string;
  path?: string;
  subItems?: SubItem[];
}