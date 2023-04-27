export function ramdomStyleAvatar(): any {
  const color = ["success", "danger", "warning", "primary", "info"];
  return color[Math.floor(Math.random() * 5)];
}
