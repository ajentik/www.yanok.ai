import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Good Grants"
      description="Good Grants is a tool for managing the entire grant life cycle from submission to review to the allocation of funds."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/good-grants.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Good Grants Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(94, 41, 199, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Good Grants is a tool for managing the entire grant life cycle from submission to review to the allocation of funds.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Allocation Created</div>
  <div>Triggers when a new allocation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Application Created</div>
  <div>Triggers when a new application is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Application Submitted</div>
  <div>Triggers when a new application is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Application Updated</div>
  <div>Triggers when an application is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Registered</div>
  <div>Triggers when a new user registers.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Application</div>
  <div>Creates an application in Good Grants.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Create a new user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Application</div>
  <div>Returns an application by its slug. The response consists of all application fields including files, attachments and contributors. Files include a download link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User by Email</div>
  <div>This returns the user by their email address. The response includes all user fields including files.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Application</div>
  <div>Add tags to an existing application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Application</div>
  <div>Update an existing application in Good Grants.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Application Attachment</div>
  <div>Upload an attachment to an application.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Application File</div>
  <div>Upload a file to an application file field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User by Slug</div>
  <div>This returns user information for a unique slug.</div>
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
          <title>Good Grants</title>
          <meta name="description" content="Good Grants is a tool for managing the entire grant life cycle from submission to review to the allocation of funds." />
        </>
      ),
    },
  };
}
