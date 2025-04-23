import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SuperPhone"
      description={`SuperPhone is a text marketing platform with broadcasts and 1-to-1 chat to help grow your text marketing channel.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/superphone.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SuperPhone Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 0, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SuperPhone is a text marketing platform with broadcasts and 1-to-1 chat to help grow your text marketing channel.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a contact\'s details are updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Received</div>
  <div>Triggers when a new message is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Message Sent</div>
  <div>Triggers when a new message is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added</div>
  <div>Triggers when a tag is added to a contact.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Custom Contribution</div>
  <div>Add a custom contribution to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags</div>
  <div>Add a tag to an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact</div>
  <div>Creates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tags</div>
  <div>Remove a tag from an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Message</div>
  <div>Send a message to a contact or phone number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Contact</div>
  <div>Updates existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check if Contact Exists</div>
  <div>Check if a contact exists for a given phone number and/or email. If a contact does exist, it\'s information is passed along with the response.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Contact ID</div>
  <div>Find a contact by providing a Contact ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Mobile or Email</div>
  <div>Find a contact by providing either an email or a mobile number.</div>
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
          <title>SuperPhone</title>
          <meta name="description" content={`SuperPhone is a text marketing platform with broadcasts and 1-to-1 chat to help grow your text marketing channel.`} />
        </>
      ),
    },
  };
}
