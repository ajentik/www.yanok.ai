import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="LightSpeed VT"
      description={`LightSpeed VT is an enterprise-ready, e-learning solution that uses interactive video, automated reports, and custom courseware to train your people better.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/lightspeed-vt.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        LightSpeed VT Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(18, 53, 90, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">LightSpeed VT is an enterprise-ready, e-learning solution that uses interactive video, automated reports, and custom courseware to train your people better.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Access Info</div>
  <div>Triggers a poll of user access information</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Location Updated</div>
  <div>Triggers when a location is changed in LSVT platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Updated</div>
  <div>Triggers when a user is updated in the LightSpeed VT platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Location Created</div>
  <div>Triggers when a new location is added into LSVT platform.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Created</div>
  <div>Triggers when a new user is created in the LightSpeed VT platform.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Location</div>
  <div>Creates a new location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set User LeaderBoard Points by User ID</div>
  <div>Set user leaderboard points by User ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Set User LeaderBoard Points by User Name</div>
  <div>Set user leaderboard points by Username.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Location</div>
  <div>Updates a new location.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User by User ID</div>
  <div>Update user details by User ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update User by User Name</div>
  <div>Update user details by user name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Email</div>
  <div>Check if an email address is used by an existing user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Search for a Username if available to use with creation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create User</div>
  <div>Search for a Username if available to use with creation</div>
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
          <title>LightSpeed VT</title>
          <meta name="description" content={`LightSpeed VT is an enterprise-ready, e-learning solution that uses interactive video, automated reports, and custom courseware to train your people better.`} />
        </>
      ),
    },
  };
}
