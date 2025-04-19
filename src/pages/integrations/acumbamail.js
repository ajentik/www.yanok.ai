import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Acumbamail"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/acumbamail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Acumbamail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(25, 27, 53, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Acumbamail is a simple and effective Email Marketing tool for everyone.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Opened</div>
  <div>Triggers when list subscriber opens an email from an email marketing campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Clicked</div>
  <div>Triggers when a list subscriber clicks a link on a email marketing campaign.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscriber</div>
  <div>Triggers when a new subscriber enters a list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unsubscriber</div>
  <div>Triggers when a subscriber unregisters from a list</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add/Update Subscriber</div>
  <div>Adds a new subscriber to a subscriber list of your choosing. Can be used to update an existing subscriber too.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Subscriber List</div>
  <div>Creates a new subscriber list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Subscriber List</div>
  <div>Deletes a Subscriber List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Subscriber</div>
  <div>Unsubscribes an email address from a subscriber list of your choosing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Duplicate Template</div>
  <div>Duplicates an existing template to use it on a email marketing campaign shipping.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Sends a SMS to a telephone number of your choosing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Campaign</div>
  <div>Creates and sends an email marketing campaign using a certain template from the platform.</div>
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
          <title>Acumbamail</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
