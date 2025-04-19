import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zabun"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zabun.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zabun Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(51, 187, 136, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zabun is an online CRM for real-estate to maintain your properties, contacts, requests, tasks and other data and connections.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Account</div>
  <div>Triggers when an account has been deleted from your Zabun. An account is a collection of contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Contact</div>
  <div>Triggers when a contact has been deleted from your Zabun.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Property</div>
  <div>Triggers when a propery has been deleted in your Zabun.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deleted Request</div>
  <div>Triggers when a request, a "zoekfiche", has been deleted from your Zabun.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account has been in your Zabun. An account is a collection of contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact has been added to your Zabun. The source of this contact can be anything; manually created, from a contact form ...</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Property</div>
  <div>Triggers when a new property has been added to your Zabun.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Request</div>
  <div>Triggers when a new request, in other words a "zoekfiche", has been created in your Zabun.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Poll Contact</div>
  <div>Triggers when a updated contact is found in the poll list. This is an alternative for the "Updated Contact" trigger. It works by asking Zabun for updated contacts, rather than getting an instant notification when a contact is updated. Therefore, it is more inclusive, as it can also get updated contact from external sources that aren\'t Zabun. But it is not as fast a regular trigger, since that polling only occurs every 5 to 15 minutes. This poll trigger can also replace the "New Contact" trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Account</div>
  <div>Triggers when an account is updated in your Zabun.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a contact has been updated in your Zabun.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Property</div>
  <div>Triggers when a property is updated in your Zabun.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Request</div>
  <div>Triggers when a request, a "zoekfiche", has been updated in your Zabun.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a new contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a new task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete a contact from your Zabun</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe</div>
  <div>Unsubscribe a contact in Zabun. Contact Can Be Mailed will be unticked and any custom code will be executed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact</div>
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
          <title>Zabun</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
