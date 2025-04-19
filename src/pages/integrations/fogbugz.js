import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="FogBugz"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/fogbugz.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        FogBugz Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(161, 126, 85, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">FogBugz is powerful hosted bug tracking software used to make great software by great teams.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Area</div>
  <div>Triggers when a new area is created in a project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Case (For Your Server)</div>
  <div>Triggers when a new case is opened. Note that the fields are and\'ed. If your FogBugz site is running Ocelot and has more than 50,000 new cases per hour, some cases may be lost.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Case in a Filter (For Your Server)</div>
  <div>If your filter takes too long to generate results or your filter has more than 50,000 cases and your FogBugz site is running Ocelot, this trigger will not work.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Case Event</div>
  <div>Triggers when something happens to a case. The events that cause this trigger to fire can be customized. Note that the fields are and\'ed. This trigger can be configured to only fire for cases in a named filter.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Category</div>
  <div>Triggers when a new category is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Milestone</div>
  <div>Triggers when a new milestone is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Person (User)</div>
  <div>Triggers when a new person (user) is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Project</div>
  <div>Triggers when a new project is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Status</div>
  <div>Triggers when a new status is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Tag</div>
  <div>Triggers when a new tag is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Area</div>
  <div>Creates a new area in the project of your choice.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Case</div>
  <div>Creates a new case.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Email From Case</div>
  <div>Sends a new email from an existing case if the "correspondent" field has not been set.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Milestone</div>
  <div>Creates a new project specific or global milestone.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Project</div>
  <div>Creates a new project.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New User</div>
  <div>Creates a new user.</div>
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
          <title>FogBugz</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
