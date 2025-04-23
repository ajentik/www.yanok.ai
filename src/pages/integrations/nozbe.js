import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Nozbe Personal"
      description={`Nozbe is an online to-do list style project management tool for your team.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/nozbe.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Nozbe Personal Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(40, 206, 99, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Nozbe is an online to-do list style project management tool for your team.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Completed Action</div>
  <div>Triggered when an action is marked complete.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Context</div>
  <div>Triggered when a new context is added to a project</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Note Attachment</div>
  <div>Triggered when a new note is created as an attachment on a Project, via the Project Info section in Nozbe.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Action</div>
  <div>Triggered when a new action is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggered when a new project is created</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Nozbe Personal</title>
          <meta name="description" content={`Nozbe is an online to-do list style project management tool for your team.`} />
        </>
      ),
    },
  };
}
