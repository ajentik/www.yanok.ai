import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="BoldDesk"
      description="BoldDesk is a help desk software for managing your support email, automating repetitive tasks, and improving your customer’s experience."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/bolddesk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        BoldDesk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 72, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">BoldDesk is a help desk software for managing your support email, automating repetitive tasks, and improving your customer’s experience.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact Group</div>
  <div>Triggers when a new contact group is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact Group</div>
  <div>Triggers when existing contact group is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Triggers when existing contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket Note</div>
  <div>Triggers when a new note is added to existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket Reply</div>
  <div>Triggers when a new message is added to an existing ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Triggers when a new support ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Triggers when a ticket is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Create a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact Group</div>
  <div>Create a new contact group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact Group</div>
  <div>Update an existing contact group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update an existing contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket Note</div>
  <div>Create note to an existing ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket Reply</div>
  <div>Create reply to an existing ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Create a new ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Update an existing ticket</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact Group</div>
  <div>Find contact group by name</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find contact by email id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Ticket</div>
  <div>Find Ticket by ticket Id</div>
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
          <title>BoldDesk</title>
          <meta name="description" content="BoldDesk is a help desk software for managing your support email, automating repetitive tasks, and improving your customer’s experience." />
        </>
      ),
    },
  };
}
