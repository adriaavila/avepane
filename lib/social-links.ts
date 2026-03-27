export const INSTAGRAM_USERNAME = "avepane"
export const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/?hl=es`
export const INSTAGRAM_PUBLIC_APP_ID = "936619743392459"

export function getInstagramProfileInfoUrl(username = INSTAGRAM_USERNAME) {
  return `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(username)}`
}
