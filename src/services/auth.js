import { post } from "@/utils/request";

export function login(user) {
  return post("/api/v1/auth/login", user);
}

export function reg(user) {
  return post("/api/v1/auth/reg", user);
}
