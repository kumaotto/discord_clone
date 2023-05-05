export interface InitialUserState {
  user: null | {
    uid: string;
    image: string;
    email: string;
    displayName: string;
  };
}

export interface InitialChannelState {
  channelId: string | null;
  channelName: string | null;
}