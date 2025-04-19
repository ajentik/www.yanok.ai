import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Outseta"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/outseta.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Outseta Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 8, 66, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Outseta is a technology stack for early stage SaaS companies. The platform fully integrates CRM, subscription billing & management, and customer success tools (email, chat, help desk).</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Account Deleted</div>
  <div>Triggers when an account is deleted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Deleted</div>
  <div>Triggers when a person is deleted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Account Added</div>
  <div>Triggers when a new account is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Chat Request Added</div>
  <div>Triggers when a new chat is received.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Added</div>
  <div>Triggers when a new deal is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Added</div>
  <div>Triggers when a new person is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Account Updated</div>
  <div>Triggers when an account is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deal Updated</div>
  <div>Triggers when a deal is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Person Updated</div>
  <div>Triggers when a person is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Account</div>
  <div>Allows you to create an account with an existing or new user. You can also specify a subscription.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Deal</div>
  <div>Allows you to create a deal and optionally associate it with an account or a person.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Person</div>
  <div>This action creates a person in the Outseta CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Subscription</div>
  <div>This action cancels the current subscription on an account in the Outseta CRM. By default, accounts with canceled subscriptions become expired at the end of their current terms. It is also possible to cancel the subscription immediately.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Account</div>
  <div>Retrieves an account record using its UID as the lookup</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe to Email List</div>
  <div>Adds a person\'s email address to a mailing list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Account</div>
  <div>This action updates an account in the Outseta CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Deal</div>
  <div>This action updates a deal</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Person</div>
  <div>This action updates a person in the Outseta CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Retrieve Person</div>
  <div>Retrieves a person record using an email address as the lookup</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Add Person</div>
  <div>Retrieves a person record using an email address as the lookup</div>
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
          <title>Outseta</title>
        </>
      ),
    },
  };
}
