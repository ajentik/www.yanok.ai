import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Restyaboard"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/restyaboard.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Restyaboard Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(241, 83, 62, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Open source. Trello-like kanban board. Based on Restya platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when a new activity is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Board</div>
  <div>Triggers when a new board is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card</div>
  <div>Triggers when a new card is created</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New List</div>
  <div>Triggers when a new list is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Label to Card</div>
  <div>Adds an existing label to a specific card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Board</div>
  <div>Creates a new board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Card</div>
  <div>Adds a new card on a specific board and list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment</div>
  <div>Writes a new comment on a specific card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create List</div>
  <div>Adds a new list on a specific board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Card</div>
  <div>Update a card\'s name, due date, or position in list.</div>
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
          <title>Restyaboard</title>
        </>
      ),
    },
  };
}
