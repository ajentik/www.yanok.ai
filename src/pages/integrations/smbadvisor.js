import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BuzzBoard Insights"
      description="BuzzBoard Insights is an account intelligence platform that sources thousands of robust data points on small to mid-sized businesses. Plug-in to start streaming real-time account intelligence."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/smbadvisor.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BuzzBoard Insights Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(21, 174, 117, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BuzzBoard Insights is an account intelligence platform that sources thousands of robust data points on small to mid-sized businesses. Plug-in to start streaming real-time account intelligence.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Profile</div>
  <div>Triggered every time a new profile is created in BuzzBoard Insights.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Reminder</div>
  <div>Adding reminders for the projects</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Facebook Custom Audience</div>
  <div>Triggers every time a new facebook custom audience is created in BuzzBoard Insights.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggered every time a new contact is created for a profile in BuzzBoard Insights.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Context</div>
  <div>Triggers when a new Context is added to a profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new Note is added to a profile (Note contains date reminder)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Profile Assets</div>
  <div>Triggers profile reports when a profile is added or updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Context Updated</div>
  <div>Triggers when profile context is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email to Facebook Custom Audience</div>
  <div>Triggers an email address to an existing custom audience.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Profile Updated</div>
  <div>Triggers when a profile info is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Note Updated</div>
  <div>Updates an existing note.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Context</div>
  <div>Creates a new context for a profile. (Matches the business name and profile of that contact)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Profile</div>
  <div>Creates a new profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Reminder</div>
  <div>Creating reminders for the bussines</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact for a profile. (Matches the business name and profile of that contact)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Updates an existing context. (Checks the business name and profile of that contact)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates an existing contact. (Checks the business name and profile of that contact)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Context</div>
  <div>Updates an existing context. (Checks based on the business ID)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Profile</div>
  <div>Updates the existing Profile.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Note</div>
  <div>Updates an existing note. (Checks the business name and profile of that note)</div>
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
          <title>BuzzBoard Insights</title>
          <meta name="description" content="BuzzBoard Insights is an account intelligence platform that sources thousands of robust data points on small to mid-sized businesses. Plug-in to start streaming real-time account intelligence." />
        </>
      ),
    },
  };
}
