const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulManagementClient = contentfulManagement.createClient({
    accessToken: process.env.CTF_CONTENT_MANAGEMENT,
  });

  console.log(
    'contentfulManagementClient: ---------------\n',
    contentfulManagementClient,
  );

  return contentfulManagementClient
    .getSpace(process.env.CTF_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CTF_ENVIRONMENT_ID));
};
