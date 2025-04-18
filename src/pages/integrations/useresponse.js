import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="UseResponse"
      description="UseResponse is all-in-one support suite to capture feedback, organize community with a self-service knowledge base, and support customers in multiple channels."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/useresponse.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        UseResponse Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(64, 89, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">UseResponse is all-in-one support suite to capture feedback, organize community with a self-service knowledge base, and support customers in multiple channels.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a new comment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a new company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ticket</div>
  <div>Triggers when a new ticket is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Topic</div>
  <div>Triggers when a new topic is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers when a new user is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Vote for a Topic</div>
  <div>Adds or removes a vote for a topic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment</div>
  <div>Creates a new comment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Ticket</div>
  <div>Creates a new ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Topic</div>
  <div>Creates a new topic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create User</div>
  <div>Creates a new user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Article</div>
  <div>Finds an existing article.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Object by Id</div>
  <div>Finds an object.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Ticket</div>
  <div>FInds a ticket.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Topic</div>
  <div>Finds an existing topic.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User</div>
  <div>Finds an existing user.</div>
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
          <title>UseResponse</title>
          <meta name="description" content="UseResponse is all-in-one support suite to capture feedback, organize community with a self-service knowledge base, and support customers in multiple channels." />
        </>
      ),
    },
  };
}
