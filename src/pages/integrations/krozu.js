import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Krozu"
      description={`Krozu is a hierarchical project/business management tool to collaborate, track and organize projects on a business scale`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/krozu.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Krozu Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 188, 212, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Krozu is a hierarchical project/business management tool to collaborate, track and organize projects on a business scale</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Board Changed</div>
  <div>Triggers when any change on a Board happens.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Changed</div>
  <div>Triggers when a Card changes.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">List Changed</div>
  <div>Triggers when a List has changed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Accessible Board</div>
  <div>Triggers when a new Board is now accessible by you within your account.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New List Created in a Board</div>
  <div>Triggers when a new List is created within the specified Board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Board Member</div>
  <div>Triggers when a new Board Member is Added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Board Message Added</div>
  <div>Triggers when a New Board Message is Added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card Comment Added</div>
  <div>Triggers when a new Card Comment is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card Created in Board</div>
  <div>Triggers when a new card is created within a specified board.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card Tag Created</div>
  <div>Triggers when a new Tag has been added to a Card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Checklist Added to a Card</div>
  <div>Triggers when a new Checklist is Created within a Card.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Checklist Item Added to a Checklist</div>
  <div>Triggers when a new Checklist Item is Added to an existing Checklist.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invites</div>
  <div>Triggers when you receive a new Invite.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Card Created or Moved Into List</div>
  <div>Triggers when a new Card is created within or moved into the specified List.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Notifications</div>
  <div>Triggers when you receive a new Notification.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Checklist</div>
  <div>Create a Checklist</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a Checklist Item</div>
  <div>Creates a Checklist Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Comment</div>
  <div>Add a Comment to Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create a List</div>
  <div>Creates a new List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Message</div>
  <div>Add a new Message</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Adjust List Weighting</div>
  <div>Manually adjusts a Lists weighting. Manual List Weighting must be enabled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Board</div>
  <div>Archives a Board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive Card</div>
  <div>Archives a Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Archive List</div>
  <div>Archives a List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Board Member</div>
  <div>Assigns someone to a Board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Card Assignee</div>
  <div>Assign someone to a Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Board Due Date</div>
  <div>Sets the Due Date for a Board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Board End Date</div>
  <div>Sets the End Date for a Board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Board Estimated Hours</div>
  <div>Sets the estimated hours for completion of a Board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Board Due Date Notify Hours</div>
  <div>Set hours previous to the due date of this Board to the project manager of this board. Decimals are allowed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Board Start Date</div>
  <div>Sets the Start Date for a Board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Due Date</div>
  <div>Sets the Due Date for a Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Due Date Notify Hours</div>
  <div>Sets the number of hours before a Due Date for this card to send a notification to the assignee</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card End Date</div>
  <div>Sets the End Date for a Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Progress</div>
  <div>Sets Card Progress</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Start Date</div>
  <div>Sets the Start Date for a Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Check a Checklist Item</div>
  <div>Puts a checkmark in this Checklist Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create New Card</div>
  <div>Create a new card in the board and list provided</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete a Card</div>
  <div>Delete a card (confirmation required)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Checklist</div>
  <div>Deletes a Checklist</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Checklist Item</div>
  <div>Deletes a Checklist Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete List</div>
  <div>Deletes an existing List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Card Estimated Hours</div>
  <div>Set the estimated hours for a Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Limit Cards in List</div>
  <div>Limits the number of Cards that can be contained in this List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Card</div>
  <div>Moves a Card from its original position</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Recurse a Card/Board</div>
  <div>Recurse a Card into a Board or Board into a Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rename Board</div>
  <div>Renames a Board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rename Card</div>
  <div>Renames an existing Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rename Checklist</div>
  <div>Renames a Checklist</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rename Checklist Item</div>
  <div>Renames a Checklist Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rename Group</div>
  <div>Renames a Group</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Rename List</div>
  <div>Renames an existing List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Toggle List Testers</div>
  <div>Toggles the ability for Testers to add Cards to this List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Toggle List Time Tracking</div>
  <div>Toggles the ability for Cards placed in this List to track time.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Toggle List Weighting</div>
  <div>Toggles Smart Progress or Manual List Weighting</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unarchive Board</div>
  <div>Unarchives a Board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unarchive Card</div>
  <div>Unarchives a Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unarchive List</div>
  <div>Unarchives a List</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Board Member</div>
  <div>Removes a Member from a Board</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Card Assignee</div>
  <div>Removes the Assignee from the Card</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Uncheck Checklist Item</div>
  <div>Removes the checkmark from a Checklist Item</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find User Accessible Boards</div>
  <div>Provides a list of all User Accessible Boards</div>
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
          <title>Krozu</title>
          <meta name="description" content={`Krozu is a hierarchical project/business management tool to collaborate, track and organize projects on a business scale`} />
        </>
      ),
    },
  };
}
