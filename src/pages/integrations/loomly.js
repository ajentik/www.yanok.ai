import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Loomly"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/loomly.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Loomly Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(103, 191, 120, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Loomly is the Brand Success Platform that empowers marketing teams to grow successful brands online through collaboration, publishing & analytics features.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Custom Post Idea Created</div>
  <div>Triggers when a new Custom Post Idea is created in a Calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invite Sent to Collaborator</div>
  <div>Triggers when an invite is sent to a Collaborator to join a Calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Item Added to Library</div>
  <div>Triggers when a new item (photo, video, note) is added to a Calendar\'s Library.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post Created</div>
  <div>Triggers when a new Post is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment Left on Post</div>
  <div>Triggers when a new (Loomly) Comment is left on a Loomly Post by a Collaborator.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quick Post Created</div>
  <div>Triggers when a Quick Post is created in a Calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Assignment Updated</div>
  <div>Triggers when a Post Assignment is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post State Updated</div>
  <div>Triggers when a Post State is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Edited</div>
  <div>Triggers when the content of a Post (date, channels, copy, media) is edited within Loomly.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Publish Failed</div>
  <div>Triggers when a Loomly Post has failed publishing to a Channel.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Publish Required</div>
  <div>Triggers when a Loomly Post is due to be published and requires manual publishing.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Post Publish Successful</div>
  <div>Triggers when a Loomly Post is published to a Channel.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Custom Post Idea</div>
  <div>Creates a Custom Post Idea in a Calendar.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Quick Post</div>
  <div>Creates a Quick Post in a Calendar.</div>
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
          <title>Loomly</title>
        </>
      ),
    },
  };
}
