import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Freshdesk"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/freshdesk.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Freshdesk Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(86, 173, 76, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Freshdesk is an online helpdesk software with multiple channel customer service to support customers across email, phone, chat, web, Twitter and more.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when there is a new ticket is created in Freshdesk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new customer is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket Note</div>
  <div>Triggers when a Note is added to a Ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Ticket</div>
  <div>Triggers when a Ticket is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Triggers when a user is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Notes to a Ticket</div>
  <div>Add Private or Public notes to a Freshdesk Support Ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Allows you to create a Company entry in Freshdesk.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Forum</div>
  <div>Creates a Forum under a Category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Forum Category</div>
  <div>Creates a Forum Category.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Forum Topic</div>
  <div>Create a new Forum Topic on Freshdesk Forums.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Create a ticket in Freshdesk for your domain.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Allows you to create a User/Customer in Freshdesk for your support domain.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing customer or a potential customer that has raised a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Ticket by Id</div>
  <div>Find a ticket by ID.</div>
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
          <title>Freshdesk</title>
        </>
      ),
    },
  };
}
