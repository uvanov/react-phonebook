export interface ContactType {
  id: number;
  name: string;
  status: string;
  avatarUrl: string;
  information: {
    bio: string;
    email: string;
    phone: string;
    social?: {
      facebook?: string;
      pinterest?: string;
      twitter?: string;
      linkedin?: string;
      google?: string;
    }
  }
}
