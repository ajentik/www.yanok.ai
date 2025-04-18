import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SMS Masivos"
      description="SMS Masivos is a leading platform for sending bulk SMS messages towards all Latin American countries."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sms-masivos.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SMS Masivos Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(20, 71, 126, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SMS Masivos is a leading platform for sending bulk SMS messages towards all Latin American countries.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Triggers when a contact is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact</div>
  <div>Add contact to an existing contact list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact List</div>
  <div>Creates a contact list, with its custom fields and description.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete a contact from an existing contact list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact List</div>
  <div>Deletes a selected a selected contact list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send SMS</div>
  <div>Send a SMS to your contacts.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Whatsapp Message</div>
  <div>Send a Whatsapp Message to your contacts</div>
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
          <title>SMS Masivos</title>
          <meta name="description" content="SMS Masivos is a leading platform for sending bulk SMS messages towards all Latin American countries." />
        </>
      ),
    },
  };
}
