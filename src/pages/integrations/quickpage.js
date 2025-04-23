import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Quickpage"
      description={`Quickpage is a video follow-up tool that's increasing engagement by 200%. The quickest most effective closing tool used by sales reps and their clients.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/quickpage.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Quickpage Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(69, 168, 92, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Quickpage is a video follow-up tool that\'s increasing engagement by 200%. The quickest most effective closing tool used by sales reps and their clients.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when there\'s a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Page Email Open</div>
  <div>Triggers when there\'s a new page email open.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Media Download</div>
  <div>Triggers when there\'s a new media download from page.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Page Viewed</div>
  <div>Triggers when there\'s a new page view.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Page Viewed Reminder</div>
  <div>Triggers when a page view reminder notification is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Quickpage</div>
  <div>Sends a Quickpage. If contact details don\'t exist inside your Quickpage account a new contact will be created with the details.</div>
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
          <title>Quickpage</title>
          <meta name="description" content={`Quickpage is a video follow-up tool that's increasing engagement by 200%. The quickest most effective closing tool used by sales reps and their clients.`} />
        </>
      ),
    },
  };
}
