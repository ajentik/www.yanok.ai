import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Crelate"
      description="Crelate is modern Talent Relationship Management platform paired with simple, flexible Applicant Tracking and delivered with white-glove service."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/crelate.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Crelate Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(85, 148, 201, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Crelate is modern Talent Relationship Management platform paired with simple, flexible Applicant Tracking and delivered with white-glove service.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Company</div>
  <div>Triggers when a company is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Company</div>
  <div>Triggers when a company\'s details are updated. Does not trigger on new activities.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a contact\'s details are updated. Does not trigger on new activities.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Job</div>
  <div>Triggers when a job is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Job</div>
  <div>Triggers when a job\'s details are updated. Does not trigger on new activities.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Company</div>
  <div>Creates a new company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Job</div>
  <div>Creates a new job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Note</div>
  <div>Creates a new note.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a new task.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Company</div>
  <div>Updates an existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Job</div>
  <div>Update an existing job.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Tags</div>
  <div>Updates a company, contact, or job\'s tags.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Company</div>
  <div>Finds an existing company.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds an existing contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Job</div>
  <div>Finds an existing job.</div>
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
          <title>Crelate</title>
          <meta name="description" content="Crelate is modern Talent Relationship Management platform paired with simple, flexible Applicant Tracking and delivered with white-glove service." />
        </>
      ),
    },
  };
}
