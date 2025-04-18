import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Club OS"
      description="The gym and studio management software you need to sell more memberships and keep more members."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/club-os.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Club OS Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The gym and studio management software you need to sell more memberships and keep more members.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to User</div>
  <div>Adds a note to a user\'s account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Appointment</div>
  <div>Create an Appointment for a Prospect</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Prospect</div>
  <div>Creates a new Prospect</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt Out of Email</div>
  <div>Opts a user out of email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt Out of SMS</div>
  <div>Opts a user out of SMS in Club OS</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Prospect</div>
  <div>Finds a prospect within a club or location in Club OS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds a user (prospect or member) in Club OS.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Prospect</div>
  <div>Finds a user (prospect or member)</div>
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
          <title>Club OS</title>
          <meta name="description" content="The gym and studio management software you need to sell more memberships and keep more members." />
        </>
      ),
    },
  };
}
