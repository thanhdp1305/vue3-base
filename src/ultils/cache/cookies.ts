import UniversalCookie from "universal-cookie";

const cookie = new UniversalCookie();
export function setAccessToken(token: string): void {
  cookie.set("G_token", token, { path: "/" });
}

export function getAccessToken(): string {
  return cookie.get("G_token");
}

export function setRefreshToken(token: string): void {
  cookie.set("G_refreshToken", token, {
    path: "/",
  });
}

export function getRefreshToken(): string {
  return cookie.get("G_refreshToken");
}

export function isAuthenticated(): boolean {
  const token = getAccessToken();
  return !!token;
}

export function revokeUser(): void {
  const options = {
    path: "/",
  };
  cookie.remove("G_userInfo", options);
  cookie.remove("G_token", options);
  cookie.remove("G_refreshToken", options);
}
