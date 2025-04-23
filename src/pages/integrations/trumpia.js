import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Trumpia"
      description={`Trumpia offers text messaging in the easiest platform to start with, giving you everything you need for your first campagin.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trumpia.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Trumpia Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(11, 49, 143, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Trumpia offers text messaging in the easiest platform to start with, giving you everything you need for your first campagin.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact (Keyword Sign Up)</div>
  <div>Triggers when a new contact is added to an distribution list by keyword sign up.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inbound Mobile Message</div>
  <div>Triggers when a new message is received.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Distribution List</div>
  <div>Creates a new Distribution list in Trumpia.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact in Trumpia.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email</div>
  <div>Creates and send a new email to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Mobile Message</div>
  <div>Creates and send a new mobile message to a specified contact.</div>
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
          <title>Trumpia</title>
          <meta name="description" content={`Trumpia offers text messaging in the easiest platform to start with, giving you everything you need for your first campagin.`} />
        </>
      ),
    },
  };
}
