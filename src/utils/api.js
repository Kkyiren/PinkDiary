import http from "./http";
export function getPlanet() {
  return http.get("/planet");
}