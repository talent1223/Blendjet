export const decodeBase64Id = (encodedId: string) => {
  // Some IDs are like Z2lkOi8A3Mzg5MTM4Nw==::706db06f-4ce4-4f
  // We extract the base64 part from these.
  // After decoding, we can get strings like gid://shopify/variant/3423489374893

  if (encodedId && typeof encodedId === 'string') {
    const base64id = encodedId.split('::').shift() as string;
    return atob(base64id).split('/').pop() || '';
  }
  return encodedId;
};

export const encodeBase64 = (input: string) => {
  return btoa(input);
};

export async function delay(milliseconds: number) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(true), milliseconds),
  );
}
