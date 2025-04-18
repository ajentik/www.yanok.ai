import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Planfix"
      description="Planfix is a platform for creating Enterprise Management Systems and allows you to configure various business processes of the company without programming."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/planfix.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Planfix Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(111, 169, 46, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Planfix is a platform for creating Enterprise Management Systems and allows you to configure various business processes of the company without programming.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Trigger when a comment is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Comment</div>
  <div>Trigger when a comment is deleted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Comment</div>
  <div>Trigger when a comment is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Trigger when a new contact is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Trigger when a contact is deleted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Trigger when a contact is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Field</div>
  <div>Trigger when a field is updated</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Trigger when a new task is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Task</div>
  <div>Trigger when a task is deleted</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Trigger when a task is updated</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Creates a new comment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Comment</div>
  <div>Update a comment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Creates a new contact.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Contact</div>
  <div>Update contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Comment</div>
  <div>Delete a comment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Contact</div>
  <div>Delete a contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Task</div>
  <div>Delete a task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Task</div>
  <div>Creates a new task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Task</div>
  <div>Update a task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Contact</div>
  <div>Search for contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find a Task</div>
  <div>Search for task</div>
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
          <title>Planfix</title>
          <meta name="description" content="Planfix is a platform for creating Enterprise Management Systems and allows you to configure various business processes of the company without programming." />
        </>
      ),
    },
  };
}
