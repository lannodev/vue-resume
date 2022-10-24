export interface Profile {
  name: string;
  job: string;
  avatar: string;
  aboutMe: string;
  socialNetwork: SocialNetwork[];
}
interface SocialNetwork {
  name: string;
  url: string;
}
