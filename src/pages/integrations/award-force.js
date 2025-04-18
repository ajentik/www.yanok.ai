import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Award Force"
      description="Award Force is an awards management software for organisers of awards, grants, scholarships, and pitch competitions to manage entry, judging and award of results online."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/award-force.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Award Force Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(139, 19, 96, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Award Force is an awards management software for organisers of awards, grants, scholarships, and pitch competitions to manage entry, judging and award of results online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Allocation Created</div>
  <div>Triggers when a new allocation is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Created</div>
  <div>Triggers when a new entry is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Submitted</div>
  <div>Triggers when a new entry is submitted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Tagged</div>
  <div>Triggers when an entry is tagged</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Entry Updated</div>
  <div>Triggers when an entry is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Fields</div>
  <div>Returns a list of all fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Pending</div>
  <div>Triggers when a payment is pending.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Payment Success</div>
  <div>Triggers when a payment is successfully made.</div>
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
  <div class="font-semibold">Create Entry</div>
  <div>Creates an entry in Award Force.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Create a new user</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Allocation</div>
  <div>Returns an allocation by its slug.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Fund</div>
  <div>Returns a fund by its slug.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Fields</div>
  <div>Returns a list of fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Entries by Tag</div>
  <div>This returns a list of entries with a specific tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Entry</div>
  <div>Add tags to an exsiting entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Entry</div>
  <div>Update an existing entry in Award Force.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User</div>
  <div>Update a user in Award Force</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Entry Attachment</div>
  <div>Upload an attachment to an entry.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Entry File</div>
  <div>Upload a file to an entry file field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Entry</div>
  <div>Returns an entry by its slug. The response consists of all entry fields including files, attachments and contributors. Files include a download link.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User by Email</div>
  <div>This returns the user by their email address. The response includes all user fields including files.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get User by Slug</div>
  <div>This returns user information for a unique slug.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Entries by Tag</div>
  <div>This returns a list of entries with a specific tag.</div>
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
          <title>Award Force</title>
          <meta name="description" content="Award Force is an awards management software for organisers of awards, grants, scholarships, and pitch competitions to manage entry, judging and award of results online." />
        </>
      ),
    },
  };
}
