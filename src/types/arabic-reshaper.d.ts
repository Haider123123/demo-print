declare module 'arabic-reshaper' {
  interface ArabicReshaper {
    reshape(text: string): string;
  }
  const reshaper: ArabicReshaper;
  export default reshaper;
}
