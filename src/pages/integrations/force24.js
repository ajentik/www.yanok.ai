import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Force24"
      description={`Force24 is a UK-based provider of enterprise-level marketing automation. We help to move prospects through their lifecycle, automating their journey. It means speaking to the right person, at the right time, using the right marketing channel.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/force24.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Force24 Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 0)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Force24 is a UK-based provider of enterprise-level marketing automation. We help to move prospects through their lifecycle, automating their journey. It means speaking to the right person, at the right time, using the right marketing channel.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added to Marketing List</div>
  <div>Triggers when a contact is added to a marketing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Removed From Marketing List</div>
  <div>Triggers when a contact is removed from a marketing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a contact is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to Marketing List</div>
  <div>Adds a contact to a marketing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Contact From Marketing List</div>
  <div>Removes a contact from a marketing list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Contact</div>
  <div>Find an existing Contact or creates one if it doesn\'t exist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create a Contact</div>
  <div>Find an existing Contact or creates one if it doesn\'t exist.</div>
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
          <title>Force24</title>
          <meta name="description" content={`Force24 is a UK-based provider of enterprise-level marketing automation. We help to move prospects through their lifecycle, automating their journey. It means speaking to the right person, at the right time, using the right marketing channel.`} />
        </>
      ),
    },
  };
}
