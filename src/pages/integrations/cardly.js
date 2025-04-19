import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Cardly"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cardly.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Cardly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 204, 204, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Cardly helps businesses create great engagement with customers by getting out of inboxes and into mailboxes.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Revoke User Access</div>
  <div>Revoke access for a user from your account, removing any current user account access or negating any outstanding invitations.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact</div>
  <div>Create a new contact in a given contact list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete a Contact</div>
  <div>Delete a contact from a list so they are no longer eligible for matching automation rules.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Synchronize a Contact</div>
  <div>Add or update a contact in a given contact list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite User to Account</div>
  <div>Invite a user to access your account in a non-privileged capacity, optionally allowing free credit or saved credit card usage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact List</div>
  <div>Create a new contact list to group contacts together, such as</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Card</div>
  <div>Send a card using a template and selected artwork.</div>
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
          <title>Cardly</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
