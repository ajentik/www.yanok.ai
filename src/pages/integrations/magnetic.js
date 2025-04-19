import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Magnetic"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/magnetic.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Magnetic Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(236, 26, 35, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Magnetic is a cloud based business management app that allows you to manage your whole business. We have modules focused on CRM, Project Management, Accounts and HR.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Notification</div>
  <div>Triggers when you have a new notification in Magnetic</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Contact Record</div>
  <div>Make a record on an existing contact</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity/Job</div>
  <div>Create a n new opportunity/job</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Opportunity/Job Comment</div>
  <div>Create a comment on an existing Opportunity/Job</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create or Append Contact</div>
  <div>First look for existing contact and if found append else create new contact and company</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a new task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Log Time on Task</div>
  <div>Log some time on an existing task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task Comment</div>
  <div>Makes a comment on an existing task searched by code or description</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Task</div>
  <div>Finds an existing task by description.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or create Task</div>
  <div>Finds an existing task by description.</div>
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
          <title>Magnetic</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
