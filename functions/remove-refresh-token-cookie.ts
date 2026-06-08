import type { Response } from 'express';

const removeRefreshTokenCookie = (res: Response): void => {
  const isProduction = process.env.NODE_ENV === 'production';

  res.cookie(process.env.JWT_TOKEN_NAME as string, '', {
    httpOnly: true,
    maxAge: 0,
    secure: isProduction,
    signed: true,
    sameSite: 'lax',
  });
};

export default removeRefreshTokenCookie;
