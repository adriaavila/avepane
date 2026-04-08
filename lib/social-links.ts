export const WEBSITE_URL = "https://avepane.org/"
export const INSTAGRAM_USERNAME = "avepane"
export const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/?hl=es`
export const INSTAGRAM_PUBLIC_APP_ID = "936619743392459"
export const FACEBOOK_PAGE_URL = "https://www.facebook.com/AvepaneRedes/?locale=es_LA"
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@avepane4695"
export const OFFICIAL_LINKS_HUB_URL = "https://hopp.bio/avepane"

export const CONTACT_EMAIL = "info@avepane.org"
export const PRIMARY_PHONE_LABEL = "(0212) 945.3280"
export const PRIMARY_PHONE_HREF = "tel:+582129453280"
export const SECONDARY_PHONE_LABEL = "(0212) 943.2625"
export const SECONDARY_PHONE_HREF = "tel:+582129432625"

export const WHATSAPP_PHONE_NUMBER = "582129453280"
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola AVEPANE, quisiera recibir información sobre sus programas y canales oficiales."
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`

export function getInstagramProfileInfoUrl(username = INSTAGRAM_USERNAME) {
  return `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(username)}`
}
