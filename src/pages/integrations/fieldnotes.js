import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Fieldnotes"
      description="Fieldnotes is a minimalistic self-learning CRM platform that updates contacts, manages transaction deadlines, and handles data entry."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/fieldnotes.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Fieldnotes Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(252, 146, 22, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Fieldnotes is a minimalistic self-learning CRM platform that updates contacts, manages transaction deadlines, and handles data entry.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New AI Status</div>
  <div>Triggers when AI status of the contact is changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when you add a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Contact</div>
  <div>Triggers when you add or update a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Conversation</div>
  <div>Triggers when the conversation is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Meeting Note</div>
  <div>Triggers when you add or update a meeting note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Task</div>
  <div>Triggers when you add or update a Task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New or Updated Transaction</div>
  <div>Triggers when you add or update a transaction.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact</div>
  <div>Add as a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Note</div>
  <div>Add as a new note</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update or Add Contact</div>
  <div>Update if the contact exists, if not, add as a new contact. (Uses First Name and Last Name to identify the contact).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Lookup</div>
  <div>It will lookup for contact based on input field data</div>
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
          <title>Fieldnotes</title>
          <meta name="description" content="Fieldnotes is a minimalistic self-learning CRM platform that updates contacts, manages transaction deadlines, and handles data entry." />
        </>
      ),
    },
  };
}
