export interface InitialUserState {
  user: null | {
    uid: string;
    image: string;
    email: string;
    displayName: string;
  };
}
