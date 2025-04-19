import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="HeySpace"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/heyspace.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        HeySpace Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(139, 43, 189, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">HeySpace is a free task and simple project management software with communication and collaboration features.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      
    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Card</div>
  <div>Creates a card in a specific Workspace, Space and List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Card Comment</div>
  <div>Creates a comment in a card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Checklist Item</div>
  <div>Creates a checklist Item in a Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create List</div>
  <div>Creates a list within a Space</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Message</div>
  <div>Creates a message in a Space chat</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Private Message</div>
  <div>Creates a private message in direct conversation</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Space</div>
  <div>Creates a Space in user\'s workspace</div>
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
          <title>HeySpace</title>
        </>
      ),
    },
  };
}
