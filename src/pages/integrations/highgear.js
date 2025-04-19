import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="HighGear"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/highgear.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        HighGear Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(239, 189, 71, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">HighGear is a true no-code workflow platform that allows everyday business users to build enterprise-grade workflow applications to orchestrate work at scale without writing a single line of code.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Task Enters WebRequest Node</div>
  <div>Triggers when a task enters the subscribed webrequest node.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact</div>
  <div>Creates a Contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Creates a task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task Attached File</div>
  <div>Get a File attached to a Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Updates a Contact with new field values</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Update a task with new values</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact</div>
  <div>Finds a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Contact (Advanced)</div>
  <div>Find a Contact, or if not found, Create one with more fields</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Task (Advanced)</div>
  <div>Find a Task, or Create one if not found</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Find a Task by field values</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Contact</div>
  <div>Get contact details by contact id</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Task</div>
  <div>Get a Task by Id</div>
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
          <title>HighGear</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
