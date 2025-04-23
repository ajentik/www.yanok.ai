import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Elastic Email"
      description={`Elastic Email is an all-in-one email delivery platform. Offering an SMTP Relay, robust HTTP API, and a User Interface that has a complete suite of tools and features for managing contacts, templates, campaigns, and reports. Specializing in delivering transactional and marketing email for businesses of any size.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/elasticemail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Elastic Email Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(38, 153, 251, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Elastic Email is an all-in-one email delivery platform. Offering an SMTP Relay, robust HTTP API, and a User Interface that has a complete suite of tools and features for managing contacts, templates, campaigns, and reports. Specializing in delivering transactional and marketing email for businesses of any size.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Campaign Sent</div>
  <div>Triggers when new campaign is sent.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Added</div>
  <div>Triggers when a new contact is added to list.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Contact</div>
  <div>Add/ Update a contact and adds it optionally to one of your lists.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create List</div>
  <div>Add a new list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete a contact from your account</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Email</div>
  <div>Sends an email. The default, maximum (accepted by us) size of an email is 10 MB in total, with or without attachments included.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact</div>
  <div>Update a contact status to unsubscribed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find All Contacts in the List</div>
  <div>Returns list of contacts, with full informations, in given list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find the contact on your account</div>
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
          <title>Elastic Email</title>
          <meta name="description" content={`Elastic Email is an all-in-one email delivery platform. Offering an SMTP Relay, robust HTTP API, and a User Interface that has a complete suite of tools and features for managing contacts, templates, campaigns, and reports. Specializing in delivering transactional and marketing email for businesses of any size.`} />
        </>
      ),
    },
  };
}
