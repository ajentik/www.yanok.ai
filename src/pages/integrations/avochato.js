import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Avochato"
      description={`Avochato is the text messaging solution for sales, marketing, and customer support teams.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/avochato.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Avochato Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(26, 122, 63, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Avochato is the text messaging solution for sales, marketing, and customer support teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Opted In</div>
  <div>Triggers when a Contact opts in to receiving text messages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Opted Out</div>
  <div>Triggers when a contact opts out of receiving text messages.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Inbound Message</div>
  <div>Triggers when an incoming text message arrives in your inbox.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Sale Event</div>
  <div>Adds a sales event to a contact\'s most recent conversation.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create / Update Contact</div>
  <div>Creates a new contact or updates an existing contact if it already exists.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Text Message</div>
  <div>Sends a text message to a specified phone number.</div>
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
          <title>Avochato</title>
          <meta name="description" content={`Avochato is the text messaging solution for sales, marketing, and customer support teams.`} />
        </>
      ),
    },
  };
}
