export type CreateSessionDTO = {
  email: string;
  password: string;
};

export type DecodedToken = {
  sub: string;
};
