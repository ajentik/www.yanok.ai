import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Trackfront"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trackfront.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Trackfront Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(31, 190, 205, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The All-In-One Solution For Project Collaboration, Easy Quotes, Estimates and Custom Proposals. Keeping Clients Happy and Coming Back, Reducing Emails and Simplifying Communication.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Create</div>
  <div>Triggers when a new contact is created in Trackfront.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Estimate Save</div>
  <div>Triggers when an estimate is saved in Trackfront.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Estimate Status Change</div>
  <div>Triggers when an estimate status changes in Trackfront.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Organization Create</div>
  <div>Triggers when a Trackfront Organization is created in your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Create</div>
  <div>Triggers when a new project is created in Trackfront.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Project Message</div>
  <div>Triggers when a new message is posted to a project in Trackfront.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Create</div>
  <div>Creates a contact inside of Trackfront.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Organization</div>
  <div>Creates and organization inside of Trackfront.</div>
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
          <title>Trackfront</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
