import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Zoho Desk"
      description="Zoho Desk is web-based customer service software designed to help you focus more on creating customer happiness every day."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/zoho-desk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Zoho Desk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 157, 87, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Zoho Desk is web-based customer service software designed to help you focus more on creating customer happiness every day.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Account</div>
  <div>Triggers when a new account is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Agent</div>
  <div>Triggers when a new agent is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Attachment</div>
  <div>Triggers when a new attachment is added to any ticket in the selected organization.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment is added to any ticket in the selected department.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Message</div>
  <div>Triggers when a new message is added to any ticket in the selected department.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Status Change</div>
  <div>Triggers when a status of ticket is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Ticket</div>
  <div>Triggers when a ticket is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Attachment</div>
  <div>Add an attachment to a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment</div>
  <div>Add a comment to a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Account</div>
  <div>Creates a new account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Creates a new ticket for customer requests.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send E-Mail Reply</div>
  <div>Sends an email reply for the selected ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Updates an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search Ticket</div>
  <div>Search Ticket (Request) by Ticket number.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing contact by email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact</div>
  <div>Find or Create Contact</div>
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
          <title>Zoho Desk</title>
          <meta name="description" content="Zoho Desk is web-based customer service software designed to help you focus more on creating customer happiness every day." />
        </>
      ),
    },
  };
}
