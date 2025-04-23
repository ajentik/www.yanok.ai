import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Facebook Groups"
      description={`Groups provide a space to communicate about shared interests with certain people. You can create a group for anything — your family reunion, your after-work sports team, your book club — and customize the group's privacy settings depending on who you want to be able to join and see the group.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/facebook-groups.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Facebook Groups Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(24, 120, 243, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Groups provide a space to communicate about shared interests with certain people. You can create a group for anything — your family reunion, your after-work sports team, your book club — and customize the group\'s privacy settings depending on who you want to be able to join and see the group.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Event</div>
  <div>Triggers when a new event is created for a group.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Photo</div>
  <div>Triggers when a new photo is added to a group\'s feed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post</div>
  <div>Triggers when a new status is added to a group\'s feed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Video</div>
  <div>Triggers when a new video is added to a group\'s feed.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Post Message</div>
  <div>Creates a new message post in a group\'s feed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Photo</div>
  <div>Creates a new photo post in a group\'s feed</div>
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
          <title>Facebook Groups</title>
          <meta name="description" content={`Groups provide a space to communicate about shared interests with certain people. You can create a group for anything — your family reunion, your after-work sports team, your book club — and customize the group's privacy settings depending on who you want to be able to join and see the group.`} />
        </>
      ),
    },
  };
}
