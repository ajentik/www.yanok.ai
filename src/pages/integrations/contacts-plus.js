import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Contacts+"
      description="Contacts+, formerly known as FullContact, is a modern contact management app to keep your contacts up-to-date across all leading platforms."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/contacts-plus.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Contacts+ Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(39, 123, 227, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Contacts+, formerly known as FullContact, is a modern contact management app to keep your contacts up-to-date across all leading platforms.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Business Card Transcribed</div>
  <div>Triggers when a business card has been transcribed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a contact is created or a business card is transcribed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deleted Contact</div>
  <div>Triggers when a contact is deleted.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag</div>
  <div>Triggers when a tag is created on your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deleted Tag</div>
  <div>Triggers when a tag is deleted from your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Updated Tag</div>
  <div>Triggers when a tag is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Note to Contact</div>
  <div>Appends a note to a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Get Tag</div>
  <div>Gets or creates a tag.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tag From Contact</div>
  <div>Removes Tags from a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Contact</div>
  <div>Tags a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Find a company by domain or email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Find a contact by name, company, email, phone or any combination.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Person</div>
  <div>Find a person by email, phone or Twitter handle.</div>
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
          <title>Contacts+</title>
          <meta name="description" content="Contacts+, formerly known as FullContact, is a modern contact management app to keep your contacts up-to-date across all leading platforms." />
        </>
      ),
    },
  };
}
