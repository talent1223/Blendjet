# Setup

This will need the following `.env` file set in the root `/content-sources/.env`.

```
CTF_SPACE_ID=
CTF_CDA_ACCESS_TOKEN=
NACELLE_GRAPHQL_TOKEN=
NACELLE_SPACE_ID=
```

# Development

Development should follow these steps:

### Create fetching utils within `/utils`

For example this could be a helper function to fetch from Contentful.

### Create functions that fetch data within `sources`

These are simply functions that go and get desired data and return it in a raw
form so we can decouple the transformation step.

Nacelle sdk docs (probably we should be using this to fetch from Nacelle):
https://docs.getnacelle.com/api-reference/client-js-sdk.html

### Create data mocks

To continue with development it can be very helpful to have local mocks so that
we don't have to continually run the fetching functions. It is also useful to
have as documentation of what data is returned from those endpoints. That said,
if it's a massive amount of data perhaps it could be a single product instead of
thousands.

If you are creating new sources you can follow the pattern found within
`src/mocks/create-mocks.ts` to add additional sources. If you already have data
you could comment out other sources.

Run:

```
npm run build && node dist/mocks/create-mocks.js
```

### Transforming data

Run your Jest test with `npm run test`. This will run your tests in watch mode
and make for a nice development environment while writing your transformation
function(s). It's OK to just have the test(s) console logging the transformed
data initially as you build out the transformation.

# Deployment

To deploy this as an API update `index.ts` to run all the fetching and
transformation logic.

# Fetching data from Contentful

In order to retrieve data from Contentful, use their Content Delivery client
from the package `contentful`. It is well-documented and provides more than
enough options for querying your space.

```
npm install -D contentful
```

# Retrieving types from the Contentful environment

In order to use Contentful effectively with TypeScript we must generate the
typings from our Contentful space. Contentful's responses are extremely
recursive by default, so they are highly prone to bugs if you don't use the
typings provided.

References:

- NPM package:
  [contentful-typescript-codegen](https://github.com/intercom/contentful-typescript-codegen)
- Article: [Integrating Contentful with React & Typescript](https://danielcorcoranssql.wordpress.com/2020/08/26/integrating-contentful-with-react-typescript/)

First, we need to acquire a Content Management API access token. This is very
powerful (you could break everything with it), so just generate one, use it, and
then revoke it.

Then, we need to install Contentful's Content Management client:

```
npm install -D contentful contentful-management
```

To install the TypeScript code generator for Contentful run this:

```
npm install -D contentful-typescript-codegen
```

Then create `getContentfulEnvironment.js` in the root of the project (the code
generator package is expecting this file to be in the root).

The `dotenv` package should already be installed for pulling in the environment
variables from the `.env` file.

```JavaScript
require("dotenv").config(); // pass in a config object if necessary

const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  })

  // Just to view the available methods
  console.log('contentfulClient: --------\n', contentfulClient);

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
}
```

Now add the `codegen` script to package.json (can change output path to whatever
you want):

```
"codegen": "contentful-typescript-codegen --output src/schema/generated/contentful.d.ts"
```

Now run this to retrieve types from the Contentful space:

```
npm run codegen
```

If you check in the output directory you should see the types for this
Contentful environment. Use these!

Note: `codegen` should be run immediately after any of the models are
modified in your Contenful instance.

## Using the generated types

Once you have the generated type file, you might also need to install Contentful's package with types for rich text:

```
npm install -D @contentful/rich-text-types
```
