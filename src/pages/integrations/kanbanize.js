import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Kanbanize"
      description="Kanbanize is a lean management platform for Portfolio Kanban implementation that helps teams achieve workflow transparency on a global level."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/kanbanize.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Kanbanize Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(5, 116, 170, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Kanbanize is a lean management platform for Portfolio Kanban implementation that helps teams achieve workflow transparency on a global level.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Board</div>
  <div>Triggers when a new board is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Events Trigger</div>
  <div>Triggers when new event happens on the board. This trigger will fire for all events on your board. You will have to use "Filter" to check the exact value for the "event" parameter and proceed only if it matches exactly the trigger you expect. These are the possible values for the trigger filter: "Card created", "Card details changed", "Card moved", "Card deleted"</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment</div>
  <div>Adds a card comment.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive/Unarchive Card</div>
  <div>Add or remove card from archive.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Block Card</div>
  <div>Block a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Discard Card or Restore Discarded Card</div>
  <div>Discard card or restore discarded card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Download Attachment</div>
  <div>Downloads attachment from a card in Kanbanize. File will be downloaded to Zapier AWS and direct link to it will be provided.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Log Time for Card</div>
  <div>Log working time on a card for specific user, column and lane. Card must not be in "Backlog" or "Requested" sections.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card</div>
  <div>Create new card to selected column and lane on your board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Subtask</div>
  <div>Add new subtask to a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unblock Card</div>
  <div>Unblock card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update/Move Card</div>
  <div>Update card details. Use this action to "Move card" also.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create/Remove Link</div>
  <div>Create or remove a link between two cards.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Upload Attachment</div>
  <div>Upload attachment to card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Card</div>
  <div>Find a card by exactly matching one of the fields.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Card by Custom Card ID</div>
  <div>Get card details by custom card ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Card by ID (Legacy)</div>
  <div>Get Card by ID. Use it when you want to get card comments and history.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Card Details by ID</div>
  <div>Get card details by card ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Card</div>
  <div>Find or Create Card</div>
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
          <title>Kanbanize</title>
          <meta name="description" content="Kanbanize is a lean management platform for Portfolio Kanban implementation that helps teams achieve workflow transparency on a global level." />
        </>
      ),
    },
  };
}
