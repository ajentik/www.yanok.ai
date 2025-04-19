import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Crystal"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/crystal.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Crystal Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(37, 110, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Crystal is a team organizations tool. It gives everyone in your team a shared view of roles, docs and purpose with interactive maps.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contributor Updated in Team</div>
  <div>Triggers when the Contributor\'s list is updated in a specific team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contributor Updated in Ownership</div>
  <div>Triggers when a contributor has been updated in a specific ownership.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List All the Ownerships</div>
  <div>Triggers when you want to list all the ownerships of a team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Ownership in Team</div>
  <div>Triggers when new ownership has been created in a specific team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Resource in Ownership</div>
  <div>Triggers when new resource has been added to an Ownership.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Resource in Team</div>
  <div>Triggers when new resource has been created in a specific team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Owner Updated in Ownership</div>
  <div>Triggers when owner is updated in a specific ownership.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Owner Updated in Team</div>
  <div>Triggers when owner has been updated in an ownership in a specific team.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Ressource</div>
  <div>Create a new ressource to ownership.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a New Ownership</div>
  <div>Create a new ownership in a specific team.</div>
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
          <title>Crystal</title>
        </>
      ),
    },
  };
}
