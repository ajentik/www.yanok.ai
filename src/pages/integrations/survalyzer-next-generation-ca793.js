import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Survalyzer"
      description="Survalyzer is a professional survey tool."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/survalyzer-next-generation-ca793.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Survalyzer Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 75, 113, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Survalyzer is a professional survey tool.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Response</div>
  <div>Triggers when a interview has been completed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>This action creates a new member in a panel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Member</div>
  <div>This action deletes a member with or without interviews.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Invite Member</div>
  <div>This action invites a member to a survey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Read Interviews</div>
  <div>This action reads the interviews for a survey.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Read Members</div>
  <div>This action reads the members of a panel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Read Surveys</div>
  <div>This action reads all available surveys.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Read Workspaces</div>
  <div>This action returns all accessible workspaces.</div>
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
          <title>Survalyzer</title>
          <meta name="description" content="Survalyzer is a professional survey tool." />
        </>
      ),
    },
  };
}
