import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SlickText"
      description="SlickText provides businesses and organizations with SMS marketing and mass text messaging solutions."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/slicktext.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SlickText Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(30, 195, 241, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SlickText provides businesses and organizations with SMS marketing and mass text messaging solutions.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Delete All Instances of a Contact</div>
  <div>Deletes all instances of a number off of all your text messaging list. When deleting contacts, they will be allowed to be re-subscribed via Zapier in the future.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Deletes an existing contact off of your text messaging list. When deleting a contact, they will be allowed to be re-subscribed via Zapier in the future.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Edit Contact</div>
  <div>Edits / updates an existing contact\'s information.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt in Contact</div>
  <div>Opts a new contact into one of your text messaging lists. Each person will have to reply "YES" or "Y" to a confirmation text that is sent to them before completing their subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt Out Contact</div>
  <div>Opts an existing contact out of your text messaging list. When opting a contact out, they will not be allowed to be re-subscribed via Zapier in the future. They will have to text to join.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Opt Out All Instances of a Contact</div>
  <div>Opt out all instances of a number from all your text messaging list. When opting contacts out, they will not be allowed to be re-subscribed via Zapier in the future. They will have to text to join.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message to a Contact</div>
  <div>Sends a text message to a single contact on a list. The contact must be opted into your list prior to sending.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Message to a List</div>
  <div>Sends a text message to all contacts on a list or segment of a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Find a contact on one or more of your textword lists.</div>
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
          <title>SlickText</title>
          <meta name="description" content="SlickText provides businesses and organizations with SMS marketing and mass text messaging solutions." />
        </>
      ),
    },
  };
}
