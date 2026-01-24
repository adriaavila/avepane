/**
 * Text cleaning utilities for Spanish Text-to-Speech
 * Strips Markdown formatting and applies phonetic replacements
 */

/**
 * Cleans text for speech synthesis by removing Markdown formatting
 * and applying phonetic corrections for Spanish TTS engines.
 */
export function cleanTextForSpeech(text: string): string {
  return text
    // Strip Markdown bold/italic
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/__(.+?)__/g, '$1')
    .replace(/_(.+?)_/g, '$1')
    // Strip Markdown links [text](url) -> text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Strip inline code
    .replace(/`([^`]+)`/g, '$1')
    // Strip headers
    .replace(/^#{1,6}\s+/gm, '')
    // Strip horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // Strip blockquotes
    .replace(/^>\s+/gm, '')
    // Strip list markers
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // Phonetic replacements for Spanish TTS
    .replace(/Avepane/gi, 'A-ve-pá-ne')
    .replace(/\bONG\b/g, 'O ene ge')
    // Clean up extra whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}
