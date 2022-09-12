let envSet = false;
export function getEnvConfig() {
  // This code will run immediately to check for correct environmental variables

  let missing: string[] = [];
  if (!process.env.CTF_CDA_ACCESS_TOKEN) missing.push('CTF_CDA_ACCESS_TOKEN');
  if (!process.env.CTF_SPACE_ID) missing.push('CTF_SPACE_ID');
  if (!process.env.NACELLE_GRAPHQL_TOKEN) missing.push('NACELLE_GRAPHQL_TOKEN');
  if (!process.env.NACELLE_SPACE_ID) missing.push('NACELLE_SPACE_ID');
  if (
    !process.env.CTF_CDA_ACCESS_TOKEN ||
    !process.env.CTF_SPACE_ID ||
    !process.env.NACELLE_GRAPHQL_TOKEN ||
    !process.env.NACELLE_SPACE_ID
  ) {
    throw Error(
      `Proper environment variables are not set. Missing: ${missing.join(
        ', ',
      )}`,
    );
  }

  if (!envSet) {
    // If we get here, we have what we need
    console.log('> Environment variables are set correctly...\n');
    envSet = true;
  }

  return {
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    NACELLE_GRAPHQL_TOKEN: process.env.NACELLE_GRAPHQL_TOKEN,
    NACELLE_SPACE_ID: process.env.NACELLE_SPACE_ID,
  };
}
