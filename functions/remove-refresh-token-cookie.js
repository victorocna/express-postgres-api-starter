const removeRefreshTokenCookie = (res) => {
  const isProduction = process.env.NODE_ENV === 'production';

  res.cookie(process.env.JWT_TOKEN_NAME, '', {
    httpOnly: true,
    maxAge: 0,
    secure: isProduction,
    signed: true,
    sameSite: 'Lax',
  });
};

export default removeRefreshTokenCookie;
