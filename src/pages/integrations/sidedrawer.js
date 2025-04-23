import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="SideDrawer"
      description={`SideDrawer is a collaborative digital vault platform designed for efficiency & privacy.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/sidedrawer.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        SideDrawer Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 149, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">SideDrawer is a collaborative digital vault platform designed for efficiency & privacy.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add a Collaborator to a SideDrawer</div>
  <div>Add a collaborator to a SideDrawer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Team to Collaborate With a SideDrawer</div>
  <div>Add a team to collaborate with a SideDrawer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Record</div>
  <div>Create a Record within a specific SideDrawer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a SideDrawer</div>
  <div>Select a Tenant, an appropriate subscription, and create a SideDrawer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send an Info Request to a SideDrawer</div>
  <div>Send an Info Request to a SideDrawer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Content Package</div>
  <div>Send a Content Package to a SideDrawer</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload a File to a Record</div>
  <div>Upload a file to a Record</div>
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
          <title>SideDrawer</title>
          <meta name="description" content={`SideDrawer is a collaborative digital vault platform designed for efficiency & privacy.`} />
        </>
      ),
    },
  };
}
