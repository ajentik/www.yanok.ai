import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Planview AgilePlace"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/planview-leankit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Planview AgilePlace Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(153, 203, 68, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Push new Cards, Card moves, and Card updates to your instance of Planview AgilePlace.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Card Entered a Specific Lane</div>
  <div>Triggers when a card enters a specified lane.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Created in a Specific Lane</div>
  <div>Triggers when a card is created in a specific lane.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Created on Board</div>
  <div>Triggers when a card is created anywhere on a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Moved on a Board</div>
  <div>Triggers when a card moves to/from any lane on a board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Updated on Board</div>
  <div>Triggers when a card is updated anywhere on a board.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add a Card Type to a Board</div>
  <div>Adds a card type to a board if it doesn\'t already exist</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment to Card (Or Task)</div>
  <div>Add a Comment to a Card or Task</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Custom Field Choice Item to Dropdown</div>
  <div>Add Custom Field Choice Item to Dropdown</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Tags to a Card (Or Task)</div>
  <div>Add tags to an existing card (or task).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assign User</div>
  <div>Assign a User to a Card (Or Task)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Block a Card (Or Task)</div>
  <div>Block a Card (Or Task)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Card</div>
  <div>Creates a new card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Complete a Task</div>
  <div>Moves a task into it\'s taskboard \'done\' lane</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Parent/Child Connection</div>
  <div>Creates a parent/child relationship between two cards</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Task</div>
  <div>Create a Task Card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Duplicate a Card (Or Task)</div>
  <div>Duplicate a Card (Or Task)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Card by ID</div>
  <div>Gets a Card by ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Card to a Lane</div>
  <div>Moves a card to a different lane.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Parent Cards Based on Status of Children</div>
  <div>Move a parent based on children (1st child moved to an active lane moves the parents into the specified active lane. Once all children are complete, moves the parents to the specified \'done\' lane)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Card to Another Board</div>
  <div>Move a card to another board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Custom Field Choice Item From Dropdown</div>
  <div>Remove Custom Field Choice Item From Dropdown</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Parent/Child Connection</div>
  <div>Removes a parent/child connection between two cards</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Tags From a Card (Or Task)</div>
  <div>Remove tags from an existing card (or task).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Start a Task</div>
  <div>Moves a task card into the \'doing\' lane</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unassign User</div>
  <div>Unassign a User from a Card (Or Task)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unblock a Card (Or Task)</div>
  <div>Unblock a Card (Or Task)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Card (Or Task)</div>
  <div>Updates an existing card (or task card).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Custom Field Value on a Card</div>
  <div>Update Custom Field Value on a Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find first matching card</div>
  <div>Finds the first matching card on a board by searching Title and Header (Custom ID).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find or Create Card</div>
  <div>Finds the first matching card on a board by searching Title and Header (Custom ID).</div>
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
          <title>Planview AgilePlace</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
