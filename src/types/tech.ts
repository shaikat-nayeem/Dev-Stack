export type Category = 'Frontend' | 'Backend' | 'Database' | 'Language' | 'Styling' | 'DevOps';

export interface Technology {
  id: string;
  name: string;
  category: Category;
  description: string;
  badge?: string;
  badgeVariant?: string;
  rating: number;
}