import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Uptics"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/uptics.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Uptics Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(23, 131, 238, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">The modern, all-in-one, sales software for SMBs that adds the gift of automation.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new contact created in CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Deal</div>
  <div>Triggers when a new deal created in CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Activity</div>
  <div>Triggers when a new email activity created in CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note</div>
  <div>Triggers when a new note created in CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Triggers when new task created in CRM.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag</div>
  <div>Triggers when a new tag is applied on the contact.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Contact</div>
  <div>Creates a Contact without an email address requirement.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Contact</div>
  <div>Creates or Updates a Contact on the basis of email address.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Update a Deal</div>
  <div>Creates or Updates a Deal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Note</div>
  <div>Creates a Note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Task</div>
  <div>Creates a Task.</div>
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
          <title>Uptics</title>
        </>
      ),
    },
  };
}
