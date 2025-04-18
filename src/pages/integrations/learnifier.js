import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Learnifier"
      description="Learnifier is a multi-featured tool that makes it easy to create online courses, onboarding programs or even a learning academy. You get the best of two worlds. Technology simplified, learning amplified."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/learnifier.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Learnifier Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Learnifier is a multi-featured tool that makes it easy to create online courses, onboarding programs or even a learning academy. You get the best of two worlds. Technology simplified, learning amplified.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Activate Participant</div>
  <div>Activates a participant. After the activation the participant/participation can be accessed by a learner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Client User Group Member</div>
  <div>Adds a user to a user group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Product</div>
  <div>Adds a back office product to an organizational unit. Requires full administrator permissions.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Client User Group</div>
  <div>Create a user group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization</div>
  <div>Create an organization unit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Participant</div>
  <div>Creates a new project participant. Participant information is created for the specified user. In the body object, only one of either email, userid or extid must be specified. The participant must be activated before it can be accessed by the user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a user. No two users can have the same email address or external id (if specified). Email is saved WITH case but is handled case insensitive in the system. Email can be changed for a user assuming it doesn\'t cause a conflict.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Client User Group Member</div>
  <div>Deletes a user membership from a user group. The user and group will still remain.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Participant by External ID</div>
  <div>Deletes a participant by external id.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Project</div>
  <div>Deletes the project. The project can only be deleted if the project do not contain any participants.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User</div>
  <div>Delete a user. Only api callers that have full access can call this method.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete User Profile Picture</div>
  <div>Delete user profile picture</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Auto Login Link</div>
  <div>Returns a link that can be used to automatically login a user. The link is only valid once and for a short time. A caller should hand over the link to the user as soon as possible. The caller should also never store this link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Client User Group</div>
  <div>Gets the details about a user group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Participant Login Link</div>
  <div>Returns a single sign on link for the participant. The link can only be used once and should be used directly. The link expires after a few minutes. This operation requires the login link permission.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Ping</div>
  <div>Ping our servers</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Organization</div>
  <div>Update an organization unit</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Participant</div>
  <div>Update a participant</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Password</div>
  <div>Sets or updates a user password. It requires full access. The password must be more than 5 characters long and it is not possible to set a password for a user with a SSO association.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Project</div>
  <div>Updates a project. Values are only updated if the fields are specified in the input</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Updates a user. All values that have a key defined in the input will be set. So if a value should not be updated omit it totally from the input, otherwise it will be unset.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Organization</div>
  <div>Gets a single organization unit. The response includes the display name, internal and external id and client number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Organization by External ID</div>
  <div>Gets an organization unit with an external id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Participant by External ID</div>
  <div>Gets a participation by external id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Project</div>
  <div>Write a description later</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User</div>
  <div>Returns information about a user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User by Email</div>
  <div>Get user by email</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User by External ID</div>
  <div>Get user by external id</div>
</div>

    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Learnifier</title>
          <meta name="description" content="Learnifier is a multi-featured tool that makes it easy to create online courses, onboarding programs or even a learning academy. You get the best of two worlds. Technology simplified, learning amplified." />
        </>
      ),
    },
  };
}
