import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="VBOUT"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vbout.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        VBOUT Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(23, 128, 186, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">VBOUT is a marketing platform which helps you optimize the customer journey with powerful email, social media and lead intelligence tools.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Property Change</div>
  <div>Triggers when a specified property is updated for any contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Campaign</div>
  <div>Triggers when an email campaign is posted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is added to a list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact Property Change (Legacy)</div>
  <div>Triggers when a specified property is updated for any contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Social Media Message</div>
  <div>Triggers when a message is posted to a selected social media channel.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to List</div>
  <div>Adds a contact to a specific email list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact to List (Email Not Required)</div>
  <div>Adds a contact to a specific email list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tag to Contact</div>
  <div>Adds the tag to the contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Custom Event to a Contact</div>
  <div>Adds custom event to a specific contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Email Marketing Campaign</div>
  <div>Creates an email campaign to be sent to a specific list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Email List</div>
  <div>Creates an email list with default, first name, last name and required email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Contact</div>
  <div>Removes the tag from the contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Social Media Message</div>
  <div>Posts a message to one of your connected social media channels.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact</div>
  <div>Unsubscribe a contact from a list based on email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact in a list based on email address.</div>
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
          <title>VBOUT</title>
        </>
      ),
    },
  };
}
