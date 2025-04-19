import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Trello"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/trello.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Trello Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 121, 191, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Trello is a team collaboration tool that lets you organize anything and everything to keep your projects on task.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Board</div>
  <div>Triggers when a new board is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card</div>
  <div>Triggers when a new card is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Archived</div>
  <div>Triggers when a Card is archived in Trello.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment in Card</div>
  <div>Triggers when a Comment is added to a Card in Trello.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Activity</div>
  <div>Triggers when there is activity in Trello.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Moved to List</div>
  <div>Triggers when a Card is moved to a List in Trello,</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Due</div>
  <div>Triggers at a specified time before a card is due.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Updated</div>
  <div>Triggers when a Card is updated in Trello.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Checklist</div>
  <div>Triggers when a new checklist is created in Trello.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Label</div>
  <div>Triggers when a new label is created in Trello.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Label Added to Card</div>
  <div>Triggers when a label is added in a Trello card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New List</div>
  <div>Triggers when a new list on a board is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Member on Board</div>
  <div>Triggers when a new member joins a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Notification</div>
  <div>Triggers when you get a new notification in Trello.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create Checklist Item in Card</div>
  <div>Creates a new checklist item in a card.</div>
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
  <div class="font-semibold">Archive Card</div>
  <div>Archives a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Attachment to Card</div>
  <div>Adds one or more attachments to a specific card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Label to Card</div>
  <div>Adds an existing label to a specific card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Card to List</div>
  <div>Moves a specific card to a list on a specific board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Members to Card</div>
  <div>Adds one or more members to a specific card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Card</div>
  <div>Update a card\'s name, description, due date, or position in list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Checklist to Card</div>
  <div>Adds a new (or existing) checklist to a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Close Board</div>
  <div>Closes a board without permanently deleting it.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Comment</div>
  <div>Writes a new comment on a specific card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete Checklist Item in Card</div>
  <div>Completes an existing checklist item in a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Copy Board</div>
  <div>Creates a copy of an existing board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Checklist in Card</div>
  <div>Deletes an existing checklist on a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Label</div>
  <div>Adds a new label on a specific board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create List</div>
  <div>Adds a new list on a specific board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Label from Card</div>
  <div>Removes an existing label from a card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Label on Board</div>
  <div>Finds a label on a particular board by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find List on a Board</div>
  <div>Finds a list on a particular board by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Checklist</div>
  <div>Finds a checklist on a particular board or card by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Checklist Item</div>
  <div>Finds a checklist item on a particular checklist by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Board</div>
  <div>Finds a board in your Trello organization by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Card</div>
  <div>Finds a card in your Trello organization by name, given a specified board and list. Does not search archived cards.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Member</div>
  <div>Finds a member in your Trello organization by name.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Label</div>
  <div>Finds or creates a specific board label.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create List on a Board</div>
  <div>Finds or creates a specific board list.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Checklist</div>
  <div>Finds or creates a specific checklist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Board</div>
  <div>Finds or creates a specific organization board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Card</div>
  <div>Finds or creates a specific organization card.</div>
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
          <title>Trello</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
