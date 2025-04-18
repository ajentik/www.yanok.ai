import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Symplify Communication"
      description="Symplify is an omnichannel marketing automation platform that helps marketers leverage their data in their digital 1:1 communications."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/symplify-communication.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Symplify Communication Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(13, 113, 139, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Symplify is an omnichannel marketing automation platform that helps marketers leverage their data in their digital 1:1 communications.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Purchase History Line</div>
  <div>Adds a purchase history line to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Anonymize Contact</div>
  <div>Anonymizes a contact by email address or originalId.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a contact in a specific list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact</div>
  <div>Unsubscribes a contact in a specific list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact in a specific list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Transactional Message</div>
  <div>Sends a transactional email or SMS to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start Journey</div>
  <div>Starts a journey for a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact by Original Id</div>
  <div>Search for a contact in a specific list.</div>
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
          <title>Symplify Communication</title>
          <meta name="description" content="Symplify is an omnichannel marketing automation platform that helps marketers leverage their data in their digital 1:1 communications." />
        </>
      ),
    },
  };
}
