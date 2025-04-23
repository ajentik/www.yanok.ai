import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="iContact"
      description={`iContact is an easy-to-use email marketing platform that will help you start growing your business and stay connected with your customers.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/icontact.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        iContact Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(34, 102, 153, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">iContact is an easy-to-use email marketing platform that will help you start growing your business and stay connected with your customers.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Sender Property</div>
  <div>Triggers when a new sender property is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact in List</div>
  <div>Triggers when a contact is created in the given list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Subscribed</div>
  <div>Triggers when a contact subscribes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Unsubscribed</div>
  <div>Triggers when a contact unsubscribes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New List</div>
  <div>Triggers when a new list is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers on a new message.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Sender Property</div>
  <div>Creates a new sender property.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact in your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send HTML Message</div>
  <div>Creates and sends a new message from custom HTML.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe Contact to List</div>
  <div>Subscribes a contact to a given list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact</div>
  <div>Unsubscribes a contact from a given list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Sender Property</div>
  <div>Finds Sender Property by search field.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds contact by search field.</div>
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
          <title>iContact</title>
          <meta name="description" content={`iContact is an easy-to-use email marketing platform that will help you start growing your business and stay connected with your customers.`} />
        </>
      ),
    },
  };
}
